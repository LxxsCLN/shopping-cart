import React, { useState, useEffect } from "react";
import uniqid from 'uniqid';

const Cart = (props) => {
  const [ empty, setEmpty ] = useState(true);
  let list = []
  props.cart2.forEach(element => {
    list.push(<div className="cartitem boxshadow cartitem2" key={uniqid()}>
        <img className="img one" alt='' src={process.env.PUBLIC_URL + element.image} ></img>
        <p className="two">{element.name}</p>  
        <div className="prodquant three">
          <button className="plusminus" onClick={() =>{
          props.changeProduct(element.id, false)
          }}>-</button>
          <p>{element.quantity}</p>
          <button className="plusminus" onClick={() =>{
          props.changeProduct(element.id, true)
          }}>+</button>
        </div>                  
        <p className="four">${element.price}</p>
        <button className="addprodbutt five" onClick={() =>{
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
    <div className="cartdiv">
      <h1 className="hello">Carrito de compras</h1>
      <div className="cartitem invis">
          <p></p>
          <p>Producto</p> 
          <p>Cantidad</p>           
          <p>Precio</p>
          <p></p>
      </div>
      {empty ? (<h2 className="hello">Carrito vacío</h2>) : list}
      <div className="cartitem">
          <p></p>
          <p></p> 
          <p>Productos: {props.quantity}</p>            
          <p>Total: ${props.price}</p>
      </div>
      <button className="addprodbutt buyprod">Comprar</button>
    </div>
  );
};
  
export default Cart;