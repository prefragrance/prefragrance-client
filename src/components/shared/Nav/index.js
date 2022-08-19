import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { Container, LogoBox, Title } from './styled';
import PATH from '../../../constants/path';
import COLOR from '../../../constants/color';

const Nav = () => {
  const [scroll, setScroll] = useState(0);

  const onScroll = () => {
    setScroll(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  });

  return (
    <Container visiblity={scroll > 80}>
      <Link to={`${PATH.route.home}`}>
        <LogoBox>
          <Title color={`${COLOR['GREEN-100']}`}>취</Title>
          <Title color={`${COLOR['GREEN-200']}`}>향</Title>
        </LogoBox>
      </Link>
      <FontAwesomeIcon
        icon={faUser}
        style={{ fontSize: 32, color: `${COLOR['GREEN-100']}` }}
      />
    </Container>
  );
};

export default Nav;
