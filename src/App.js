import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './features/header/Header';
import Footer from './features/footer/Footer';
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";

import './assets/css/Style.css';

function App() {
  return (
    <>
      <Router>
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="ProductList/:category" element={<ProductList/>}/>
            <Route path="/ProductDetails/:productId" element={<ProductDetails/>}/>
            <Route path="/Cart" element={<Cart/>}/>
          </Routes>

      </Router>

      <Footer/>
    </>
  );
}

export default App;
