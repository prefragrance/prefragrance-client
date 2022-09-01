import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import {
  Category,
  Container,
  ContentWrapper,
  DetailTitle,
  ReviewBtn,
  Thumbnail,
  Title,
  TitleWrapper,
  Star,
} from './styled';
import Keywords from '../../shared/Keywords';

const Content = () => {
  return (
    <Container>
      <Thumbnail />
      <ContentWrapper>
        <TitleWrapper>
          <Title>브랜드 | 제품명</Title>
          <Star>
            {[...Array(Math.trunc(4))].map((_, index) => (
              <FontAwesomeIcon key={index} icon={faStar} />
            ))}
            {Math.trunc(1) ? <FontAwesomeIcon icon={faStarHalfStroke} /> : null}
          </Star>
        </TitleWrapper>
        <Category>제품군</Category>
        <DetailTitle>메인 코드</DetailTitle>
        <DetailTitle>키워드</DetailTitle>
        <Keywords />
        <ReviewBtn>리뷰 쓰기</ReviewBtn>
      </ContentWrapper>
    </Container>
  );
};

export default Content;
