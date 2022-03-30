import { useCallback, useEffect, useState } from "react";
import axios from 'axios';
import { useWeb3React } from '@web3-react/core';

import { useContracts } from "./use-connectors";
import { getTokenOwnerInfo } from './use-token-owner';
import { BACKEND_URL } from 'config';

const useFetchNftsByCategory = ({ category, page = 0, size = 10 }) => {
  const [nfts, setNfts] = useState([]);
  const [currentPage, setCurrentPage] = useState(page);
 
  const [loading, setLoading] = useState(false);
  const { contracts } = useContracts();
  const { chainId } = useWeb3React();

  const getNftsByCategory = useCallback(async () => {
    if (contracts.nftController) {
      setLoading(true);
      try {
        const result = await contracts.nftController.methods.getAsksByCategoryAndPageDesc(category, page, size).call();
        let temp = [];
        for(let item of result) {
          let tItem = { tokenAddr: item[0], tokenId: item[1], price: item[2] };
          if (contracts.closedSeaNft) {
            const uri = await contracts.closedSeaNft.methods.tokenURI(tItem.tokenId).call();
            const result = await axios.get(uri);
            const ownerInfo = await getTokenOwnerInfo({ chainId, address: item[0], tokenId: item[1] });
            const userInfo = await axios.get(`${BACKEND_URL}profile?address=${ownerInfo.owner_of}`);
            const bids = await contracts.nftController.methods.getBids(tItem.tokenAddr, tItem.tokenId).call();
            let highestBid = bids[0];
            for (let i = 1; i < bids.length; i++) {
              if (bids[i][1] > highestBid[1]) {
                highestBid = bids[i];
              }
            }
            tItem = {
              ...tItem,
              metadata: result.data,
              tokenUri: uri,
              owner_addr: ownerInfo.owner_of,
              categoryText: category,
            };
            if (userInfo.data) {
              tItem = {
                ...tItem,
                avatar: userInfo.data.avatar,
              };
            }
            if (highestBid) {
              tItem = {
                ...tItem,
                highestBid: highestBid
              }
            }
          }
          temp = [...temp, { ...tItem }];
        }
        if (page === 0) {
          setNfts(temp);
        } else {
          setNfts(prev => [...prev, ...temp]);
        }
        setCurrentPage(page);
      } catch (error) {
        console.log('[getNftsByCategory] error => ', error);
      }
      setLoading(false);
    }
  }, [contracts, category, page, size, chainId]);

  useEffect(() => {
    getNftsByCategory();
  }, [getNftsByCategory]);

  return {
    loading,
    nfts,
    currentPage
  };
};

export default useFetchNftsByCategory;
