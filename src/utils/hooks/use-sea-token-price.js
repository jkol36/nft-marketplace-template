import { useCallback, useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';

import { artifacts } from 'config';
import ERC20_ABI from 'utils/abis/erc20';
import { connectContract } from 'utils/helpers/connectors';
import { useContracts } from 'utils/hooks/use-connectors';
import BigNumber from 'bignumber.js';

const useSeaTokenPrice = () => {
  const [price, setPrice] = useState(0);
  const { contracts } = useContracts();

  const { chainId } = useWeb3React();

  const getTokenPrice = useCallback(async () => {
    if (contracts.closedSeaToken) {
      const pairContract = await connectContract(artifacts.seaPair[chainId || process.env.REACT_APP_DEFAULT_CHAINID], ERC20_ABI);
      const busdContract = await connectContract(artifacts.busd[chainId || process.env.REACT_APP_DEFAULT_CHAINID], ERC20_ABI);
      const busdBalInPair = await busdContract.methods.balanceOf(pairContract._address).call();
      const seaBalInPair = await contracts.closedSeaToken.methods.balanceOf(pairContract._address).call();
      const p = new BigNumber(busdBalInPair).div(seaBalInPair).toNumber();
      setPrice(p);
    }
  }, [contracts, chainId]);

  useEffect(() => {
    getTokenPrice();
  }, [getTokenPrice]);

  return price;
}

export default useSeaTokenPrice;
