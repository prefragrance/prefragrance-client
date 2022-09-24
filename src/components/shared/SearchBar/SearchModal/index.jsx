import React, { useState } from 'react';
import styled from 'styled-components';
import COLOR from 'constants/color';
import SearchCategoryTab from './SearchCategoryTab';
import KeywordList from './KeywordList';
import { deleteRecentSearchAll } from 'hook/useLocal';

const categories = ['추천 검색어', '인기 검색어', '최근 검색어'];

const SearchModal = ({ toggleSearchModalOpen, searchModalOpen }) => {
  const [currentTab, setCurrentTab] = useState('추천 검색어');

  return (
    <ModalSection
      tabIndex={0}
      onBlur={() => toggleSearchModalOpen(searchModalOpen)}
    >
      <SearchCategoryTab
        categories={categories}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <KeywordList currentTab={currentTab} />
      {currentTab === '최근 검색어' && (
        <BtnSection>
          <DeleteAllBtn onClick={deleteRecentSearchAll}>전체 삭제</DeleteAllBtn>
        </BtnSection>
      )}
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

  background-color: ${COLOR.white};
  border: 1px solid ${COLOR.green[100]};
  border-radius: 0.4rem;
  box-sizing: border-box;
  padding: 0.4rem;
`;

const BtnSection = styled.div`
  height: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem;
  padding-top: 0.4rem;
`;

const DeleteAllBtn = styled.div`
  cursor: pointer;
  display: flex;
  padding: 0.2rem;
  border-radius: 0.2rem;
  align-items: center;
  font-size: 0.7rem;
  color: ${COLOR.gray[200]};
`;

export default SearchModal;
