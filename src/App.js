import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Nav from "./components/nav"
import Home from "./components/home"
import Shop from "./components/shop"
import Cart from "./components/cart"



function App() {

  const [ quantity, setQuantity ] = useState(0);
  const [ cart, setCart ] = useState([]);
  const [ price, setPrice ] = useState(0);
  const [ products, setProducts ] = useState([
    {
      name: "one",
      image: "img",
      id: 1,
      price: 100,
    },
    {
      name: "two",
      image: "img2",
      id: 2,
      price: 200,
    },
  ]);

  function addProduct(prod, quant){
    setQuantity(quantity + quant)
    setCart(current => [...current, prod])
    setPrice(price + (quant * prod.price))
    console.log(cart)
  }

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop cart={cart} quantity={quantity} price={price} products={products} addProduct={addProduct}/>} />
        <Route path="/cart" element={<Cart cart={cart} quantity={quantity} price={price} products={products} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
