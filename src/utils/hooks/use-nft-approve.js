import { useCallback, useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { connectErc721Token } from 'utils/helpers/connectors';
import { artifacts } from 'config';

const useNftApprove = ({ address }) => {
  const [approved, setApproved] = useState(false);
  const [erc721Token, setErc721Token] = useState();

  useEffect(() => {
    connectErc721Token(address).then(result => {
      setErc721Token(result);
    })
  }, [address]);

  const { account, chainId } = useWeb3React();
  const nftControllerAddress = artifacts.nftController[chainId];

  const getApproved = useCallback(async () => {
    if (erc721Token) {
      const result = await erc721Token.methods.isApprovedForAll(account, nftControllerAddress).call();
      setApproved(result);
    }
  }, [account, erc721Token, nftControllerAddress]);

  useEffect(() => {
    getApproved();
  }, [getApproved])

  const onApprove = useCallback(async () => {
    if (erc721Token) {
      await erc721Token.methods.setApprovalForAll(nftControllerAddress, true).send({ from: account });
      await getApproved();
    }
  }, [erc721Token, nftControllerAddress, getApproved, account]);

  return { approved, onApprove };
};

export default useNftApprove;
