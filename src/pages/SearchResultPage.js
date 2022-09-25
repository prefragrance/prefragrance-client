import React from 'react';
import {
  Categories,
  SearchModal,
  SearchResultList,
} from '../components/Search';

const SearchResultPage = () => {
  return (
    <>
      <SearchModal />
      <Categories />
      <SearchResultList />
    </>
  );
};

export default SearchResultPage;
