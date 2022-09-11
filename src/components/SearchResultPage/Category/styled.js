import styled, { css } from 'styled-components';

export const CategoryButton = styled.form`
button {s
  font-size: 1.75rem;
  font-weight: bold;
  font-color: #ffffff;
  width: relative;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 3rem;
  border-radius: 0.3rem;
  position: relative;
  right: 0;
}
`;

export const CategoriesBlock = styled.div`
  display: flex;
  padding: 2.5rem;
  padding-top: 4rem;
  padding-bottom: 2rem;
  width: 1200px;
  margin: 0 auto;
  background-color: #f0f0f0;

  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;
export const Category = styled.div`
  font-size: 1.2rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: #1b5434;
  padding-bottom: 0.25rem;
  padding-left: 30px;

  &:hover {
    color: #858585;
  }
  & + & {
    margin-left: 1em;
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
    margin-left: 5.5rem;
  }
`;
export const categoryButtonTheme = {
  blue: {
    default: '#3f51b5',
    hover: '#283593',
  },
  pink: {
    default: '#e91e63',
    hover: '#ad1457',
  },
};
