import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Select, SearchForm } from './styled';
import Modal from './Modal';

const SearchBar = () => {
  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();
  const onSubmit = ({ opt, search }) => {
    navigate('/search', {
      state: {
        category_name: opt,
        search: search,
      },
    });
    setValue('search', '');
    setValue('opt');
  };
  return (
    <SearchForm onSubmit={handleSubmit(onSubmit)}>
      <Select {...register('opt')}>
        <option value="name">제품명 ▾</option>
        <option value="tag">키워드</option>
        <option value="producer">브랜드</option>
      </Select>
      <input
        {...register('search', { required: '검색어를 입력해주세요.' })}
        placeholder="향 제품, 브랜드, 키워드를 검색해보세요!"
      />
      <button>검색</button>
      <Modal />
    </SearchForm>
  );
};

export default SearchBar;
