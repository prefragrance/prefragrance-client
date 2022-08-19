import React from 'react';
import styled, { css } from 'styled-components';
import './styled.js';
import { CategoryButton } from './styled.js';
const CategoriesBlock = styled.div`
  display: flex;
  padding: 2.5rem;
  padding-bottom: 2rem;
  width: 1200px;
  margin: 0 auto;s
  background: #ffffff;

  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled.div`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: #1b5434;
  padding-bottom: 0.25rem;
  padding-left: 23px;

  &:hover {
    color: #858585;
  }
  & + & {
    margin-left: 1rem;
  }
  ${props =>
    props.active &&
    css`
      font-weight: 600;
      border-bottom: 2px solid #22b8cf;
      color: #22b8cf;
      &:hover {
        color: #3bc9db;
      }
    `}

  & + & {
    margin-left: 6rem;
  }
`;
const categoryButtonTheme = {
  blue: {
    default: '#3f51b5',
    hover: '#283593',
  },
  pink: {
    default: '#e91e63',
    hover: '#ad1457',
  },
};

// const CategoryButton = styled.button`
//   background-color: ${props =>
//     categoryButtonTheme[props.categoryButtonTheme].default};
//   color: white;
//   padding: 5px 15px;
//   border-radius: 5px;
//   outline: 0;
//   text-transform: uppercase;
//   margin: 10px 0px;
//   cursor: pointer;
//   box-shadow: 0px 2px 2px lightgray;
//   transition: ease background-color 250ms;
//   &:hover {
//     background-color: ${props =>
//       categoryButtonTheme[props.categoryButtonTheme].hover};
//   }
//   &:disabled {
//     cursor: default;
//     opacity: 0.7;
//   }
// `;
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
      <CategoryButton>
        <button>hsnkdlalhdslhjasjdjsajki</button>
      </CategoryButton>
    </>
  );
};

export default Categories;
