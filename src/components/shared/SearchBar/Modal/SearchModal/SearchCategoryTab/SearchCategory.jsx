import React from 'react';
import styled from 'styled-components';
import COLOR from '../../../../../../constants/color';

const SearchCategory = ({ text, setSearchTab, isChecked }) => {
  return (
    <>
      {isChecked ? (
        <Chosen onClick={() => setSearchTab(text)}>{text}</Chosen>
      ) : (
        <Unchosen onClick={() => setSearchTab(text)}>{text}</Unchosen>
      )}
    </>
  );
};

const Unchosen = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 100%;
  color: ${COLOR['GRAY-200']};
  background-color: ${COLOR['GRAY-100']};
`;

const Chosen = styled(Unchosen)`
  color: ${COLOR.BLACK};
  background-color: ${COLOR.WHITE};
  font-weight: 600;
  z-index: 99;
  box-shadow: 0rem -0.01rem 0.15rem 0rem ${COLOR['GRAY-200']};
  border-radius: 0.5rem;
`;

export default SearchCategory;
