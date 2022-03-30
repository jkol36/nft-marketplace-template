import { useCallback, useEffect, useState } from "react";
import axios from 'axios';
import searchNftsByName from '../helpers/apis/searchNftsByName';

import { BACKEND_URL } from 'config';

const useFetchNftsByName = ({ name, state, page = 0, size = 10 }) => {
  console.log('searchNftsByName hook', name, state)
  const [nfts, setNfts] = useState([]);
  console.log('nfts use fetch nfts by name', nfts)
 
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    console.log('use effect running useFetchNftsByName',)
    setLoading(true)
    const result = await searchNftsByName(name);
    console.log('fetch nfts by name returned', result)
    setNfts(result)
    setLoading(false)
  }, [name, state]);

  return {
    loading,
    nfts,
  };
};

export default useFetchNftsByName;
