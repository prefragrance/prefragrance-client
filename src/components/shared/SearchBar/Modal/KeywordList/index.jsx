import React from 'react';
import styled from 'styled-components';
import KeywordBlock from './KeywordBlock';

const MOCK_KEYWORDS = ['가나다라', '마바사', '아자차카', '타파하'];

const KeywordList = () => {
  return (
    <Wrapper>
      {MOCK_KEYWORDS.map(keyword => (
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
