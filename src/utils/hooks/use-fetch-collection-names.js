import { useState, useEffect } from 'react';

import { fetchCollectionNames } from 'utils/helpers/apis/fetch-collection-data';

const useFetchCollectionNames = () => {
  const [collectionNames, setCollectionNames] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchCollectionNames().then(data => {
      setLoading(false);
      setCollectionNames(data);
    });
  }, []);

  return { collectionNames, loading };
};

export default useFetchCollectionNames;
