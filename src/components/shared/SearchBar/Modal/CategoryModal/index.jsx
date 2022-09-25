import React from 'react';
import styled from 'styled-components';
import CategoryDropdown from './CategoryDropdown';
import { COLOR } from '../../../../../constants';
import './style.css';

const KEYWORDS = ['통합검색', '제품명', '브랜드', '키워드'];

const CategoryModal = props => {
  const [dropdownVisibility, setDropdownVisibility] = React.useState(false);

  return (
    <div id="app">
      <SelectBox onClick={e => setDropdownVisibility(!dropdownVisibility)}>
        {dropdownVisibility ? 'Close' : 'Open'}
      </SelectBox>
      <CategoryDropdown visibility={dropdownVisibility}>
        <ul>
          <li>통합검색</li>
          <li>제품명</li>
          <li>브랜드</li>
          <li>키워드</li>
        </ul>
      </CategoryDropdown>
    </div>
  );
};
const SelectBox = styled.select`
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  color: ${COLOR.BLACK};
  background-color: ${COLOR['GREEN-100']};
  border: none;
  border-radius: 0.8rem 0 0 0.8rem;
  margin: 0;
  padding: 0;
  padding-left: 1.5rem;
`;
export default CategoryModal;
