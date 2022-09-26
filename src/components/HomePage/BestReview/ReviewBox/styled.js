import styled from 'styled-components';
import COLOR from 'constants/color';
import DefaultImg from '../../../../assets/images/취향로고.png';

export const ReviewSection = styled.div`
  display: grid;
  grid-template-rows: 3fr 2fr;
  justify-content: center;
  align-items: center;
  height: 80%;
  width: 80%;
  background: ${COLOR.white};
`;

export const Img = styled.img`
  border: 1px solid ${COLOR.black};
`;

export const InfoSection = styled.div`
  display: grid;
  grid-template-rows: 2fr 1fr 1.5fr;
`;

export const Content = styled.div`
  word-wrap: break-word;
  text-overflow: ellipsis;
`;

export const ReviewInfo = styled.div`
  font-size: 0.5rem;
  color: #ebebeb;
  & > span::after {
    content: '|';
  }
  & > span:first-child::after {
    content: '';
  }
`;

export const Title = styled.div``;

Img.defaultProps = {
  src: DefaultImg,
};
