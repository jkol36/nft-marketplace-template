import axios from "axios";

import { BACKEND_URL } from 'config';

const postUserData = async userData => {
  try {
    const result = await axios({
      url: `${BACKEND_URL}profile`,
      method: 'post',
      data: userData
    });
    if (result.status === 200) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
}

const putUserData = async userData => {
  try {
    const result = await axios({
      url: `${BACKEND_URL}profile`,
      method: 'put',
      data: userData
    });
    if (result.status === 200) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
}

export {
  putUserData,
  postUserData
}
