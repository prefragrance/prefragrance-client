import React, { useState, useEffect } from 'react';
import { useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { getLocalStorage, isTF } from '../../../../../../hook/useCommon';
import KeywordBlock from './KeywordBlock';
import { useRecoilValue, useRecoilState } from 'recoil';
import {
  searchKeywordListState,
  searchTabState,
  searchTabList,
} from '../../../../../../recoil/search/atom';
import { COLOR } from '../../../../../../constants';

const MOCK_KEYWORD_1 = ['가나다라', '마바사', '아자차카', '타파하'];
const MOCK_KEYWORD_2 = ['abcd', 'efg', 'hijk', 'lmnop'];

const KeywordList = ({ isOpen }) => {
  const searchTab = useRecoilValue(searchTabState);
  const [searchKeywordList, setSearchKeywordList] = useRecoilState(
    searchKeywordListState,
  );

  const getSearchKeyword = searchTab => {
    if (searchTab === searchTabList[0]) {
      // 추천 검색어 api call
      // admin 권한 소유자가 직접 추가한 키워드 데이터 사용(백엔드 서버에서 불러옴)
      const getList = MOCK_KEYWORD_1;
      setSearchKeywordList([...getList]);
    } else if (searchTab === searchTabList[1]) {
      // 인기 검색어 api call(백엔드 서버에서 불러옴)
      const getList = MOCK_KEYWORD_2;
      setSearchKeywordList([...getList]);
    } else if (searchTab === searchTabList[2]) {
      // 최근 검색어 call
      const getList = isTF(getLocalStorage('recentSearchList'))
        ? JSON.parse(getLocalStorage('recentSearchList'))
        : [];
      console.log(getList);
      setSearchKeywordList([...getList]);
    }
  };

  useEffect(() => {
    // 검색어 탭이 바뀔 때마다 searchKeywordList 교체
    if (isOpen) {
      getSearchKeyword(searchTab);
    }
  }, [searchTab]);

  return (
    <KeywordListSection
      key={searchKeywordList}
      searchTab={searchTab}
      searchKeywordList={searchKeywordList}
    />
  );
};

const KeywordListSection = ({ searchKeywordList, searchTab }) => {
  return (
    <Wrapper>
      {searchKeywordList.length ? (
        searchKeywordList.map(keyword => (
          <KeywordBlock key={keyword} text={keyword} />
        ))
      ) : (
        <NoRecentSearch>{searchTab} 내역이 없습니다.</NoRecentSearch>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  padding: 0.4rem 0;
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
  border-bottom: 1px solid ${COLOR['GRAY-100']};
`;

const NoRecentSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

export default KeywordList;
