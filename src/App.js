import React from 'react';
import { Routes, Route } from 'react-router-dom';

import GlobalStyle from './GlobalStyle';
import Template from './Template';
import MainContainer from './components/shared/MainContainer';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Nav from './components/shared/Nav';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Template>
        <MainContainer>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail" element={<Detail />} />
          </Routes>
        </MainContainer>
      </Template>
    </>
  );
};

export default App;
