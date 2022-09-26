import React from 'react';
import styled from 'styled-components';
import COLOR from 'constants/color';
import DefaultImg from 'assets/images/취향로고.png';

const ReviewBox = ({ url, content, nickname, date, producer, name }) => {
  return (
    <ReviewSection>
      <Img src={url} />
      <InfoSection>
        <Content>{content}</Content>
        <ReviewInfo>
          <span>{nickname}</span>
          <span>{date}</span>
        </ReviewInfo>
        <hr />
        <Title>
          {producer} {name}
        </Title>
      </InfoSection>
    </ReviewSection>
  );
};

const ReviewSection = styled.div`
  display: grid;
  grid-template-rows: 3fr 2fr;
  justify-content: center;
  align-items: center;
  height: 80%;
  width: 80%;
  background: ${COLOR.white};
  margin: auto;
`;

const Img = styled.img`
  border: 1px solid ${COLOR.black};
  width: 5rem;
`;

const InfoSection = styled.div`
  display: grid;
  grid-template-rows: 2fr 1fr 1.5fr;
`;

const Content = styled.div`
  word-wrap: break-word;
  text-overflow: ellipsis;
`;

const ReviewInfo = styled.div`
  font-size: 0.5rem;
  color: #ebebeb;
  & > span::after {
    content: '|';
  }
  & > span:first-child::after {
    content: '';
  }
`;

const Title = styled.div``;

Img.defaultProps = {
  src: DefaultImg,
};

export default ReviewBox;
