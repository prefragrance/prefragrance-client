import axios from 'axios';

import { isTF } from './useCommon';
import { PATH } from '../constants';

export const apiCall = ({ service, method, url, data }) => {
  if (isTF(service)) {
    let query;
    switch (service) {
      case 'search':
        // 통합검색이면 ?search=검색어 아니면 ?q_field=카테고리&search=검색어
        query =
          data.category === 'whole'
            ? `search=${data.searchInput}`
            : `q_field=${data.category}&search=${data.searchInput}`;
        url = `?${query}`;
        break;
      default:
        return;
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
