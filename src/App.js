import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Template from './Template';
import Footer from './components/shared/Footer';
import Home from './pages/Home';
import MainContainer from './components/shared/MainContainer';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Template>
        <MainContainer>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </MainContainer>
        <Footer />
      </Template>
    </>
  );
};

export default App;
