import React from 'react';
import styled from 'styled-components';
import COLOR from 'constants/color';
import Avatar from 'components/shared/Avatar';
import { AiFillStar } from 'react-icons/ai';
import logo from 'assets/images/취향로고.png';

const SearchResultBlock = ({ data }) => {
  return (
    <Container>
      <ImgWrapper>
        {data.url ? (
          <Avatar url={data.url} width="5rem" height="5rem" />
        ) : (
          <DefaultIcon />
        )}
      </ImgWrapper>
      <Wrapper>
        <ProductTitle>
          <ProductName>{data.product}</ProductName>
          <ProductRate>
            <AiFillStar />
            {data.star}
          </ProductRate>
        </ProductTitle>
        <Producer>{data.producer} </Producer>
        <ProductInfo>
          조회수 {data.watch} / 리뷰 수 {data.comment}
        </ProductInfo>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem;
  height: 7rem;
  gap: 1rem;
`;

const ImgWrapper = styled.div`
  cursor: pointer;
`;
const DefaultIcon = styled.div`
  background: no-repeat center url(${logo});
  background-color: ${COLOR.green[400]};
  background-size: 7rem;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ProductTitle = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const ProductName = styled.span`
  font-size: 1.1rem;
`;
const ProductRate = styled.span`
  display: flex;
  align-items: center;

  gap: 0.2rem;
  color: ${COLOR.red[100]};
  font-size: 1rem;
  padding-left: 0.4rem;
`;

const Producer = styled.div`
  opacity: 0.5;
  cursor: pointer;
`;
const ProductInfo = styled.div`
  font-size: 0.8rem;
`;

export default SearchResultBlock;
