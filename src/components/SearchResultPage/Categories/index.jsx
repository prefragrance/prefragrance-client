import React from 'react';
import styled from 'styled-components';
import COLOR from 'constants/color';

const categories = [
  '향수',
  '바디스프레이',
  '향초',
  '인센스',
  '비누/바디워시/샴푸',
  '핸드크림/워시',
];

const Categories = ({ currentCate, setCurrentCate }) => {
  const handleCurrentCate = e => {
    setCurrentCate(e.target.textContent);
  };

  return (
    <Container>
      {categories.map(category => (
        <Item
          key={category}
          className={category === currentCate && `currentCate`}
          onClick={handleCurrentCate}
        >
          {category}
        </Item>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 20px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const Item = styled.div`
  width: 200px;
  padding: 15px 0px;
  border-radius: 5px;
  background-color: ${COLOR.gray[100]};
  text-align: center;
  cursor: pointer;

  &.currentCate {
    background-color: ${COLOR.green[400]};
    color: ${COLOR.white};
  }
`;

export default Categories;
