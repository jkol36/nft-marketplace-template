import { useCallback, useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import Web3 from "web3";

import { useContracts } from "utils/hooks/use-connectors";

const useEthBalance = () => {
  const { web3 } = useContracts();
  const { account } = useWeb3React();

  const [balance, setBalance] = useState('');

  const getBalance = useCallback(async () => {
    if (account && web3) {
      try {
        const bal = await web3.eth.getBalance(account);
        setBalance(Web3.utils.fromWei(bal, 'ether'));
      } catch (error) {
        console.log('[getBalance] error => ', error);
      }
    }
  }, [account, web3]);

  useEffect(() => {
    getBalance();
  }, [getBalance]);

  return balance;
}

export default useEthBalance;
