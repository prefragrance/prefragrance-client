import styled from 'styled-components';
import COLOR from '../../../constants/color';

export const TabItem = styled.button`
  padding: 10px 210px;
  background: ${COLOR['GRAY-100']};
  border: none;
  outline: 0;

  ${({ active }) =>
    active &&
    `
    border-top: 1px solid ${COLOR['GRAY-200']};
    border-left: 1px solid ${COLOR['GRAY-200']};
    border-right: 1px solid ${COLOR['GRAY-200']};
    background: ${COLOR.WHITE};
  `}
`;
export const TabContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-itmes: center;
  border-bottom: 1px solid ${COLOR['GRAY-200']};
  margin-bottom: 30px;
`;
