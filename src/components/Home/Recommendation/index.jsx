import React from 'react';
import InfoBox from './InfoBox';
import { RecommendationSection, Header, Title, FilterUl, Body } from './styled';

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

export default Recommendation;
