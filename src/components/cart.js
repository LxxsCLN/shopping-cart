import React, { useState } from "react";
import { Link } from "react-router-dom";
import uniqid from 'uniqid';

const Cart = (props) => {

    let list = []
    props.cart.forEach(element => {
        list.push(<div className="cartitem" key={uniqid()}>
            <p>{element.image}</p>
            <p>{element.name}</p>            
            <p>{element.price}</p>
        </div>)
    });

    let total = 0;


    return (
      <div>
        <h1>Hello from Cart</h1>
        <div className="cartitem">
            <p>Image</p>
            <p>Name</p>            
            <p>Price</p>
        </div>
        {list}
        <div className="cartitem">
            <p></p>
            <p></p>            
            <p>Total: {props.price}</p>
        </div>
        <button>Comprar</button>
      </div>
    );
  };
  
  export default Cart;