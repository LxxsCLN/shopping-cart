import React, { useState, useEffect } from "react";
import uniqid from 'uniqid';
import { Link } from "react-router-dom";

const Cart = (props) => {

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',minimumFractionDigits: 0});


  const [ empty, setEmpty ] = useState(true);
  let list = []
  props.cart2.forEach(element => {
    list.push(<div className="cartitem boxshadow cartitem2" key={uniqid()}>
        <img className="img one" alt='' src={process.env.PUBLIC_URL + element.image} ></img>
        <p className="two twot">{element.name}</p>  
        <div className="prodquant three">
          <button className="plusminus" onClick={() =>{
          props.changeProduct(element.id, false)
          }}>-</button>
          <p>{element.quantity}</p>
          <button className="plusminus" onClick={() =>{
          props.changeProduct(element.id, true)
          }}>+</button>
        </div>                  
        <p className="four">{formatter.format(element.price)}</p>
        <button className="addprodbutt five" onClick={() =>{
        props.removeProduct(element.id)
        } }>Remove</button>
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
      <h1 className="hello">Cart</h1>
      <div className="cartitem invis">
          <p></p>
          <p>Product</p> 
          <p>Quantity</p>           
          <p>Price</p>
          <p></p>
      </div>
      {empty ? (<h2 className="hello">Empty</h2>) : list}
      <div className="cartitem">
          <p></p>
          <p></p> 
          <p>Products: {props.quantity}</p>            
          <p>Total: {formatter.format(props.price)}</p>
      </div>
      <Link className="hello" to={"/thankyou"}>
      <button className="addprodbutt buyprod" onClick={()=>{
        props.clearCart()} }>Purchase</button>
      </Link>       
    </div>
  );
};
  
export default Cart;