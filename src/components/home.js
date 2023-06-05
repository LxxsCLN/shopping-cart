import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="cartdiv">
      <h1 className="hello">Bienvenido a nuestra página</h1>
      <Link className="hello" to={"/shop"}>
      <button className="addprodbutt">Entrar a la tienda</button>
      </Link>      
    </div>
  );
};

export default Home;