import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from 
"./pages/Layout";








import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import { BasketContext } from './components/BasketContext';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Basket from './pages/Basket';
import Cookies from 'js-cookie'


const App = () => {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
};

export default App;