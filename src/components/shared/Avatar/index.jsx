import React from 'react';
import styled from 'styled-components';
import COLOR from 'constants/color';

const Avatar = ({ width, height, url }) => {
  return (
    <Container width={width} height={height}>
      <Image url={url} />
    </Container>
  );
};

const Container = styled.div`
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  overflow: hidden;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 100%;
  background-color: ${COLOR.white};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
  src: ${({ url }) => url(url)};
`;

export default Avatar;
