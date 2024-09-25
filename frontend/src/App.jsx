import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import { BasketContext } from './components/BasketContext';
import { useState, useEffect } from 'react';
import Basket from './pages/Basket';
import Cookies from 'js-cookie'


const App = () => {
  let initBasketState;

  const basketCookie = Cookies.get('basket');

  if (basketCookie) {
    initBasketState = JSON.parse(basketCookie); // Parse the stringified cookie to an object
  } else {
    initBasketState = {};
  }

  const [basket, setBasket] = useState(initBasketState);
  return (
    <BasketContext.Provider value={{basket, setBasket}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
            <Route path="basket" element={<Basket />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </BasketContext.Provider>
  );
};

export default App;