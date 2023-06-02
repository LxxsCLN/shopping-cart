import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import uniqid from 'uniqid';

const Cart = (props) => {

  const [ empty, setEmpty ] = useState(true);

  let list = []
  props.cart2.forEach(element => {
    list.push(<div className="cartitem" key={uniqid()}>
        <p>{element.image}</p>
        <p>{element.name}</p>    
        <button onClick={() =>{
        props.changeProduct(element.id, false)
        }}>-</button> 
        <p>{element.quantity}</p>
        <button onClick={() =>{
        props.changeProduct(element.id, true)
        }}>+</button>        
        <p>{element.price}</p>
        <button onClick={() =>{
        props.removeProduct(element.id)
        } }>Eliminar</button>
    </div>) 
});  


  useEffect(()=> {
    if (props.cart2.length >= 1){
      setEmpty(false);
    } else{
      setEmpty(true);
    }
  }, [props.cart2])

    return (
      <div>
        <h1>Hello from Cart</h1>
        <div className="cartitem">
            <p>Image</p>
            <p>Name</p> 
            <p>Quantity</p>           
            <p>Price</p>
            <p></p>
        </div>
        {empty ? (<h2>Carrito vacío</h2>) : list}
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