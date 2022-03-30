import axios from 'axios';

import { BACKEND_URL } from 'config';

const fetchViewAndLike = async ({ tokenAddr, tokenId }) => {
  try {
    return axios.get(`${BACKEND_URL}nfts/like?tokenAddr=${tokenAddr}&tokenId=${tokenId}`).then(info => {
      if (info.data) {
        console.log('got info', info.data)
        return info.data;
      } else {
        return null;
      }
    }) 
  } catch (error) {
    console.log('[fetchViewAndLike] error => ', error);
  }
};

const addView = async ({ tokenAddr, tokenId, address }) => {
  try {
    const result = await axios({
      method: 'POST',
      url: `${BACKEND_URL}view-and-like`,
      data: {
        tokenAddr,
        tokenId,
        address,
        views: 1,
        likes: 0
      }
    });
    if (result.status === 200) {
      return true;
    }
  } catch (error) {
    console.log('[addView] error => ', error);
  }
  return false;
};

const updateLikeInfo = async ({tokenAddr, tokenId, account}) => {
  console.log('updating like info called', tokenAddr, tokenId, account)
  try {
    const result = await axios({
      method: 'POST',
      url: `${BACKEND_URL}nfts/like`,
      data: {tokenAddr, tokenId, account}
    });
    console.log('got result', result)
    if (result.status === 200) {
      console.log('liked')
      return true;
    }
  } catch (error) {
    console.log('[addView] error => ', error);
  }
  return false;
}
export {
  fetchViewAndLike,
  addView,
  updateLikeInfo
}