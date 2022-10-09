import React from 'react';
import styled from 'styled-components';
import COLOR from 'constants/color';

import LogoSrc from 'assets/images/취향로고.png';
import SearchBar from 'components/shared/SearchBar';

const Banner = () => {
  return (
    <BannerSection>
      <Logo />
      <SearchBar />
    </BannerSection>
  );
};

const BannerSection = styled.div`
  background: ${COLOR.green[400]};
  width: 100%;
  min-width: 1200px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-shrink: 0;
  gap: 1rem;
  position: absolute;
  top: 0;
  left: 0;
`;

const Logo = styled.img.attrs({ src: `${LogoSrc}` })`
  width: 20rem;
`;

export default Banner;
