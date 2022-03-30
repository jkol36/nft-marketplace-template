import { useCallback, useEffect, useState } from 'react';
import { useContracts } from './use-connectors';

const useNftsListedByUser = ({ account }) => {
  const [userNfts, setUserNfts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { contracts } = useContracts();

  const getUserNfts = useCallback(async () => {
    if (contracts.nftController && account) {
      try {
        setLoading(true);
        let nfts = await contracts.nftController.methods.getAsksByUser(account).call();
        nfts = nfts.map(([tokenAddr, tokenId, price, withEther]) => ({ price, tokenAddr, tokenId, withEther }));
        setUserNfts(nfts || []);
        setLoading(false);
      } catch (error) {
        console.log('[getUserNfts] error => ', error);
        setLoading(false);
      }
    }
  }, [contracts, account]);

  useEffect(() => {
    getUserNfts();
  }, [getUserNfts]);

  const reload = async () => {
    await getUserNfts();
  };

  return { userNfts, reload, loading };
};

export default useNftsListedByUser;
