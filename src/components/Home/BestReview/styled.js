import styled from 'styled-components';

export const BestReviewSection = styled.div`
  height: 1000px;
  margin: 0 5.6rem;
  display: grid;
  grid-template-rows: 50px auto;
  gap: 1rem;
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

export const Body = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  background-color: #ededed;
  gap: 1rem;
`;

export const ColumnSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const RowSection = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
`;
