import React from 'react';
import { KeywordItem, KeywordList } from './styled';

const data = [
  { id: 0, keyword: '상큼한' },
  { id: 1, keyword: '부드러운' },
  { id: 2, keyword: '세련된' },
  { id: 3, keyword: '밝은' },
];

const index = () => {
  return (
    <KeywordList>
      {data &&
        data.map(item => (
          <KeywordItem key={item.id}>{item.keyword}</KeywordItem>
        ))}
    </KeywordList>
  );
};

export default index;
