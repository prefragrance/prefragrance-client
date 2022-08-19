import React from 'react';
import {
  Img,
  ReviewSection,
  Content,
  InfoSection,
  ReviewInfo,
  Title,
} from './styled';
console.log('hi');
const ReviewBox = ({ url, content, nickname, date, producer, name }) => {
  console.log(name);
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
