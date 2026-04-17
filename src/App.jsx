import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Details from './pages/Details';
// import {useNavigate} from 'react-router-dom';
import CategoryProduct from './pages/CategoryProduct';
import CheckoutPage from './pages/CheckoutPage';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/:slug' element={<CategoryProduct/>} />
          <Route path='details/:slug' element={<Details />} />
         
        </Route>
        <Route path='checkout' element={<CheckoutPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;