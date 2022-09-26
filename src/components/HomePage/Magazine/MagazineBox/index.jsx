import React from 'react';
import styled, { keyframes } from 'styled-components';
import COLOR from 'constants/color';

const MagazineBox = ({ text }) => {
  return (
    <MagazineBoxSection>
      <span>{text}</span>
    </MagazineBoxSection>
  );
};

const boxHover = keyframes`
  0% {font-size: 1rem;} 100% {font-size: 1.1rem;}
`;

const MagazineBoxSection = styled.div`
  width: 300px;
  height: 170px;
  background-color: ${COLOR.green[400]};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  & > span {
    color: ${COLOR.white};
  }
  &:hover {
    animation: ${boxHover} 0.05s forwards ease-in;
  }
`;

export default MagazineBox;
