import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import GlobalStyle from './GlobalStyle';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Nav from './components/shared/Nav';
import Footer from './components/shared/Footer';

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
          <Route path="/detail" element={<Detail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
