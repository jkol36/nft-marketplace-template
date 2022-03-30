import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useWeb3React } from '@web3-react/core';

import { MORALIS_CHAIN_IDS, MORALIS_API_URI } from 'config';
import { connectContract } from 'utils/helpers/connectors';
import erc721Abi from 'utils/abis/erc721';

const getTokenOwnerInfo = async ({ chainId, address, tokenId }) => {
  try {
    const { data } = await axios({
      method: 'get',
      url: `${MORALIS_API_URI}nft/${address}/${tokenId}/owners?chain=${MORALIS_CHAIN_IDS[chainId || parseInt(process.env.REACT_APP_DEFAULT_CHAINID)]}&format=decimal`,
      headers: {
        accept: 'application/json',
        'X-API-Key': process.env.REACT_APP_MORALIS_API_KEY
      }
    });
    return data.result[0];
  } catch (error) {
    console.log('[getTokenOwnerInfo] error => ', error);
  }
};

const useTokenOwner = ({ address, tokenId }) => {
  const [tokenInfo, setTokenInfo] = useState({});
  const { chainId } = useWeb3React();

  const fetchInfo = useCallback(async () => {
    let info = await getTokenOwnerInfo({ chainId, address, tokenId });
    if (info) {
      if (!info?.metadata) {
        try {
          const contract = await connectContract(address, erc721Abi);
          const uri = await contract.methods.tokenURI(info.token_id).call();
          const metadata = await axios.get(uri);
          if (metadata.data) {
            info = { ...info, metadata: JSON.stringify(metadata.data) };
          }
        } catch (error) {
          console.log('[fetchInfo] fetch metadata error => ', error);
        }
      }
      setTokenInfo(info);
    }
  }, [chainId, address, tokenId]);

  useEffect(() => {
    fetchInfo();
  }, [fetchInfo]);

  const reload = () => {
    fetchInfo();
  }

  return { reload, tokenInfo };
};

export default useTokenOwner;

export {
  getTokenOwnerInfo
};
