import { useCallback, useEffect, useState } from "react"

import { useContracts } from "./use-connectors";

const useIsBannedNFT = ({ tokenAddr, tokenId }) => {
  const [isBanned, setIsBanned] = useState(false);
  const { contracts } = useContracts();

  const fetchBannedState = useCallback(async () => {
    if (contracts.nftController) {
      try {
        const is = await contracts.nftController.methods.isBannedToken(tokenAddr, tokenId).call();
        setIsBanned(is);
      } catch (error) {
        console.log('[fetchBannedState] error: ', error);
      }
    }
  }, [contracts, tokenAddr, tokenId]);

  useEffect(() => {
    fetchBannedState();
  }, [fetchBannedState]);

  return isBanned;
};

export default useIsBannedNFT;
