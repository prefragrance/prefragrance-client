import React from 'react';
import styled from 'styled-components';
import COLOR from '../../../../constants/color';
import SearchCategoryTab from './SearchCategoryTab';
import KeywordList from './KeywordList';

const Modal = () => {
  return (
    <ModalSection>
      <SearchCategoryTab />
      <KeywordList />
    </ModalSection>
  );
};

const ModalSection = styled.div`
  position: absolute;
  top: 52px;
  width: 600px; // 나중에 SearchBar width랑 동기화시켜야 함
  min-height: 100px;
  background-color: ${COLOR.WHITE};
  z-index: 99;
  box-sizing: border-box;
  border: 1px solid ${COLOR['GREEN-100']};
  padding: 0.4rem;
  border-radius: 0.4rem;
`;

export default Modal;
