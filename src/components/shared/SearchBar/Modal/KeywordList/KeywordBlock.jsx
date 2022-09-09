import React from 'react';
import styled from 'styled-components';
import COLOR from '../../../../../constants/color';
import { IoSearchCircle } from 'react-icons/io5';

const KeywordBlock = ({ text }) => {
  return (
    <Wrapper>
      <IoSearchCircle color={COLOR['GRAY-200']} fontSize="1.5rem" />
      {text}
    </Wrapper>
  );
};

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 13px 15px;
  // border-bottom: 1px solid ${COLOR['GRAY-100']}; 없는게 더 나은 것 같기도?
  &:hover {
    background-color: ${COLOR['GRAY-100']};
  }
`;

export default KeywordBlock;
