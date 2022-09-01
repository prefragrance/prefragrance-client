import styled from 'styled-components';
import COLOR from '../../../../constants/color';

export const MagazineBoxSection = styled.div`
  width: 300px;
  height: 170px;
  background-color: ${COLOR['GREEN-100']};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  & > span {
    color: ${COLOR.WHITE};
  }
`;
