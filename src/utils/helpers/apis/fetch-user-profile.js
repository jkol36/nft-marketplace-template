import axios from 'axios';

import { BACKEND_URL } from 'config';

const fetchUserProfile = async ({ address }) => {
  try {
    return axios.get(`${BACKEND_URL}profile?address=${address}`).then(userInfo => {
      if (userInfo.data) {
        return userInfo.data;
      } else {
        return null;
      }
    })  
  } catch (error) {
    console.log('[fetchUserProfile] error => ', error);
    return null;
  }
}

export default fetchUserProfile;
