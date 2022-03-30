import { useCallback, useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';

import { artifacts } from 'config';
import { useContracts } from 'utils/hooks/use-connectors';
import BigNumber from 'bignumber.js';

const useSeaApprove = () => {
  const [approved, setApproved] = useState(false);

  const { account, chainId } = useWeb3React();
  const { contracts } = useContracts();

  const nftControllerAddress = artifacts.nftController[chainId];

  const getApproved = useCallback(async () => {
    if (contracts.closedSeaToken) {
      const result = await contracts.closedSeaToken.methods.allowance(account, nftControllerAddress).call();
      if (new BigNumber(result).isGreaterThan(0)) {
        setApproved(true);
      }
    }
  }, [account, contracts, nftControllerAddress]);

  useEffect(() => {
    getApproved();
  }, [getApproved]);

  const onApprove = useCallback(async () => {
    if (contracts.closedSeaToken) {
      await contracts.closedSeaToken.methods.approve(nftControllerAddress, '100000000000000000000000000000000000000000').send({ from: account });
      await getApproved();
    }
  }, [contracts, nftControllerAddress, getApproved, account]);

  return { approved, onApprove };
};

export default useSeaApprove;
