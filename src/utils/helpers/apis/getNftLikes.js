import axios from 'axios';
import { BACKEND_URL } from 'config';

const getNftLikes = async (tokenAddr=null, tokenId=null) => {
  console.log('get likes for nft', tokenAddr, tokenId)
	try {
    const result = await axios({
      url: `${BACKEND_URL}nfts/like`,
      method: 'GET',
      params: {tokenAddr, tokenId}
    });
    return result
  }
  catch(err) {
    console.log('error fetching nfts from rest api', err)
  }
}

export default getNftLikes