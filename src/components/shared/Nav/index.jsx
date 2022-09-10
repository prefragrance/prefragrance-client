import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import COLOR from '../../../constants/color';
import { PATH } from '../../../constants';
import { Link } from 'react-router-dom';

import { FaUser } from 'react-icons/fa';

import SearchBar from '../SearchBar';

const Nav = () => {
  return (
    <Container>
      <Link to={`${PATH.route.home}`}>
        <LogoBox>
          <Title color={`${COLOR['GREEN-100']}`}>취</Title>
          <Title color={`${COLOR['GREEN-200']}`}>향</Title>
        </LogoBox>
      </Link>
      <SearchBar />
      <FaUser style={{ fontSize: 32, color: `${COLOR['GREEN-100']}` }} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-width: 1200px;
  height: 80px;
  position: fixed;
  top: 0px;
  background-color: ${COLOR['GREEN-400']};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 48px;
  z-index: 9999;
`;
const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
`;
const Title = styled.h2`
  font-family: 'KoPubWorld_light', sans-serif;
  white-space: nowrap;
  color: ${props => props.color};
`;

export default Nav;
