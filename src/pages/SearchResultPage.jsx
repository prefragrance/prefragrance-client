import React, { useState } from 'react';
import {
  Categories,
  SelectTab,
  SearchResultList,
} from '../components/SearchResultPage';

const searchResultData = [
  {
    id: 0,
    product: '랑방 에끌라 드 아르페쥬E',
    star: '4.6',
    producer: 'LANVIN',
    keyword: ['시원', '플로', '상큼'],
    watch: '2345',
    comment: '23',
  },
  {
    id: 1,
    product: '랑방 에끌라 드 아르페쥬E',
    star: '4.6',
    producer: 'LANVIN',
    keyword: ['시원', '플로', '상큼'],
    watch: '2345',
    comment: '23',
  },
  {
    id: 2,
    product: '랑방 에끌라 드 아르페쥬E',
    star: '4.6',
    producer: 'LANVIN',
    keyword: ['시원', '플로', '상큼'],
    watch: '2345',
    comment: '23',
  },
];

const SearchResultPage = () => {
  const [currentCate, setCurrentCate] = useState('향수');

  return (
    <>
      <Categories currentCate={currentCate} setCurrentCate={setCurrentCate} />
      <SelectTab searchResultCount={100} />
      <SearchResultList searchResultData={searchResultData} />
    </>
  );
};

export default SearchResultPage;
