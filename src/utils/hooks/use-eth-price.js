import { useCallback, useEffect, useState } from 'react';
import BigNumber from 'bignumber.js';

import { useContracts } from 'utils/hooks/use-connectors';

const useEthPrice = () => {
  const [price, setPrice] = useState(0);
  const { contracts } = useContracts();

  const getEthPrice = useCallback(async () => {
    if (contracts.ethPriceChainlink) {
      const p = await contracts.ethPriceChainlink.methods.latestAnswer().call();
      const decimal = await contracts.ethPriceChainlink.methods.decimals().call();
      setPrice(new BigNumber(p).div(new BigNumber(10).pow(decimal)).toNumber());
    }
  }, [contracts]);

  useEffect(() => {
    getEthPrice();
  }, [getEthPrice]);

  return price;
}

export default useEthPrice;
