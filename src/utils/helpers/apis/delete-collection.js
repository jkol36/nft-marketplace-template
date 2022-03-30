import axios from "axios";

import { BACKEND_URL } from 'config';

const deleteCollection = async (data) => {
  try {
    const result = await axios({
      url: `${BACKEND_URL}collection`,
      method: 'DELETE',
      data
    });
    if (result.status === 200) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

export default deleteCollection;
