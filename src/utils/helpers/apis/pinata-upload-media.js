import axios from 'axios';

import { PINATA_BASE_URL, PINATA_API_KEY, PINATA_SECRET_API_KEY } from 'config';

const uploadMedia = async file => {
  const formdata = new FormData();
  formdata.append('file', file);
  const url = `${PINATA_BASE_URL}pinning/pinFileToIPFS`;
  return axios.post(url, formdata, {
    maxContentLength: 'Infinity',
    headers: {
      'Content-Type': `multipart/form-data; boundary=${formdata._boundary}`,
      pinata_api_key: PINATA_API_KEY,
      pinata_secret_api_key: PINATA_SECRET_API_KEY,
    }
  }).then(response => {
    const y = response.data.IpfsHash;
    return y;
  }).catch(error => {
    console.log('[uploadMedia] error => ', error);
    return null;
  })
};

export default uploadMedia;
