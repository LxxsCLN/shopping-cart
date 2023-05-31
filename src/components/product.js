import React, { useState } from "react";

const Product = (props) => {

    const [quantity, setQuantity] = useState(1)

    return (
      <div className="product">
                <p>{props.product.image}</p>
                <p>{props.product.name}</p>
                <p>{props.product.price}</p>
                <div className="quantity">
                    <button onClick={() =>{
                        if (quantity <= 1) return
                        setQuantity(quantity - 1)
                    }}> - </button>
                    <p> {quantity} </p>
                    <button onClick={() =>{
                        if (quantity >= 99) return
                        setQuantity(quantity + 1)
                    }}> + </button>
                </div>
                <button onClick={() =>{
                    props.addProduct(props.product, quantity)
                    setQuantity(1)
                } }>Agregar al carrito</button>
            </div> 
    );
  };
  
  export default Product;