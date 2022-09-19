import React from 'react';
import styled from 'styled-components';
import COLOR from '../../../../../../constants/color';
import { IoSearchCircle } from 'react-icons/io5';
import { HiOutlineX } from 'react-icons/hi';
import { deleteRecentSearchEach } from '../../../../../../hook/useLocal';

const KeywordBlock = ({ text }) => {
  const onDeleteRecentKeyword = () => {
    deleteRecentSearchEach(text);
  };

  return (
    <Wrapper>
      <QuerySection>
        <IoSearchCircle color={COLOR['GRAY-200']} fontSize="1.5rem" />
        {text}
      </QuerySection>
      <DeleteBtnSection>
        <HiOutlineX
          color={COLOR['GRAY-200']}
          fontSize="0.9rem"
          opacity="0.5"
          onClick={onDeleteRecentKeyword}
        />
      </DeleteBtnSection>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  padding: 13px 15px;
  // border-bottom: 1px solid ${COLOR['GRAY-100']}; 없는게 더 나은 것 같기도?
  &:hover {
    background-color: ${COLOR['GRAY-100']};
  }
`;

const QuerySection = styled.div`
  gap: 0.5rem;
  display: flex;
  align-items: center;
`;
const DeleteBtnSection = styled.div`
  cursor: pointer;
`;

export default KeywordBlock;
