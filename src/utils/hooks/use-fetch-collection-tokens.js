import { useCallback, useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import axios from 'axios';

import { MORALIS_CHAIN_IDS, MORALIS_API_URI } from 'config';
import { connectContract } from 'utils/helpers/connectors';
import erc721Abi from 'utils/abis/erc721';
import { fetchCollection } from 'utils/helpers/apis/fetch-collection-data';

const useFetchCollectionTokens = ({ name, nftAddress }) => {
  const [tokens, setTokens] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isCalled, setIsCalled] = useState(false);
  const { account, chainId } = useWeb3React();

  useEffect(() => {
    if (account) {
      setIsCalled(false);
    }
  }, [account]);

  const fetchTokens = useCallback(async () => {
    if (!isCalled) {
      setLoading(true);
      try {
        let tokens = [];
        const collection = await fetchCollection(name);
        if (collection) {
          for (let tokenId of collection.tokens) {
            console.log('got token id', tokenId)
            const { data } = await axios({
              method: 'get',
              url: `${MORALIS_API_URI}nft/${nftAddress}/${tokenId}?chain=${MORALIS_CHAIN_IDS[chainId || parseInt(process.env.REACT_APP_DEFAULT_CHAINID)]}&format=decimal`,
              headers: {
                accept: 'application/json',
                'X-API-Key': process.env.REACT_APP_MORALIS_API_KEY
              }
            });
            if (data.token_uri) {
              const contract = await connectContract(nftAddress, erc721Abi);
              const uri = await contract.methods.tokenURI(data.token_id).call();
              const result = await axios.get(uri);
              tokens = [...tokens, { ...data, metadata: result.data, token_uri: uri }];
            }
          }
          setTokens(tokens);
          setIsCalled(true);
        }
      } catch (error) {
        console.log('[fetchTokens] error => ', error);
      }
      setLoading(false);
    }
  }, [name, nftAddress, chainId, isCalled]);

  useEffect(() => {
    fetchTokens();
  }, [fetchTokens])
  
  return { loading, tokens };
};

export default useFetchCollectionTokens;
