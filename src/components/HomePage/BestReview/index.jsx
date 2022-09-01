import React from 'react';
import ReviewBox from './ReviewBox';
import {
  BestReviewSection,
  Header,
  Title,
  Body,
  ColumnSection,
  RowSection,
} from './styled';

const BestReview = () => {
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

  return (
    <BestReviewSection>
      <Header>
        <Title>베스트 리뷰 상품</Title>
      </Header>
      <Body>
        <ColumnSection>
          {RAW_DATA &&
            RAW_DATA.slice(0, 3).map(obj => {
              <ReviewBox key={obj.product_id} {...obj} />;
            })}
        </ColumnSection>
        <RowSection>
          {RAW_DATA &&
            RAW_DATA.slice(3).map(obj => {
              <ReviewBox key={obj.product_id} {...obj} />;
            })}
        </RowSection>
      </Body>
    </BestReviewSection>
  );
};

export default BestReview;
