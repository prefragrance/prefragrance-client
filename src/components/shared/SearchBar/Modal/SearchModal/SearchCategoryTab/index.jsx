import React from 'react';
import styled from 'styled-components';
import SearchCategory from './SearchCategory';
import COLOR from '../../../../../../constants/color';
import {
  searchTabState,
  searchTabList,
} from '../../../../../../recoil/search/atom';
import { useRecoilState } from 'recoil';

const SearchCategoryTab = () => {
  const [searchTab, setSearchTab] = useRecoilState(searchTabState);

  return (
    <Wrapper>
      {Object.values(searchTabList).map(keyword => (
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
