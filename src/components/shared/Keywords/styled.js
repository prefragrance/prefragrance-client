import styled from 'styled-components';
import COLOR from 'constants/color';

export const KeywordList = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
export const KeywordItem = styled.div`
  width: 100px;
  padding: 5px 15px;
  border-radius: 5px;
  background: ${COLOR.green[300]};
  color: white;
  font-weight: bold;
  text-align: center;
`;
