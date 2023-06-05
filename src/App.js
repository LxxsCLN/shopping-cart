import React, { useState, useEffect, } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav"
import Home from "./components/home"
import Shop from "./components/shop"
import Cart from "./components/cart"
import { HashRouter } from "react-router-dom";

function App() {  
  const [ quantity, setQuantity ] = useState(0);
  const [ cart2, setCart2 ] = useState([]);
  const [ price, setPrice ] = useState(0);
  const products = [
    {
      name: "iPhone 3",
      image: "/assets/iphone3.jpg",
      id: 1,
      price: 1000,
    },
    {
      name: "iPhone 4",
      image: "/assets/iphone4.jpg",
      id: 2,
      price: 2000,
    },
    {
      name: "iPhone 4s",
      image: "/assets/iphone4s.jpg",
      id: 3,
      price: 3000,
    },
    {
      name: "iPhone 5",
      image: "/assets/iphone5.jpg",
      id: 4,
      price: 4000,
    },
    {
      name: "iPhone 5s",
      image: "/assets/iphone5s.jpg",
      id: 5,
      price: 5000,
    },
    {
      name: "iPhone 5c",
      image: "/assets/iphone5c.jpg",
      id: 6,
      price: 6000,
    },
    {
      name: "iPhone 6",
      image: "/assets/iphone6.png",
      id: 7,
      price: 7000,
    },
    {
      name: "iPhone 6 Plus",
      image: "/assets/iphone6plus.png",
      id: 8,
      price: 8000,
    },
    {
      name: "iPhone 6s",
      image: "/assets/iphone6s.jpg",
      id: 9,
      price: 9000,
    },
    {
      name: "iPhone 6s Plus",
      image: "/assets/iphone6splus.png",
      id: 10,
      price: 10000,
    }
  ];

  function addProduct(prod, quant){
    setQuantity(quantity + quant)    
    setPrice(price + (quant * prod.price))

      let index = cart2.findIndex(e => e.id === prod.id)
      if (index >= 0) {      
        let copy = cart2
        copy[index].quantity += quant;
        setCart2(copy)
      }else{
        let testobj = {...prod, quantity: quant}
        setCart2([...cart2, testobj])
      }    
  }

  function removeProduct(prodid){
    let index = cart2.findIndex(e => e.id === prodid)
    let found = cart2.find(e => e.id === prodid)
    setPrice(price - (found.quantity * found.price)) 
    let copy = cart2.toSpliced(index, 1);
    setCart2(copy)    
    setQuantity(quantity - found.quantity)
  }

  function changeProduct(prodid, value){
    let index = cart2.findIndex(e => e.id === prodid)
    let found = cart2.find(e => e.id === prodid)
    if (found.quantity === 1 && value === false){
      removeProduct(prodid)      
    } else if (value === false){
      setQuantity(quantity - 1)
      setPrice(price - found.price) 
      let copy = cart2.slice()
      copy[index].quantity -= 1;
      setCart2(copy)
    } else {
      setQuantity(quantity + 1)
      setPrice(price + found.price) 
      let copy = cart2.slice()
      copy[index].quantity += 1;
      setCart2(copy)
    }
  }

   return (
    <HashRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop quantity={quantity} price={price} products={products} addProduct={addProduct}  />} />
        <Route path="/cart" element={<Cart cart2={cart2} quantity={quantity} price={price} products={products} removeProduct={removeProduct} changeProduct={changeProduct} />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
