import React from 'react';
import Categories from '../../components/Search/Category';
import Search from '../../components/Search/Search';
import SearchResultList from '../../components/Search/SearchResultList';

const index = () => {
  return (
    <>
      <Search />
      <Categories />
      <SearchResultList />
    </>
  );
};

export default index;
