import React from 'react';
import styled from 'styled-components';
import COLOR from 'constants/color';

const SearchCategoryTab = ({ categories, currentTab, setCurrentTab }) => {
  // change current tab
  const handleTabClick = e => {
    setCurrentTab(e.target.textContent);
  };

  return (
    <Wrapper>
      {categories.map(category => (
        <Tab
          key={category}
          className={category === currentTab ? 'currentTab' : 'otherTab'}
          onClick={handleTabClick}
        >
          {category}
        </Tab>
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
  border-bottom: 1px solid ${COLOR.gray[100]};
`;

const Tab = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 1.2rem;
  font-weight: 700;

  &.currentTab {
    border-bottom: 1.5px solid ${COLOR.gray[200]};
    color: ${COLOR.green[400]};
  }
  &.otherTab {
    cursor: pointer;
    background-color: ${COLOR.gray[100]};
    border: none;
    color: ${COLOR.black};
  }
`;

export default SearchCategoryTab;
