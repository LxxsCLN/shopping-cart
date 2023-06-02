import React, { useState, useEffect, } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav"
import Home from "./components/home"
import Shop from "./components/shop"
import Cart from "./components/cart"

function App() {  
  const [ quantity, setQuantity ] = useState(0);
  const [ cart, setCart ] = useState(undefined);
  const [ cart2, setCart2 ] = useState([]);
  const [ price, setPrice ] = useState(0);
  const products = [
    {
      name: "one",
      image: "img1",
      id: 1,
      price: 100,
    },
    {
      name: "two",
      image: "img2",
      id: 2,
      price: 200,
    },
    {
      name: "three",
      image: "img3",
      id: 3,
      price: 300,
    },
    {
      name: "four",
      image: "img4",
      id: 4,
      price: 400,
    },
    {
      name: "five",
      image: "img5",
      id: 5,
      price: 500,
    },
    {
      name: "six",
      image: "img6",
      id: 6,
      price: 600,
    },
  ];

  useEffect(() => {
    if (cart === undefined) return;
    let index = cart2.findIndex(e => e.id === cart[0].id)
    if (index >= 0) {      
      let copy = cart2
      copy[index].quantity += cart[1]
      setCart2(copy)
    }
    else{
    let a = structuredClone(cart[0]) 
    let b = cart[1] 
    a.quantity = b;
    setCart2([...cart2, a])
    }        
  }, [cart])

  function addProduct(prod, quant){
    setQuantity(quantity + quant)    
    setPrice(price + (quant * prod.price))
    setCart([prod, quant])
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
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop cart={cart} quantity={quantity} price={price} products={products} addProduct={addProduct}  />} />
        <Route path="/cart" element={<Cart cart2={cart2} quantity={quantity} price={price} products={products} removeProduct={removeProduct} changeProduct={changeProduct} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
