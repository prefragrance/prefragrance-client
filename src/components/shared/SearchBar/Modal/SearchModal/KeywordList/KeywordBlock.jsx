import React from 'react';
import styled from 'styled-components';
import COLOR from '../../../../../../constants/color';
import { IoSearchCircle } from 'react-icons/io5';
import { HiOutlineX } from 'react-icons/hi';
import { deleteRecentSearchEach } from '../../../../../../hook/useLocal';
import { useRecoilValue } from 'recoil';
import {
  searchTabState,
  searchTabList,
} from '../../../../../../recoil/search/atom';

const KeywordBlock = ({ text }) => {
  const searchTab = useRecoilValue(searchTabState);
  const onDeleteRecentKeyword = () => {
    deleteRecentSearchEach(text);
  };

  return (
    <Wrapper>
      <QuerySection>
        <IoSearchCircle color={COLOR['GRAY-200']} fontSize="1.5rem" />
        <span>{text}</span>
      </QuerySection>
      <DeleteBtnSection disabled={searchTab !== searchTabList[2]}>
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
  & > span {
    display: flex;
    // align-items: center;
    line-height: 1.7rem;
  }
`;
const DeleteBtnSection = styled.div`
  height: 100%;
  cursor: pointer;
  display: ${props => (props.disabled ? 'none' : 'flex')};
  align-items: center;
`;

export default KeywordBlock;
