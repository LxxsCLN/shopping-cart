import { Link } from "react-router-dom";
import Product from "./product"

const Shop = (props) => {   
  let prod = []
  props.products.forEach(element => {
      prod.push(<Product addProduct={props.addProduct} product={element} key={element.id}  />)
  });

  return (
    <div className="shopdiv">
      <nav className="cart">
          <h2>Please buy our stuff!</h2>   
          <Link to={"/cart"}>
          <h3>Cart ({props.quantity})</h3>
          </Link> 
      </nav>  
      <div>
          {prod}            
      </div>      
    </div>
  );
};

export default Shop;

