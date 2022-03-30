import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

import { useContracts } from './use-connectors';

const useListedNFTsByPage = ({ page = 0, size = 10 }) => {
  console.log('use listed nfts by page called')
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const { contracts } = useContracts();
  console.log('contracts', contracts)

  const getListedNfts = useCallback(async () => {
    if (contracts.nftController) {
      setLoading(true);
      if (page === 1) {
        setList([]);
      }
      try {
        const res = await contracts.nftController.methods.getAsksByPageDesc(page, size).call();
        console.log('aj : ****  => ', res);
        let temp = [];
        for(let item of res) {
          let tItem = { tokenAddr: item[0], tokenId: item[1], price: item[2] };
          if (contracts.closedSeaNft) {
            const uri = await contracts.closedSeaNft.methods.tokenURI(tItem.tokenId).call();
            const result = await axios.get(uri);
            tItem = { ...tItem, metadata: result.data, tokenUri: uri };
            temp = [...temp, tItem];
          }
        };
        console.log('temp', temp)
        setList(prev => prev.length + temp.length < 3 ? [...prev, ...temp, ...temp, ...temp] : [...prev, ...temp]);
      } catch (error) {
        console.log('[getListedNfts] error => ', error);
      }
      setLoading(false);
    }
  }, [contracts, page, size]);

  useEffect(() => {
    getListedNfts();
  }, [getListedNfts]);

  return { list, loading };
};

export default useListedNFTsByPage;
