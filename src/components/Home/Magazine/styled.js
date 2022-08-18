import styled from 'styled-components';

export const MagazineSection = styled.div`
  height: 550px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const BoxSection = styled.div`
  height: 500px;
  width: 90%;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
`;

export const Button = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  font-size: 3rem;
  color: #bebebe;
  &:first-child {
    left: 1rem;
  }
  &:last-child {
    right: 1rem;
  }
`;

export const RadioSection = styled.div`
  display: flex;
  flex-direction: row;
  & > input {
    background: #e0e0e0;
    width: 15px;
    height: 15px;
    border-radius: 50%;
  }
  & > input:checked {
    background: #9e9e9e;
  }
`;
