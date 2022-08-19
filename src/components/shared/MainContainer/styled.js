import styled from 'styled-components';
import COLOR from '../../../constants/color';

export const Container = styled.div`
  width: 1200px;
  height: auto;
  min-height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0 auto;
  background-color: ${COLOR.WHITE};
  gap: 2rem;
  overflow-y: auto;
  margin-bottom: 5rem;
`;
