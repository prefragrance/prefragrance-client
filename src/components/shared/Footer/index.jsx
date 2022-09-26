import React from 'react';
import styled from 'styled-components';
import COLOR from 'constants/color';
import LogoSrc from '../../../assets/images/취향로고.png';

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

const FooterSection = styled.div`
  position: relative;
  // transform: translateY(-100%);
  height: 150px;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  background: ${COLOR.green[400]};
`;

const LogoDiv = styled.img.attrs({ src: `${LogoSrc}` })`
  display: flex;
  height: 50px;
`;
const LinkUl = styled.div`
  display: flex;
`;
const Li = styled.div`
  position: relative;
  color: ${COLOR.white};
  padding: 0 15px;
`;
const SNSDiv = styled.div`
  display: flex;
`;
const Blog = styled.div`
  display: flex;
`;
const Insta = styled.div`
  display: flex;
`;
const Facebook = styled.div`
  display: flex;
`;
const Tweeter = styled.div`
  display: flex;
`;

export default Footer;
