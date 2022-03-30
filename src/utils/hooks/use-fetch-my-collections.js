import { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';

import { fetchMyCollectionData } from 'utils/helpers/apis/fetch-collection-data';

const useFetchMyCollections = () => {
  const [myCollections, setMyCollections] = useState([]);
  const [loading, setLoading] = useState(false);
  const { account } = useWeb3React();

  useEffect(() => {
    if (account) {
      setLoading(true);
      fetchMyCollectionData({ address: account }).then(data => {
        setLoading(false);
        setMyCollections(data);
      });
    }
  }, [account]);

  return { myCollections, loading };
};

export default useFetchMyCollections;
