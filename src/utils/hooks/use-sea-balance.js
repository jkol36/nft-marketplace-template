import { useCallback, useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import Web3 from "web3";

import { useContracts } from "utils/hooks/use-connectors";

const useSeaBalance = () => {
  const { contracts } = useContracts();
  const { account } = useWeb3React();

  const [balance, setBalance] = useState('');

  const getBalance = useCallback(async () => {
    if (account && contracts.closedSeaToken) {
      try {
        const bal = await contracts.closedSeaToken.methods.balanceOf(account).call();
        setBalance(Web3.utils.fromWei(bal, 'ether'));
      } catch (error) {
        console.log('[getBalance] error => ', error);
      }
    }
  }, [account, contracts]);

  useEffect(() => {
    getBalance();
  }, [getBalance]);

  return balance;
}

export default useSeaBalance;
