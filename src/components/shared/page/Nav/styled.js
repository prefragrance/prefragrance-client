import styled from 'styled-components';
import COLOR from '../../../constants/color';
import LogoSrc from '../../../assets/images/취향로고.png';

export const NavSection = styled.div`
  height: 75px;
  width: 100%;
  display: flex;
  position: fixed;
  top: 0;
  z-index: 100;
  background-color: ${COLOR['GREEN-400']};
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
`;

export const LogoDiv = styled.img.attrs({ src: `${LogoSrc}` })`
  display: flex;
  height: 50px;
`;
