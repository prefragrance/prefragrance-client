import styled from 'styled-components';
import COLOR from '../../../constants/color';

export const Container = styled.div`
  width: 100%;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-itmes: center;
  margin-top: 90px;
  margin-bottom: 30px;
`;
// export const Thumbnail = styled.img`
//   src: ${props => props.url};
//   width: 400px;
//   height: 500px;
// `;
export const Thumbnail = styled.div`
  width: 400px;
  height: 500px;
  background: ${COLOR['GRAY-100']};
  margin-right: 30px;
`;
export const ContentWrapper = styled.div`
  width: 500px;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  // background: tomato;
`;
export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
`;
export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  padding-top: 5px;
  margin-right: 10px;
  display: flex;
  align-items: center;
`;
export const Star = styled.div`
  font-size: 1.6rem;
  padding: 10px 0;
  display: flex;
  path {
    fill: ${COLOR['GREEN-300']};
  }
`;
export const Category = styled.div`
  color: ${COLOR['GRAY-200']};
  padding: 10px 0;
`;
export const DetailTitle = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  padding: 10px 0;
`;
export const ReviewBtn = styled.button`
  width: 100%;
  padding: 8px 30px;
  border-radius: 3px;
  background: ${COLOR['GREEN-400']};
  color: ${COLOR.WHITE};
  text-align: center;
  font-weight: bold;
  font-size: 1.1rem;
`;
