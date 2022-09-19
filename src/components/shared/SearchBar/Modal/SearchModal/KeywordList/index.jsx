import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getLocalStorage, isTF } from '../../../../../../hook/useCommon';
import KeywordBlock from './KeywordBlock';

// const MOCK_KEYWORDS = ['가나다라', '마바사', '아자차카', '타파하'];

const KeywordList = ({ isOpen }) => {
  const [recentSearchList, setRecentSearchList] = useState([]);
  // isOpen이 truthy이면 로컬스토리지에서 최근검색어 리스트 불러오기
  useEffect(() => {
    if (isOpen) {
      const getList = isTF(getLocalStorage('recentSearchList'))
        ? JSON.parse(getLocalStorage('recentSearchList'))
        : [];
      setRecentSearchList([...getList]);
    }
  }, [recentSearchList]); // 최근 검색어 삭제 시 바로바로 리렌더링되게 deps 추가함

  return (
    <Wrapper>
      {/* TODO MG : tab 전환시 mapping하는 data도 전환 */}
      {recentSearchList.map(keyword => (
        <KeywordBlock key={keyword} text={keyword} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  padding: 0.4rem 0;
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
`;

export default KeywordList;
