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
          <h2>Nuestros productos</h2>   
          <Link to={"/cart"}>
          <h3>Carrito ({props.quantity})</h3>
          </Link> 
      </nav>  
      <div className="shopmain">
          {prod}            
      </div>      
    </div>
  );
};

export default Shop;

