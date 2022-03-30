import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { useWeb3React } from '@web3-react/core';

import { useContracts } from './use-connectors';
import { getTokenOwnerInfo } from './use-token-owner';
import { BACKEND_URL } from 'config';

const useFetchListedNFTsByQuery = ({ query }) => {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { contracts } = useContracts();
  const { chainId } = useWeb3React();

  const getListedNfts = useCallback(async () => {
    if (contracts.nftController) {
      setLoading(true);
      try {
        const res = await contracts.nftController.methods.getAsks().call();
        let temp = [];

        for(let item of res) {
          let tItem = { tokenAddr: item[0], tokenId: item[1], price: item[2] };
          if (contracts.closedSeaNft) {
            const uri = await contracts.closedSeaNft.methods.tokenURI(tItem.tokenId).call();
            const result = await axios.get(uri);
            if (String(result.name) === String(query)) {
              const ownerInfo = await getTokenOwnerInfo({ chainId, address: item[0], tokenId: item[1] });
              const userInfo = await axios.get(`${BACKEND_URL}profile?address=${ownerInfo.owner_of}`);
              const bids = await contracts.nftController.methods.getBids(tItem.tokenAddr, tItem.tokenId).call();
              let highestBid = bids[0];
              for (let i = 1; i < bids.length; i++) {
                if (bids[i][1] > highestBid[1]) {
                  highestBid = bids[i];
                }
              }  
              tItem = { ...tItem, metadata: result.data, tokenUri: uri, owner_addr: ownerInfo.owner_of, avatar: userInfo.data.avatar };
              if (userInfo.data) {
                tItem = { ...tItem, avatar: userInfo.data.avatar };
              }
              temp = [...temp, { ...tItem }];
            }
          }
        };
        setNfts(temp);
      } catch (error) {
        console.log('[getListedNfts] error => ', error);
        setLoading(false);
      }
      setLoading(false);
    }
  }, [contracts, query, chainId]);

  useEffect(() => {
    getListedNfts();
  }, [getListedNfts]);

  return { nfts, loading };
};

export default useFetchListedNFTsByQuery;
