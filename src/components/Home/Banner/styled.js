import styled from 'styled-components';
import COLOR from '../../../constants/color';
import LogoSrc from '../../../assets/images/취향로고.png';

export const BannerSection = styled.div`
  background: ${COLOR['GREEN-100']};
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

export const Logo = styled.img.attrs({ src: `${LogoSrc}` })`
  width: 20rem;
`;

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  width: 50%;
  position: relative;
  input {
    font-size: 1rem;
    padding: 1rem;
    padding-left: 5rem;
    border-radius: 2rem;
    width: 100%;
  }
  button {
    font-size: 1.25rem;
    width: 7rem;
    height: 3.1rem;
    border-radius: 2rem;
    position: absolute;
    right: 0;
  }
`;
