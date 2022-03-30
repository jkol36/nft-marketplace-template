import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

import { BACKEND_URL } from 'config';

const useGetUser = ({ account }) => {
  const [user, setUser] = useState({});
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const getUserInfo = useCallback(async () => {
    const result = await axios.get(`${BACKEND_URL}profile?address=${account}`);
    if (result.status === 200) {
      setUser(result.data);
    } else {
      setError(result.body.message);
    }
    setLoading(false);
  }, [account]);

  const reload = useCallback(async () => {
    await getUserInfo();
  }, [getUserInfo]);

  useEffect(() => {
    setLoading(true);
    getUserInfo();
  }, [getUserInfo]);

  return { user, error, loading, reload };
}

export default useGetUser;
