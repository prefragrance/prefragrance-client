import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  width: 50%;
  position: relative;
  input {
    font-size: 1rem;
    padding: 1rem;
    padding-left: 5rem;
    border-radius: 2rem;
    width: 100%;
  }
  button {
    font-size: 1.25rem;
    width: 7rem;
    height: 3.1rem;
    border-radius: 2rem;
    position: absolute;
    right: 0;
  }
`;

export const Select = styled.select`
  display: flex;
  position: absolute;
  width: 6rem;
  background: none;
  border: none;
  left: 0.2rem;
  top: 0;
  padding: 1.2rem;
`;
