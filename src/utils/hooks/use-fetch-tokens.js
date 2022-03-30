import { useCallback, useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import axios from 'axios';

import { MORALIS_CHAIN_IDS, MORALIS_API_URI } from 'config';
import { useContracts } from 'utils/hooks/use-connectors';
import { connectContract } from 'utils/helpers/connectors';
import erc721Abi from 'utils/abis/erc721';

const useFetchTokens = ({ nftAddress }) => {
  const [tokens, setTokens] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isCalled, setIsCalled] = useState(false);
  const { account, chainId } = useWeb3React();
  const { contracts } = useContracts();

  useEffect(() => {
    if (account) {
      setIsCalled(false);
    }
  }, [account]);

  const fetchTokens = useCallback(async () => {
    if (!isCalled) {
      setLoading(true);
      try {
        const { data } = await axios({
          method: 'get',
          url: `${MORALIS_API_URI}${account}/nft/${nftAddress}?chain=${MORALIS_CHAIN_IDS[chainId || parseInt(process.env.REACT_APP_DEFAULT_CHAINID)]}&format=decimal`,
          headers: {
            accept: 'application/json',
            'X-API-Key': process.env.REACT_APP_MORALIS_API_KEY
          }
        });

        let tokens = [];
        const contract = await connectContract(nftAddress, erc721Abi);
        if (data.result) {
          for (let item of data.result) {
            const uri = await contract.methods.tokenURI(item.token_id).call();
            const result = await axios.get(uri);
            tokens = [...tokens, { ...item, metadata: result.data, token_uri: uri }];
          }
          setTokens(tokens);
          setIsCalled(true);
        }
      } catch (error) {
        console.log('[fetchTokens] error => ', error);
      }
      setLoading(false);
    }
  }, [nftAddress, account, chainId, isCalled]);

  useEffect(() => {
    fetchTokens();
  }, [fetchTokens])
  
  return { loading, tokens };
};

export default useFetchTokens;
