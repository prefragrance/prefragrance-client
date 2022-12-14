import React from 'react';
import ReviewBox from './ReviewBox';
import styled from 'styled-components';

const RAW_DATA = [
  {
    product_id: 1,
    thumbnail_url: '../../../assets/images/취향로고.png',
    producer: 'ADOPT',
    name: '어돕트 프랑수 향수',

    content:
      '제가 예전부터 찾던 향이에요! 인위적인 향이 아닌 빨래방 냄새 나는 섬유 향수에요',
    nickname: 'mindol0320',
    pub_date: '2022.08.19',
  },
  {
    product_id: 2,
    thumbnail_url: '../../../assets/images/취향로고.png',
    producer: 'ADOPT',
    name: '어돕트 프랑수 향수',

    content:
      '제가 예전부터 찾던 향이에요! 인위적인 향이 아닌 빨래방 냄새 나는 섬유 향수에요',
    nickname: 'mindol0320',
    pub_date: '2022.08.19',
  },
  {
    product_id: 3,
    thumbnail_url: '../../../assets/images/취향로고.png',
    producer: 'ADOPT',
    name: '어돕트 프랑수 향수',

    content:
      '제가 예전부터 찾던 향이에요! 인위적인 향이 아닌 빨래방 냄새 나는 섬유 향수에요',
    nickname: 'mindol0320',
    pub_date: '2022.08.19',
  },
  {
    product_id: 4,
    thumbnail_url: '../../../assets/images/취향로고.png',
    producer: 'ADOPT',
    name: '어돕트 프랑수 향수',

    content:
      '제가 예전부터 찾던 향이에요! 인위적인 향이 아닌 빨래방 냄새 나는 섬유 향수에요',
    nickname: 'mindol0320',
    pub_date: '2022.08.19',
  },
  {
    product_id: 5,
    thumbnail_url: '../../../assets/images/취향로고.png',
    producer: 'ADOPT',
    name: '어돕트 프랑수 향수',

    content:
      '제가 예전부터 찾던 향이에요! 인위적인 향이 아닌 빨래방 냄새 나는 섬유 향수에요',
    nickname: 'mindol0320',
    pub_date: '2022.08.19',
  },
  {
    product_id: 6,
    thumbnail_url: '../../../assets/images/취향로고.png',
    producer: 'ADOPT',
    name: '어돕트 프랑수 향수',

    content:
      '제가 예전부터 찾던 향이에요! 인위적인 향이 아닌 빨래방 냄새 나는 섬유 향수에요',
    nickname: 'mindol0320',
    pub_date: '2022.08.19',
  },
];

const BestReview = () => {
  return (
    <BestReviewSection>
      <Header>
        <Title>베스트 리뷰 상품</Title>
      </Header>
      <Body>
        <ColumnSection>
          {RAW_DATA.slice(0, 3).map(obj => (
            <ReviewBox key={obj.product_id} {...obj} />
          ))}
        </ColumnSection>
        <RowSection>
          {RAW_DATA.slice(3).map(obj => (
            <ReviewBox key={obj.product_id} {...obj} />
          ))}
        </RowSection>
      </Body>
    </BestReviewSection>
  );
};

const BestReviewSection = styled.div`
  height: 100%;
  margin: 5.6rem;
  margin-top: 2rem;
  display: grid;
  grid-template-rows: 50px auto;
  gap: 1rem;
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

const Body = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  background-color: #ededed;
  gap: 1rem;
  padding: 1rem;
`;

const ColumnSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const RowSection = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
`;

export default BestReview;
