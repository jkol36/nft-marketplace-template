import axios from "axios";
import getNftLikes from './getNftLikes'
import { BACKEND_URL } from 'config';

const searchNftsByName = async (name) => {
  console.log('searching nfts by name', name)
  try{
    const result = await axios({
      url: `${BACKEND_URL}nfts/search`,
      method: 'GET',
      params: {name}
    });
    console.log(result)
    const nfts = Promise.all(result.data?.data?.nfts.map(async (nft) => {
      const {tokenAddr, tokenId} = nft._source;
      const viewsAndLikes = await getNftLikes(tokenAddr, tokenId)
      return Object.assign({}, nft, {
        likesAndViews: {
          likes: viewsAndLikes.data.data.likes, 
          likedAccounts: viewsAndLikes.data.data.likedAccounts, 
          viewedAccounts: viewsAndLikes.data.data.viewedAccounts, 
          views: viewsAndLikes.data.data.views
      }})
    })).then(res => res)
    return nfts
  }
  catch(err) {
    console.log('error fetching nfts from rest api', err)
  }
  
  
};

export default searchNftsByName;
