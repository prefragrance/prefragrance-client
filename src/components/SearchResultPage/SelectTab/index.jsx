import React from 'react';
import styled from 'styled-components';
import COLOR from 'constants/color';
import Select from 'components/shared/Select';

const orderList = [
  { label: '조회순', value: '' },
  { label: '별점순', value: '' },
  { label: '리뷰 많은 순', value: '' },
];

const SelectTab = ({ searchResultCount }) => {
  return (
    <Container>
      <span>검색결과: 총 {searchResultCount}개</span>
      <Select optionList={orderList} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;
  padding-bottom: 20px;
  span {
    font-weight: 600;
  }
`;

export default SelectTab;
