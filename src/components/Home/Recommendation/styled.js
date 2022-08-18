import styled from 'styled-components';

export const RecommendationSection = styled.div`
  height: 450px;
  margin: 0 5.6rem;
  display: grid;
  grid-template-rows: 1fr 6fr;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 1.75rem;
  font-weight: 700;
`;

export const FilterUl = styled.ul`
  display: flex;
  & > li::after {
    font-size: 1rem;
    content: '|';
    padding: 0 0.4rem;
  }
  & > li:last-child::after {
    content: '';
  }
`;

export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;
