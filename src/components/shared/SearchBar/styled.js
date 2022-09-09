import styled from 'styled-components';
import { COLOR } from '../../../constants';

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  width: 50%;
  position: relative;
  input {
    font-size: 1rem;
    padding: 1rem;
    padding-left: 7.5rem;
    padding-right: 9rem;
    border-radius: 2rem;
    width: 100%;
  }
  button {
    font-size: 1.25rem;
    width: 7rem;
    height: 3.2rem;
    border-radius: 2rem;
    position: absolute;
    right: 0;
  }
`;

export const Select = styled.select`
  display: flex;
  position: absolute;
  width: 6.5rem;
  height: 3.2rem;
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;
  left: 0rem;
  top: 0;
  padding: 0.8rem;
  padding-left: 1.6rem;
  background: ${COLOR['GREEN-200']};
  font-size: 1.1rem;
  color: BLACK;
`;
