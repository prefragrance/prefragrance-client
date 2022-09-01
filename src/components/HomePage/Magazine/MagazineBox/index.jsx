import React from 'react';
import { MagazineBoxSection } from './styled';

const MagazineBox = ({ text }) => {
  return (
    <MagazineBoxSection>
      <span>{text}</span>
    </MagazineBoxSection>
  );
};

export default MagazineBox;
