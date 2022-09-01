import React from 'react';
import { MagazineSection, Button, RadioSection, BoxSection } from './styled';
import MagazineBox from './MagazineBox';

// text가 12개씩 들어온다 가정
const text = [
  '여름밤의 촉촉한 향 BEST 10',
  '달콤한 플로럴 향 BEST 20',
  '남자 우디 향수 BEST 10',
  '포근한 파우더 향 BEST 30',
  '상쾌한 시트러스 향 BEST 20 ',
  '호불호 없는 여자 향수 BEST 10',
  '여름밤의 촉촉한 향 BEST 10',
  '달콤한 플로럴 향 BEST 20',
  '남자 우디 향수 BEST 10',
  '포근한 파우더 향 BEST 30',
  '상쾌한 시트러스 향 BEST 20 ',
  '호불호 없는 여자 향수 BEST 10',
];

const Magazine = () => {
  const offset = 6;
  const pages = [...Array(text.length / offset).keys()];
  return (
    <MagazineSection>
      <Button>＜</Button>
      <BoxSection>
        {text.slice(0, offset).map((t, index) => (
          <MagazineBox key={index} text={t} />
        ))}
      </BoxSection>

      <RadioSection>
        {pages.map(page => (
          <input id={page} key={page} type="radio"></input>
        ))}
      </RadioSection>

      <Button>＞</Button>
    </MagazineSection>
  );
};

export default Magazine;
