import React from 'react';
import styled from 'styled-components';
import COLOR from 'constants/color';
import SearchResultBlock from './SearchResultBlock';

const SearchResultList = ({ searchResultData }) => {
  return (
    <Container>
      {searchResultData &&
        searchResultData.map(result => (
          <SearchResultBlock key={result.id} data={result} />
        ))}
    </Container>
  );
};

const Container = styled.div`
  width: 1200px;
  height: auto;
  min-height: 100%; // 세로 최솟값 더 정확하게 연동시키는 방법?
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  background-color: ${COLOR.gray[100]};
`;

export default SearchResultList;
