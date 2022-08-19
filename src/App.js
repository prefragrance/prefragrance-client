import React from 'react';
import { Routes, Route } from 'react-router-dom';

import GlobalStyle from './GlobalStyle';
import Template from './Template';
import MainContainer from './components/shared/MainContainer';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Nav from './components/shared/Nav';
import Search from './pages/Search';
import Footer from './components/shared/Footer';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Template>
        <Nav />
        <MainContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </MainContainer>
        <Footer />
      </Template>
    </>
  );
};

export default App;
