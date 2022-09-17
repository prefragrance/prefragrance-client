import React from 'react';
import styled from 'styled-components';
import COLOR from '../../../../../constants/color';
import SearchCategoryTab from './SearchCategoryTab';
import KeywordList from './KeywordList';

const SearchModal = ({ isOpen }) => {
  return (
    <ModalSection>
      <SearchCategoryTab />
      <KeywordList isOpen={isOpen} />
    </ModalSection>
  );
};

const ModalSection = styled.div`
  // 모달창 크기
  // width - 검색바 크기(변수)랑 동기화시켜줘야 함
  width: 600px;
  min-height: 100px;

  position: absolute;
  top: 52px;
  z-index: 999;

  background-color: ${COLOR.WHITE};
  border: 1px solid ${COLOR['GREEN-100']};
  border-radius: 0.4rem;
  box-sizing: border-box;
  padding: 0.4rem;
`;

export default SearchModal;
