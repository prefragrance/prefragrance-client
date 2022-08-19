import React from 'react';
import {
  FooterSection,
  LogoDiv,
  LinkUl,
  Li,
  SNSDiv,
  Blog,
  Insta,
  Facebook,
  Tweeter,
} from './styled';

const Footer = () => {
  return (
    <FooterSection>
      <LogoDiv />
      <LinkUl>
        <Li>취향 소개</Li>
        <Li>약관</Li>
        <Li>개인정보취급방침</Li>
        <Li>문의하기</Li>
      </LinkUl>
      <SNSDiv>
        <Blog></Blog>
        <Insta></Insta>
        <Facebook></Facebook>
        <Tweeter></Tweeter>
      </SNSDiv>
    </FooterSection>
  );
};

export default Footer;
