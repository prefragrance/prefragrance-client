import React, { useState } from 'react';
import styled from 'styled-components';
import COLOR from '../../../constants/color';

const Tab = () => {
  const categories = ['제품상세', '리뷰'];
  const [active, setActive] = useState(categories[0]);
  return (
    <TabContainer>
      {categories.map(category => (
        <TabItem
          key={category}
          active={active === category}
          onClick={() => setActive(category)}
        >
          {category}
        </TabItem>
      ))}
    </TabContainer>
  );
};

const TabItem = styled.button`
  padding: 10px 210px;
  background: ${COLOR['GRAY-100']};
  border: none;
  outline: 0;

  ${({ active }) =>
    active &&
    `
    border-top: 1px solid ${COLOR['GRAY-200']};
    border-left: 1px solid ${COLOR['GRAY-200']};
    border-right: 1px solid ${COLOR['GRAY-200']};
    background: ${COLOR.WHITE};
  `}
`;
const TabContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${COLOR['GRAY-200']};
  margin-bottom: 30px;
`;

export default Tab;
