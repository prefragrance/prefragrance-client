import React from 'react';
import { BannerSection, Logo, SearchForm } from './styled';

const Banner = () => {
  return (
    <BannerSection>
      <Logo />
      <SearchForm>
        <input
          placeholder="향 제품, 브랜드, 키워드를 검색해보세요!"
          style={{ fontFamily: 'KoPubWorld_light' }}
        />
        <button style={{ fontFamily: 'KoPubWorld_light' }}>검색</button>
      </SearchForm>
    </BannerSection>
  );
};

export default Banner;
