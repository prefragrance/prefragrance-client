import React, { useState } from 'react';
import { TabContainer, TabItem } from './styled';

const Tab = () => {
  const categories = ['제품상세', '리뷰'];
  const [active, setActive] = useState(categories[0]);
  return (
    <TabContainer>
      {categories.map(category => (
        <TabItem
          key={category}
          active={active === category}
          onClick={() => setActive(category)}
        >
          {category}
        </TabItem>
      ))}
    </TabContainer>
  );
};

export default Tab;
