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
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

export default SearchResultList;
