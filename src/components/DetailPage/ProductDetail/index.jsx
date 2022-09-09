import React from 'react';
import { IconWeatherList, IconTimeList } from './IconList';
import styled from 'styled-components';

const ProductDetail = () => {
  return (
    <Container>
      <DetailWrapper>
        <DetailBox>
          <DetailTitle>잘 어울리는 계절</DetailTitle>
          <IconWeatherList />
          <DetailDesc>68%의 사용자가 봄에 어울린다고 답변했어요</DetailDesc>
        </DetailBox>
        <DetailBox>
          <DetailTitle>잘 어울리는 시간</DetailTitle>
          <IconTimeList />
          <DetailDesc>81%의 사용자가 낮에 어울린다고 답변했어요</DetailDesc>
        </DetailBox>
      </DetailWrapper>
      <DetailWrapper>
        <DetailBox>
          <DetailTitle>지속력</DetailTitle>
        </DetailBox>
        <DetailBox>
          <DetailTitle>향 강도</DetailTitle>
        </DetailBox>
      </DetailWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const DetailWrapper = styled.div`
  width: 1000px;
  margin: 20px 0;
  padding: 0px 30px;
  margin: 0 auto;
  margin-bottom: 50px;
  display: flex;
`;
const DetailBox = styled.div`
  flex: 0.5;
`;
const DetailTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  padding: 10px 0;
  margin-bottom: 5px;
`;
const DetailDesc = styled.div`
  width: 100%;
  text-align: center;
  font-weight: bold;
  margin-top: 20px;
`;

export default ProductDetail;
