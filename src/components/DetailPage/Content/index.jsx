import React from 'react';
import styled from 'styled-components';
import COLOR from '../../../constants/color';

import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
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
              <FaStar key={index} />
            ))}
            {Math.trunc(1) ? <FaStarHalfAlt /> : null}
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

const Container = styled.div`
  width: 100%;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 90px;
  margin-bottom: 30px;
`;
const Thumbnail = styled.div`
  width: 400px;
  height: 500px;
  background: ${COLOR['GRAY-100']};
  margin-right: 30px;
`;
const ContentWrapper = styled.div`
  width: 500px;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  // background: tomato;
`;
const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
`;
const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  padding-top: 5px;
  margin-right: 10px;
  display: flex;
  align-items: center;
`;
const Star = styled.div`
  font-size: 1.6rem;
  padding: 10px 0;
  display: flex;
  path {
    fill: ${COLOR['GREEN-300']};
  }
`;
const Category = styled.div`
  color: ${COLOR['GRAY-200']};
  padding: 10px 0;
`;
const DetailTitle = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  padding: 10px 0;
`;
const ReviewBtn = styled.button`
  width: 100%;
  padding: 8px 30px;
  border-radius: 3px;
  background: ${COLOR['GREEN-400']};
  color: ${COLOR.WHITE};
  text-align: center;
  font-weight: bold;
  font-size: 1.1rem;
`;

export default Content;
