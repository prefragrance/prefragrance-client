import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getLocalStorage, isTF } from 'hook/useCommon';
import COLOR from 'constants/color';
import { apiCall } from 'hook/useApiCall';
import KeywordBlock from './KeywordBlock';

const KeywordList = ({ currentTab, recentUpdate, setRecentUpdate }) => {
  const [searchKeywordList, setSearchKeywordList] = useState([]);

  useEffect(() => {
    // 현재 최근검색어 탭일 경우 searchKeywordList 다시 set -> 최근검색어 삭제할 경우에
    if (currentTab === '최근 검색어') {
      const recentList = isTF(getLocalStorage('recentSearchList'))
        ? JSON.parse(getLocalStorage('recentSearchList'))
        : [];
      setSearchKeywordList([...recentList]);
    }
    // recentUpdate 바뀔 때마다 rendering
  }, [currentTab, recentUpdate]);

  // 검색어 가져오기
  const getSearchKeyword = async currentTab => {
    switch (currentTab) {
      // 추천 검색어 가져오기
      case '추천 검색어':
        try {
          const response = await apiCall({
            service: 'search-tab',
            method: 'get',
            url: 'recommend',
            data: null,
          });
          setSearchKeywordList([]);
        } catch (error) {
          console.log(error);
        }
        break;
      // 인기 검색어 가져오기
      case '인기 검색어':
        try {
          const response = await apiCall({
            service: 'search-tab',
            method: 'get',
            url: 'popular',
            data: null,
          });
          setSearchKeywordList([]);
        } catch (error) {
          console.log(error);
        }
        break;
      // 최근 검색어 가져오기
      default:
        const recentList = isTF(getLocalStorage('recentSearchList'))
          ? JSON.parse(getLocalStorage('recentSearchList'))
          : [];
        console.log(recentList);
        setSearchKeywordList([...recentList]);
    }
  };

  useEffect(() => {
    // 검색어 탭이 바뀔 때마다 searchKeywordList 교체
    getSearchKeyword(currentTab);
  }, [currentTab]);

  return (
    <Wrapper>
      {searchKeywordList.length > 0 ? (
        searchKeywordList.map(keyword => (
          <KeywordBlock
            key={keyword}
            text={keyword}
            currentTab={currentTab}
            recentUpdate={recentUpdate}
            setRecentUpdate={setRecentUpdate}
          />
        ))
      ) : (
        <NoRecentSearch>{currentTab} 내역이 없습니다.</NoRecentSearch>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  padding: 0.4rem 0;
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
  border-bottom: 1px solid ${COLOR.gray[100]};
`;

const NoRecentSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

export default KeywordList;
