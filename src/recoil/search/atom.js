import { atom, selector } from 'recoil';

export const searchTabList = {
  0: '추천 검색어',
  1: '인기 검색어',
  2: '최근 검색어',
};

export const searchTabState = atom({
  key: 'searchTab',
  default: searchTabList[0],
});

export const searchKeywordListState = atom({
  key: 'searchKeywordList',
  default: [],
});
