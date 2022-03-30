import axios from 'axios';

import { BACKEND_URL } from 'config';

const fetchMyCollectionData = async ({ address }) => {
  try {
    return axios.get(`${BACKEND_URL}my-collections?owner=${address}`).then(collectionInfo => {
      if (collectionInfo.data) {
        return collectionInfo.data;
      } else {
        return [];
      }
    })
  } catch (error) {
    console.log('[fetchUserProfile] error => ', error);
    return [];
  }
};

const fetchCollectionNames = async () => {
  try {
    return axios.get(`${BACKEND_URL}collection-names`).then(collectionInfo => {
      if (collectionInfo.data) {
        return collectionInfo.data;
      } else {
        return [];
      }
    })
  } catch (error) {
    console.log('[fetchCollectionNames] error => ', error);
    return [];
  }
};

const fetchCollection = async (name) => {
  try {
    return axios.get(`${BACKEND_URL}collection?name=${name}`).then(collectionInfo => {
      if (collectionInfo.data) {
        return collectionInfo.data;
      } else {
        return [];
      }
    })
  } catch (error) {
    console.log('[fetchCollectionNames] error => ', error);
    return [];
  }
};

export {
  fetchMyCollectionData,
  fetchCollectionNames,
  fetchCollection
};
