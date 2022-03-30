import { useCallback, useEffect, useState } from 'react';
import { useContracts } from './use-connectors';

const useSeaTokenFee = () => {
  const [fee, setFee] = useState(0);
  const { contracts } = useContracts();

  const getFee = useCallback(async () => {
    if (contracts.closedSeaToken) {
      try {
        const result = await contracts.closedSeaToken.methods.transferTaxRate().call();
        setFee(result / 100);
      } catch (error) {
        console.log('[getFee] error => ', error);
      }
    }
  }, [contracts]);

  useEffect(() => {
    getFee();
  }, [getFee]);

  return fee;
};

export default useSeaTokenFee;
