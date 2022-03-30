import { useCallback, useEffect, useState } from "react"
import { useContracts } from "./use-connectors";

const useGetBids = ({ tokenAddr, tokenId }) => {
  const [loading, setLoading] = useState(false);
  const [bids, setBids] = useState([]);
  const { contracts } = useContracts();

  const getBids = useCallback(async () => {
    if (contracts.nftController && tokenAddr && tokenId) {
      setLoading(true);
      try {
        const result = await contracts.nftController.methods.getBids(tokenAddr, tokenId).call();
        let temp = [];
        if (result) {
          result.forEach(item => {
            temp = [...temp, { bidder: item[0], price: item[1], withEther: item[2] }];
          })
        }
        setBids(temp);
      } catch (error) {
        console.log('[getBids] error => ', error);
      }
      setLoading(false);
    }
  }, [contracts.nftController, tokenAddr, tokenId]);

  const reload = () => {
    getBids();
  }

  useEffect(() => {
    getBids();
  }, [getBids]);

  return { loading, bids, reload };
};

export default useGetBids;
