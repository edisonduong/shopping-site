import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './components/Product'

function App() {
  return (
    <div class="container-fluid text-center">    
    <div class="row content">
      <div class="col-sm-2 sidenav">
        <h3>Shopping Cart</h3>
      </div>
      <div class="col-sm-8 text-left"> 
        <h1>Eddie's Motorcycle Shop</h1>
        <p>Welcome to my online shopping site.</p>
        <hr/>
          <Product/>
      </div>
    </div>
  </div>
  
  );
}

export default App;
