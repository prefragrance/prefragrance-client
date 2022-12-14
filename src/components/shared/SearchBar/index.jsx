import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import COLOR from 'constants/color';

import SearchModal from './SearchModal';
import { apiCall } from 'hook/useApiCall';
import { updateRecentSearch } from 'hook/useLocal';
import { isTF } from 'hook/useCommon';
import { useClickOutside } from 'hook/useClickOutside';
import SearchCategoryDropdown from './SearchCategoryDropdown';

const SearchBarInput = () => {
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  // 최근 검색어 rendering trigger용, 검색할 때마다 recentUpdate + 1
  const [recentUpdate, setRecentUpdate] = useState(0);
  const categoryRef = useRef();
  const searchInputRef = useRef();
  const formRef = useRef();
  const navigate = useNavigate();

  const toggleSearchModal = () => {
    setSearchModalOpen(prev => !prev);
  };

  useClickOutside({
    isModalOpen: searchModalOpen,
    toggleModalState: toggleSearchModal,
    formRef,
  });

  const handleSubmit = e => {
    e.preventDefault();
    const searchCategory = categoryRef.current.value;
    const searchInput = searchInputRef.current.value;
    let category;
    // search input validation
    if (searchInput.trim().length === 0) {
      alert('검색어를 입력해주세요.');
      // TODO SY : need routing validation check
    }
    // 최근검색어 저장
    if (searchInput.trim().length > 0) {
      updateRecentSearch(searchInput);
      setRecentUpdate(recentUpdate + 1);
    }

    switch (searchCategory) {
      case '통합검색':
        category = 'whole';
        break;
      case '제품명':
        category = 'name';
        break;
      case '브랜드':
        category = 'producer';
        break;
      default:
        category = 'keyword';
        break;
    }

    // 검색 api call
    const searchResult = apiCall({
      service: 'search-input',
      method: 'get',
      data: { category: category, searchInput: searchInput },
    });
    searchResult.then(res => {
      console.log(res);
      // if (res.status === 200) {
      //   console.log(res);
      //   // TODO SY : 임시 router path
      //   navigate(`${PATH.route.search_result}`);
      //   // TODO SY : 나중에 status별로 error handling
      // } else {
      //   console.log('No data');
      // }
    });
    // set search input ""
    searchInputRef.current.value = '';
  };

  const onEnter = e => {
    // 최근검색어 api call
    if (e.key === 'Enter') {
      if (e.target.value.trim().length > 0) {
        updateRecentSearch(e.target.value);
        setRecentUpdate(recentUpdate + 1);
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit} ref={formRef}>
      <SearchCategoryDropdown categoryRef={categoryRef} />
      <input
        type="text"
        ref={searchInputRef}
        placeholder="향, 제품, 브랜드, 키워드를 검색해보세요!"
        onKeyPress={onEnter}
        onFocus={() => {
          // input창 focus시 모달 오픈만 가능(끄기 불가)
          setSearchModalOpen(true);
        }}
      />

      {/* 카테고리 모달창 토글버튼에서 재활용할 것을 생각해서 지우지 않고 주석처리하겠음
      <ModalDnDBtnWrapper onClick={toggleSearchModal}>
        {searchModalOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
      </ModalDnDBtnWrapper> */}

      <button type="submit">검색</button>

      {searchModalOpen && (
        <SearchModal
          recentUpdate={recentUpdate}
          setRecentUpdate={setRecentUpdate}
        />
      )}
    </Form>
  );
};

const Form = styled.form`
  width: 600px;
  height: 50px;
  display: flex;
  align-items: center;
  border: none;
  position: relative;
  input {
    flex: 1;
    height: 100%;
    padding-left: 1rem;
    font-size: 1.1rem;
    color: ${COLOR.black};
  }
  button {
    width: 100px;
    height: 50px;
    font-size: 1.1rem;
    border-radius: 0 0.8rem 0.8rem 0;
  }
`;

const SelectBox = styled.select`
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  color: ${COLOR.black};
  background-color: ${COLOR.gray[100]};
  border: none;
  border-radius: 0.8rem 0 0 0.8rem;
  margin: 0;
  padding: 0;
  padding-left: 1.5rem;
`;

const ModalDnDBtnWrapper = styled.div`
  & {
    position: absolute;
    top: 1rem;
    right: 7rem;

    font-size: 1.2rem;
  }
`;

export default SearchBarInput;
