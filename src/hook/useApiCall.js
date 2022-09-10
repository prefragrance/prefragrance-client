import axios from 'axios';

import { isTF } from './useCommon';
import { PATH } from '../constants';

export const apiCall = ({ service, method, url, data }) => {
  if (isTF(service)) {
    if (service === 'search') {
      url = `${PATH.api.BASE_URL}${PATH.api.search}?${data.category}=${data.searchInput}`;
    }
  }
  // post, put, delete method 나중에 고려 -> 일단은 get만
  const apiAxios = axios({
    url: url,
    method: method,
  });

  const asyncAxios = async () => {
    try {
      const res = await apiAxios;
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const result = asyncAxios();
  return result;
};
