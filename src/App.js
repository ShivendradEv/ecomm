import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./components/layout/Header";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

import './assets/css/Style.css';

function App() {
  return (
    <>
      <Router>

        <Header/>
        <div className='container'>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="ProductList/:category" element={<ProductList/>}/>
            <Route path="/ProductDetails" element={<ProductDetails/>}/>
            <Route path="/Cart" element={<Cart/>}/>
            <Route path="/Checkout" element={<Checkout/>}/>
          </Routes>
        </div>

      </Router>
    </>
  );
}

export default App;
