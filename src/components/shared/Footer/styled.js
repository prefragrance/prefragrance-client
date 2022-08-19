import styled from 'styled-components';
import COLOR from '../../../constants/color';
import LogoSrc from '../../../assets/images/취향로고.png';

export const FooterSection = styled.div`
  position: relative;
  // transform: translateY(-100%);
  height: 150px;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  background: ${COLOR['GREEN-400']};
`;

export const LogoDiv = styled.img.attrs({ src: `${LogoSrc}` })`
  display: flex;
  height: 50px;
`;
export const LinkUl = styled.div`
  display: flex;
`;
export const Li = styled.div`
  position: relative;
  color: ${COLOR.WHITE};
  padding: 0 15px;
`;
export const SNSDiv = styled.div`
  display: flex;
`;
export const Blog = styled.div`
  display: flex;
`;
export const Insta = styled.div`
  display: flex;
`;
export const Facebook = styled.div`
  display: flex;
`;
export const Tweeter = styled.div`
  display: flex;
`;
