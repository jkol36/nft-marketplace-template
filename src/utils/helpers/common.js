import hash from 'object-hash';

import CHAINS from 'utils/constants/chains';

const getEllips = str => {
  if (str) {
    return `${str.slice(0,6)}...${str.slice(-12)}`;
  }
  return '';
};

const getChainNames = (chainId) => {
  return CHAINS.find(chain => chain.chainId === chainId)?.title;
};

const convertNumberToCurrencyFormat = number => {
  return Intl.NumberFormat('en-US', { maximumSignificantDigits: 3, style: 'currency', currency: 'USD' }).format(number);
};

const convertNumber = number => {
  return Intl.NumberFormat('en-US', { maximumSignificantDigits: 5 }).format(number);
};

const getCollectionHash = (user, contract) => {
  const hashVal = hash({user, contract});
  return `${hashVal.substr(0, 5)}${hashVal.substr(hashVal.length - 5, hashVal.length)}`.toUpperCase();
}

const toDataURL = async url => {
  return fetch(url)
    .then(response => response.blob())
    .then(blob => new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(reader.result)
    reader.onerror = reject
    reader.readAsDataURL(blob)
    }))
};

const dataURLtoFile = (dataurl, filename) => {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
    u8arr[n] = bstr.charCodeAt(n);
    }
  return new File([u8arr], filename, {type:mime});
};


export {
  getEllips,
  getChainNames,
  convertNumber,
  convertNumberToCurrencyFormat,
  getCollectionHash,
  toDataURL,
  dataURLtoFile
};
