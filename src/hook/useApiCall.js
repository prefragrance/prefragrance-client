import axios from 'axios';

import { isTF } from './useCommon';
import { PATH } from '../constants';

export const apiCall = ({ service, method, url, data }) => {
  let originUrl = '/api';

  if (isTF(service)) {
    let query;
    switch (service) {
      // 검색바에서 검색시
      case 'search-input':
        // 통합검색이면 ?search=검색어 아니면 ?q_field=카테고리&search=검색어
        query =
          data.category === 'whole'
            ? `search=${data.searchInput}`
            : `q_field=${data.category}&search=${data.searchInput}`;
        originUrl += `/${PATH.api.search}?${query}`;
        break;
      // 모달에서 검색시
      case 'search-tab':
        originUrl += `/${PATH.api.search}?tab=${url}`;
        break;
      default:
        return;
    }
  }

  // post, put, delete method 나중에 고려 -> 일단은 get만
  const apiAxios = axios({
    url: `${PATH.api.BASE_URL}${originUrl}`,
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
