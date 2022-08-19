import styled from 'styled-components';
import COLOR from '../../../constants/color';

export const Container = styled.div`
  width: 1200px;
  height: 80px;
  position: fixed;
  top: 0px;
  background-color: ${props =>
    props.visiblity ? 'rgba(27,84,52,0.7)' : `${COLOR['GREEN-400']}`};
  backdrop-filter: ${props => props.visiblity && 'blur(30px)'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 48px;
  z-index: 9999;
  transition: backdrop-filter 0.2s linear 0s, background-color 0.3s linear 0s;
`;
export const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
`;
export const Title = styled.h2`
  font-family: 'KoPubWorld_light', sans-serif;
  white-space: nowrap;
  color: ${props => props.color};
`;
