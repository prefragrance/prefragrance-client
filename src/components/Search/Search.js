import React, { useState } from 'react';
import { SearchForm } from './styled.js';

function Search() {
  const [text, setText] = useState('');

  const onChange = e => {
    setText(e.target.value);
  };

  const doSearch = () => {};

  return (
    <SearchForm>
      <input
        placeholder="검색어를 입력해주세요."
        style={{ fontFamily: 'KoPubWorld_light' }}
      />
      <button style={{ fontFamily: 'KoPubWorld_light' }}>검색</button>
    </SearchForm>
  );
}

export default Search;
