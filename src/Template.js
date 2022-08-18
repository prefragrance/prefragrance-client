import styled from 'styled-components';
import COLOR from './constants/color';

export const Container = styled.main`
  width: 100%;
  background: ${COLOR.GRAY};
  margin: 0 auto;
`;

const Template = ({ children }) => <Container>{children}</Container>;

export default Template;
