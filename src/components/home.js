import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="cartdiv">
      <h1 className="hello">El diseño no es solo lo que parece y se siente. El diseño es cómo funciona.</h1>
      <Link className="hello" to={"/shop"}>
      <button className="addprodbutt enter">Entrar a la tienda</button>
      </Link>      
    </div>
  );
};

export default Home;