import React from 'react';
// import { HomeWrapper } from './styled';
import Banner from '../../components/Home/Banner';
import Magazine from '../../components/Home/Magazine';
import Recommendation from '../../components/Home/Recommendation';
import BestReview from '../../components/Home/BestReview';
import Footer from '../../components/shared/Footer';

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
