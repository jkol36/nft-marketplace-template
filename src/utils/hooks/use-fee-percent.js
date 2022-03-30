import { useCallback, useEffect, useState } from 'react';

import { useContracts } from 'utils/hooks/use-connectors';
import Web3 from 'web3';
import useSeaBalance from './use-sea-balance';

const useFeePercent = () => {
  const [feePercent, setFeePercent] = useState(0);
  const { contracts } = useContracts();
  const seaTokenBalance = useSeaBalance();

  const getFeePercent = useCallback(async () => {
    if (contracts.nftController) {
      const feeExamptionRate = await contracts.nftController.methods.seaAmountForExemptFee().call();
      const f = await contracts.nftController.methods.feePercent().call();
      if (Number(seaTokenBalance) < Number(Web3.utils.fromWei(String(feeExamptionRate), 'ether'))) {
        setFeePercent(f / 100);
      } else {
        setFeePercent(0);
      }
    }
  }, [contracts, seaTokenBalance]);

  useEffect(() => {
    getFeePercent();
  }, [getFeePercent]);

  return feePercent;
}

export default useFeePercent;
