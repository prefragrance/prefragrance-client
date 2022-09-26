import React from 'react';
import styled from 'styled-components';
import COLOR from 'constants/color';

const Select = ({ optionList }) => {
  return (
    <SelectBox>
      {optionList &&
        optionList.map(option => (
          <SelectOption key={option.label} value={option.value}>
            {option.label}
          </SelectOption>
        ))}
    </SelectBox>
  );
};

const SelectBox = styled.select`
  padding: 15px 10px;
  font-size: 1rem;
  border: 1px solid ${COLOR.gray[100]};
  border-radius: 8px;
`;

const SelectOption = styled.option`
  &:hover {
    color: ${COLOR.white};
    background-color: ${COLOR.gray[200]};
  }
`;

export default Select;
