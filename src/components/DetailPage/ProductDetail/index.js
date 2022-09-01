import React from 'react';
import { IconWeatherList, IconTimeList } from './IconList';
import {
  Container,
  DetailBox,
  DetailDesc,
  DetailTitle,
  DetailWrapper,
} from './styled';

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

export default ProductDetail;
