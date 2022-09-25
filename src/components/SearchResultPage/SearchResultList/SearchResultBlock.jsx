import React from 'react';
import styled from 'styled-components';
import COLOR from 'constants/color';
import Avatar from 'components/shared/Avatar';

const SearchResultBlock = ({ data }) => {
  return (
    <Container>
      {/* <Avatar url="assets/images/취향로고.png" width="50px" height="50px" /> */}
      <Wrapper>
        <div>
          {data.product} {data.star}
        </div>
        <div>{data.producer} </div>
        <div>
          {data.watch} / {data.comment}
        </div>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${COLOR.gray[100]};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default SearchResultBlock;
