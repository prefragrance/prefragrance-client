import React from 'react';
import styled from 'styled-components';
import COLOR from '../../../../../constants/color';
import SearchCategoryTab from './SearchCategoryTab';
import KeywordList from './KeywordList';
import { useRecoilValue } from 'recoil';
import {
  searchTabState,
  searchTabList,
  searchKeywordListState,
} from '../../../../../recoil/search/atom';
import { deleteRecentSearchAll } from '../../../../../hook/useLocal';

const SearchModal = ({ isOpen }) => {
  const searchTab = useRecoilValue(searchTabState);
  const searchKeywordList = useRecoilValue(searchKeywordListState);
  const validation = () => {
    return searchTab == searchTabList[2] && searchKeywordList.length;
  };
  return (
    <ModalSection>
      <SearchCategoryTab />
      <KeywordList isOpen={isOpen} />
      <BtnSection>
        <div></div> {/* 공간 채우기용 빈껍데기 */}
        {validation() ? (
          <DeleteAllBtn onClick={deleteRecentSearchAll}>전체 삭제</DeleteAllBtn>
        ) : (
          <div></div> // 공간 채우기용 빈껍데기
        )}
      </BtnSection>
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
  color: ${COLOR['GRAY-200']};
`;

export default SearchModal;
