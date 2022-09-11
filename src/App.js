import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import GlobalStyle from './GlobalStyle';
import Nav from './components/shared/Nav';
import Footer from './components/shared/Footer';

import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import SearchResultPage from './pages/SearchResultPage';
import styled from 'styled-components';

const Layout = () => {
  return (
    <div>
      <Nav />
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/search" element={<SearchResultPage />} />
        </Route>
      </Routes>
    </>
  );
}

const OutletWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
`;
export default App;
