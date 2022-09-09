import React, { useState } from 'react';
import MagazineBox from './MagazineBox';
import styled from 'styled-components';

// text가 12개씩 들어온다 가정
const text = [
  '여름밤의 촉촉한 향 BEST 10',
  '달콤한 플로럴 향 BEST 20',
  '남자 우디 향수 BEST 10',
  '포근한 파우더 향 BEST 30',
  '상쾌한 시트러스 향 BEST 20 ',
  '호불호 없는 여자 향수 BEST 10',
  '가나다라 BEST 10',
  '마바사 BEST 20',
  '아자차카 BEST 10',
  '타파하 BEST 30',
  '1234 BEST 20 ',
  '5678 BEST 10',
];

const Magazine = () => {
  const [nowPage, setNowPage] = useState(1);
  const limit = 6;
  const offset = num => (num - 1) * limit;
  const pages = [...Array(text.length / limit).keys()];

  return (
    <MagazineSection>
      <Button onClick={() => setNowPage(nowPage - 1)} disabled={nowPage === 1}>
        ＜
      </Button>
      <BoxSection>
        {text
          .slice(offset(nowPage), offset(nowPage) + limit)
          .map((t, index) => (
            <MagazineBox key={index} text={t} />
          ))}
      </BoxSection>

      <RadioSection>
        {pages.map(idx => (
          <input
            key={idx + 1}
            type="radio"
            onClick={() => setNowPage(idx + 1)}
            style={{ color: idx + 1 === nowPage && '#9e9e9e' }}
          />
        ))}
      </RadioSection>

      <Button
        onClick={() => setNowPage(nowPage + 1)}
        disabled={nowPage === pages.length}
      >
        ＞
      </Button>
    </MagazineSection>
  );
};

const MagazineSection = styled.div`
  margin-top: 400px;
  height: 550px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const BoxSection = styled.div`
  height: 500px;
  width: 90%;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
`;

const Button = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  font-size: 3rem;
  color: #bebebe;
  &:first-child {
    left: 1rem;
  }
  &:last-child {
    right: 1rem;
  }
  cursor: ${props => props.disabled || 'pointer'};
`;

const RadioSection = styled.div`
  display: flex;
  flex-direction: row;
  & > input {
    background: #e0e0e0;
    width: 15px;
    height: 15px;
    border-radius: 50%;
  }
`;

export default Magazine;
