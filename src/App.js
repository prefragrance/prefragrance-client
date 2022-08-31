import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import GlobalStyle from './GlobalStyle';
import Home from './pages/Home';
import Nav from './components/shared/Nav';
import Footer from './components/shared/Footer';

import DetailPage from './pages/DetailPage';

const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
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
          <Route index element={<Home />} />
          <Route path="/detail" element={<DetailPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
