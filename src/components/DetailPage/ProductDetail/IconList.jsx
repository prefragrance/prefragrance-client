import styled from 'styled-components';

import { IoMdFlower } from 'react-icons/io';
import {
  FaUmbrellaBeach,
  FaCanadianMapleLeaf,
  FaSnowflake,
  FaSun,
} from 'react-icons/fa';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import COLOR from '../../../constants/color';

export const IconWeatherList = () => {
  return (
    <IconListBox>
      <IoMdFlower
        style={{
          width: '60px',
          height: '60px',
          color: `${COLOR['GREEN-300']}`,
        }}
      />
      <FaUmbrellaBeach
        style={{
          width: '60px',
          height: '60px',
          color: `${COLOR['GRAY-100']}`,
        }}
      />
      <FaCanadianMapleLeaf
        style={{
          width: '60px',
          height: '60px',
          color: `${COLOR['GRAY-100']}`,
        }}
      />
      <FaSnowflake
        style={{
          width: '60px',
          height: '60px',
          color: `${COLOR['GRAY-100']}`,
        }}
      />
    </IconListBox>
  );
};

export const IconTimeList = () => {
  return (
    <IconListBox>
      <FaSun
        style={{
          width: '60px',
          height: '60px',
          color: `${COLOR['GRAY-100']}`,
        }}
      />
      <BsFillMoonStarsFill
        style={{
          width: '60px',
          height: '60px',
          color: `${COLOR['GREEN-300']}`,
        }}
      />
    </IconListBox>
  );
};

const IconListBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 10px 0;
`;
