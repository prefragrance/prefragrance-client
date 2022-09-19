import React, { useState } from 'react';
import styled from 'styled-components';
import SearchCategory from './SearchCategory';
import COLOR from '../../../../../../constants/color';
import { searchTabState } from '../../../../../../recoil/search/atom';
import { useRecoilState } from 'recoil';

const KEYWORDS = ['추천 검색어', '인기 검색어', '최근 검색어'];

const SearchCategoryTab = () => {
  const [searchTab, setSearchTab] = useState(KEYWORDS[0]);

  return (
    <Wrapper>
      {KEYWORDS.map(keyword => (
        <SearchCategory
          key={keyword}
          text={keyword}
          isChecked={searchTab === keyword}
          setSearchTab={setSearchTab}
        />
      ))}
    </Wrapper>
  );
};
const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid ${COLOR['GRAY-100']};
`;
export default SearchCategoryTab;
