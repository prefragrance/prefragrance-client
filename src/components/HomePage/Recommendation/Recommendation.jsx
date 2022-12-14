import React from 'react';
import InfoBox from './InfoBox/InfoBox';
import styled from 'styled-components';

const Recommendation = () => {
  return (
    <RecommendationSection>
      <Header>
        <Title>금주의 핫한 취향</Title>
        <FilterUl>
          <li>리뷰순</li>
          <li>조회순</li>
        </FilterUl>
      </Header>
      <Body>
        <InfoBox />
        <InfoBox />
        <InfoBox />
        <InfoBox />
        <InfoBox />
      </Body>
    </RecommendationSection>
  );
};

const RecommendationSection = styled.div`
  height: 400px;
  margin: 0 5.6rem;
  display: grid;
  grid-template-rows: 1fr 6fr;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-size: 1.75rem;
  font-weight: 700;
`;

const FilterUl = styled.ul`
  display: flex;
  & > li::after {
    font-size: 1rem;
    content: '|';
    padding: 0 0.4rem;
  }
  & > li:last-child::after {
    content: '';
  }
`;

const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

export default Recommendation;
