import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import Details from './pages/Details'
import CategoryProduct from './pages/CategoryProduct'

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/:slug' element={<CategoryProduct/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App