import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { COLOR } from '../../../constants';

import Modal from './Modal';

const SearchBarInput = () => {
  const searchInputRef = useRef();
  return (
    <Form>
      <SelectBox>
        <option value="whole">통합검색</option>
        <option value="name">제품명</option>
        <option value="tag">키워드</option>
        <option value="producer">브랜드</option>
      </SelectBox>
      <input
        type="text"
        ref={searchInputRef}
        placeholder="향, 제품, 브랜드, 키워드를 검색해보세요!"
      />
      <button type="submit">검색</button>
      <Modal />
    </Form>
  );
};

const Form = styled.form`
  width: 600px;
  height: 50px;
  display: flex;
  align-items: center;
  border: none;
  position: relative;
  input {
    flex: 1;
    height: 100%;
    padding-left: 1rem;
    font-size: 1.1rem;
    color: ${COLOR.BLACK};
  }
  button {
    width: 100px;
    height: 50px;
    font-size: 1.1rem;
    border-radius: 0 0.8rem 0.8rem 0;
  }
`;
const SelectBox = styled.select`
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  color: ${COLOR.BLACK};
  background-color: ${COLOR['GREEN-100']};
  border: none;
  border-radius: 0.8rem 0 0 0.8rem;
  margin: 0;
  padding: 0;
  padding-left: 1.5rem;
`;

export default SearchBarInput;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
// import { Select, SearchForm } from './styled';
// import Modal from './Modal';
// import SearchBarInput from './index2';

// const SearchBar = () => {
//   const { register, handleSubmit, setValue } = useForm();
//   const navigate = useNavigate();
//   const onSubmit = ({ opt, search }) => {
//     navigate('/search', {
//       state: {
//         category_name: opt,
//         search: search,
//       },
//     });
//     setValue('search', '');
//     setValue('opt');
//   };
//   return (
//     <>
//       <SearchBarInput />
//       {/* <SearchForm onSubmit={handleSubmit(onSubmit)}>
//         <Select {...register('opt')}>
//           <option value="name">제품명</option>
//           <option value="tag">키워드</option>
//           <option value="producer">브랜드</option>
//         </Select>
//         <input
//           {...register('search', { required: '검색어를 입력해주세요.' })}
//           placeholder="향 제품, 브랜드, 키워드를 검색해보세요!"
//         />
//         <button>검색</button>
//         <Modal />
//       </SearchForm> */}
//     </>
//   );
// };

// export default SearchBar;
