import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Details from './pages/Details';
import CategoryProduct from './pages/CategoryProduct';
// import CheckoutPage from './pages/CheckoutPage';
import Notice from './components/Notice';


const App = () => {
  return (
    <>
      <Notice />
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='/:slug' element={<CategoryProduct />} />
              <Route path='details/:slug' element={<Details />} />
            </Route>
            {/* <Route path='checkout' element={<CheckoutPage />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;