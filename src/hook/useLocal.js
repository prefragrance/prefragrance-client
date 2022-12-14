import {
  setLocalStorage,
  getLocalStorage,
  deleteLocalStorage,
  isTF,
} from './useCommon';

// 최근검색어 업데이트
export const updateRecentSearch = value => {
  // localStorage에서 가져오고 validation check
  let recentSearchList = isTF(getLocalStorage('recentSearchList'))
    ? JSON.parse(getLocalStorage('recentSearchList'))
    : [];
  // recentSearchList에 value가 이미 있는지 check
  const already = recentSearchList.indexOf(value);
  // recentSearchList에 value가 이미 있으면
  if (already >= 0) {
    // 기존에 있던 검색어 삭제하고
    recentSearchList.splice(already, 1);
    // value 맨 앞에 추가
    recentSearchList.unshift(value);
    // value가 없으면 맨 앞에 추가만
  } else {
    recentSearchList.unshift(value);
  }
  // 최근검색어가 5개 넘어가면 cut
  if (recentSearchList.length > 5) {
    recentSearchList = recentSearchList.slice(0, 5);
  }
  setLocalStorage('recentSearchList', JSON.stringify(recentSearchList));
};

// 최근검색어 하나 삭제
export const deleteRecentSearchEach = value => {
  let recentSearchList = isTF(getLocalStorage('recentSearchList'))
    ? JSON.parse(getLocalStorage('recentSearchList'))
    : [];
  const already = recentSearchList.indexOf(value);
  if (already >= 0) {
    recentSearchList.splice(already, 1);
  }
  setLocalStorage('recentSearchList', JSON.stringify(recentSearchList));
};

// 최근검색어 전체삭제
export const deleteRecentSearchAll = () => {
  deleteLocalStorage('recentSearchList');
};
