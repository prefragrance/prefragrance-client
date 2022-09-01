import React from 'react';
// import { HomeWrapper } from './styled';
import Banner from '../components/HomePage/Banner';
import Magazine from '../components/HomePage/Magazine';
import Recommendation from '../components/HomePage/Recommendation';
import BestReview from '../components/HomePage/BestReview';

const Home = () => {
  return (
    <>
      <Banner />
      <Magazine />
      <Recommendation />
      <BestReview />
    </>
  );
};

export default Home;
