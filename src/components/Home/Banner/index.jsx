import React from 'react';
import { BannerSection, Logo, SearchForm } from './styled';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { categoryOptState } from '../../../state/atom';

const Banner = () => {
  const [category, setCategory] = useState();
  const navigate = useNavigate();

  const onSubmit = () => {
    navigate('/search', {
      state: {
        category_name: '',
        search: '',
      },
    });
  };
  return (
    <BannerSection>
      <Logo />
      <SearchForm>
        <select value={category} onInput={onInput}>
          <option value={product_name}>제품명</option>
          <option value={keyword}>키워드</option>
          <option value={brand}>브랜드</option>
        </select>
        <input placeholder="향 제품, 브랜드, 키워드를 검색해보세요!" />
        <button onSubmit={onSubmit}>검색</button>
      </SearchForm>
    </BannerSection>
  );
};

export default Banner;
