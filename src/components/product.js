import React, { useState } from "react";

const Product = (props) => {
const [quantity, setQuantity] = useState(1)
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',minimumFractionDigits: 0});


    return (
        <div className="product boxshadow">
            
                <img className="on" alt='' src={process.env.PUBLIC_URL + props.product.image} ></img>
                <p className="twot">{props.product.name}</p>
                <p>{formatter.format(props.product.price)}</p>
                <div className="quantity">
                    <button className="plusminus" onClick={() =>{
                        if (quantity <= 1) return
                        setQuantity(quantity - 1)
                    }}> - </button>
                    <p>{quantity}</p>
                    <button className="plusminus" onClick={() =>{
                        if (quantity >= 99) return
                        setQuantity(quantity + 1)
                    }}> + </button>
                </div>
                <button className="addprodbutt" onClick={async() =>{
                    props.addProduct(props.product, quantity)
                    setQuantity(1)
                } }>Add to cart</button>
            </div> 
    );
};
  
export default Product;