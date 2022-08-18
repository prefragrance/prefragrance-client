import React from 'react';
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
      <Body></Body>
    </RecommendationSection>
  );
};

export default Recommendation;
