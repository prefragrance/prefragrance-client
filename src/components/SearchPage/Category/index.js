import React from 'react';
import { CategoriesBlock, Category } from './styled';

const categories = [
  {
    id: 0,
    name: '향수',
  },
  {
    id: 1,
    name: '바디 스프레이',
  },
  {
    id: 2,
    name: '향초',
  },
  {
    id: 3,
    name: '인센스',
  },
  {
    id: 4,
    name: '비누/바디워시/샴푸',
  },
  {
    id: 5,
    name: '핸드크림/워시',
  },
];

const Categories = ({ category, onSelect }) => {
  return (
    <>
      <CategoriesBlock>
        {categories.map(c => (
          <Category
            key={c.name}
            active={category === c.name}
            onClick={() => onSelect(c.name)}
          >
            {c.name}
          </Category>
        ))}
      </CategoriesBlock>
      {/* <CategoryButton>
        <button>hsnkdlalhdslhjasjdjsajki</button>
      </CategoryButton> */}
    </>
  );
};

export default Categories;
