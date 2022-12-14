import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import GlobalStyle from './GlobalStyle';
import Nav from './components/shared/layout/Nav';
import Footer from './components/shared/layout/Footer';

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
          <Route path="/search/result" element={<SearchResultPage />} />
        </Route>
      </Routes>
    </>
  );
}

const OutletWrapper = styled.div`
  width: 1200px;
  min-height: calc(100vh - 80px - 150px);
  margin: 0 auto;
  margin-top: 80px;
`;
export default App;
