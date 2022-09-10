import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { COLOR, PATH } from '../../../constants';

import Modal from './Modal';

import { apiCall } from '../../../hook/useApiCall';

const SearchBarInput = () => {
  const cateInputRef = useRef();
  const searchInputRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const cateInput = cateInputRef.current.value;
    const searchInput = searchInputRef.current.value;
    // search input validation
    if (searchInput.trim().length === 0) {
      alert('검색어를 입력해주세요.');
    }
    // api call
    const searchResult = apiCall({
      service: 'search',
      method: 'get',
      data: { category: cateInput, searchInput: searchInput },
    });
    searchResult.then(res => {
      if (res.status === 200) {
        console.log(res);
        // 임시 router path
        navigate(`${PATH.route.search_result}`);
        // 나중에 status별로 error handling
      } else {
        console.log('No data');
      }
    });
    // set search input ""
    searchInputRef.current.value = '';
  };

  return (
    <Form onSubmit={handleSubmit}>
      <SelectBox ref={cateInputRef}>
        {/* pokemon api 이용을 위해 임시로 */}
        <option value="id">id</option>
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
