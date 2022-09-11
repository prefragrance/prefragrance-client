import React from 'react';
import styled from 'styled-components';
import COLOR from '../../../../../../constants/color';

const SearchCategory = ({ text }) => {
  return <Wrapper>{text}</Wrapper>;
};

const Wrapper = styled.li`
  justify-content: center;  
  cursor: pointer;
  text-align: center;
  background-color: ${COLOR['GRAY-100']}
  color: ${COLOR['GRAY-200']}
  &:focus {
    color: ${COLOR['GREEN-400']}
    background-color: ${COLOR.WHITE}
  }
`;

export default SearchCategory;
