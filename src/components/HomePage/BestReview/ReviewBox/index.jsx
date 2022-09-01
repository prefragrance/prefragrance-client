import React from 'react';
import {
  Img,
  ReviewSection,
  Content,
  InfoSection,
  ReviewInfo,
  Title,
} from './styled';

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

export default ReviewBox;
