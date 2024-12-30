import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import Cart from './Cart';
import { CartProvider } from "react-use-cart";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Nav from './Nav';
import HomePage from './HomePage';
import BuyCard from './BuyCard';








// import './App.css';

function App() {
  return (
    <> 


<Router>





    <div>
    {/* <nav>
        <Link to="/"> Our Products</Link><br />
        <Link to="/cart">Cart</Link>
      </nav> */}
      <CartProvider>
       
        <Nav />
        
        <Routes>
        <Route path="/product" element={<Home />} />
         <Route path="/cart" element={<Cart />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/BuyCard" element={<BuyCard />}  />
        
        </Routes>
        
   </CartProvider>
   
     
    </div>
  </Router>
       
      
      
      
    </>
  );
}

export default App;
