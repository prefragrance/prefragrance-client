import styled from 'styled-components';
import COLOR from '../../../constants/color';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-itmes: center;
`;
export const DetailWrapper = styled.div`
  width: 1000px;
  margin: 20px 0;
  padding: 0px 30px;
  margin: 0 auto;
  margin-bottom: 50px;
  display: flex;
`;
export const DetailBox = styled.div`
  flex: 0.5;
`;
export const DetailTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  padding: 10px 0;
  margin-bottom: 5px;
`;
export const IconListBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 10px 0;
`;
export const DetailDesc = styled.div`
  width: 100%;
  text-align: center;
  font-weight: bold;
  margin-top: 20px;
`;
