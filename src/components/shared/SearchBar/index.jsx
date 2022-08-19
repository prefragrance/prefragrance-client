import React from 'react';
import { SearchForm } from '../../Home/Banner/styled';

const SearchBar = () => {
  return (
    <SearchForm>
      <input placeholder="향 제품, 브랜드, 키워드를 검색해보세요!" />
      <button>검색</button>
    </SearchForm>
  );
};

export default SearchBar;
