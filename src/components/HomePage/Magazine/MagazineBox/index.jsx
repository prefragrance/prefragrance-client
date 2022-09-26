import React from 'react';
import styled from 'styled-components';
import COLOR from 'constants/color';

const MagazineBox = ({ text }) => {
  return (
    <MagazineBoxSection>
      <span>{text}</span>
    </MagazineBoxSection>
  );
};

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
`;

export default MagazineBox;
