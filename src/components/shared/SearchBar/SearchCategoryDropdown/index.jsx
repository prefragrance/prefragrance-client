import React from 'react';
import styled, { css } from 'styled-components';
import { useEffect, useState } from 'react';
import { COLOR } from 'constants';

const SearchCategoryDropdown = React.forwardRef(({ categoryRef }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tabText, setTabText] = useState('통합검색');
  const hoveredTab = e => {
    e.target.style.color = COLOR.green[300];
  };
  const unHoveredTab = e => {
    e.target.style.color = COLOR.black;
  };

  const removeHandler = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const onClick = e => {
      if (
        categoryRef.current !== null &&
        !categoryRef.current.contains(e.target)
      ) {
        setIsOpen(!isOpen);
      }
    };

    if (isOpen) {
      window.addEventListener('click', onClick);
    }

    return () => {
      window.removeEventListener('click', onClick);
    };
  }, [isOpen]);

  const tabSet1 = () => {
    setTabText('통합검색');
  };
  const tabSet2 = () => {
    setTabText('제품명');
  };
  const tabSet3 = () => {
    setTabText('브랜드');
  };
  const tabSet4 = () => {
    setTabText('키워드');
  };
  return (
    <Wrapper>
      <DropdownContainer>
        <DropdownButton onClick={removeHandler} ref={categoryRef}>
          {tabText}
        </DropdownButton>
        <Menu isDropped={isOpen}>
          <Ul>
            <Li onMouseEnter={hoveredTab} onMouseLeave={unHoveredTab}>
              <LinkWrapper onClick={tabSet1}>통합검색</LinkWrapper>
            </Li>
            <Li onMouseEnter={hoveredTab} onMouseLeave={unHoveredTab}>
              <LinkWrapper onClick={tabSet2}>제품명</LinkWrapper>
            </Li>
            <Li onMouseEnter={hoveredTab} onMouseLeave={unHoveredTab}>
              <LinkWrapper onClick={tabSet3}>브랜드</LinkWrapper>
            </Li>
            <Li onMouseEnter={hoveredTab} onMouseLeave={unHoveredTab}>
              <LinkWrapper onClick={tabSet4}>키워드</LinkWrapper>
            </Li>
          </Ul>
        </Menu>
      </DropdownContainer>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  margin: 100px auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${COLOR.BLACK};
  font-size: 1rem;
  background-color: ${COLOR.gray[100]};
  width: 100px;
  height: 50px;
  border-radius: 0.8rem 0 0 0.8rem;
`;

const DropdownContainer = styled.div`
  position: relative;
  text-align: center;
`;

const DropdownButton = styled.div`
  cursor: pointer;
`;

const Menu = styled.div`
  background: ${COLOR.gray[100]};
  position: absolute;
  top: 35px;
  left: 50%;
  width: 100px;
  text-align: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 0.4rem;
  opacity: 0;
  visibility: hidden;
  transform: translate(-50%, -20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  z-index: 9;

  &:after {
    content: '';
    height: 0;
    width: 0;
    position: absolute;
    top: -3px;
    left: 50%;
    transform: translate(-50%, -50%);
    border-top-width: 0;
    border-bottom-color: ${COLOR.gray[100]};
  }

  ${({ isDropped }) =>
    isDropped &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translate(-50%, 0);
      left: 50%;
    `};
`;

const Ul = styled.ul`
  & > li {
    margin-bottom: 12px;
  }

  & > li:first-of-type {
    margin-top: 12px;
  }

  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Li = styled.li``;

const LinkWrapper = styled.a`
  font-size: 16px;
  text-decoration: none;
  color: ${COLOR.BLACK};
`;

export default SearchCategoryDropdown;
