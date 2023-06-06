import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="cartdiv">
      <h1 className="hello">Design is not just what it looks and feels like. Design is how it works.</h1>
      <Link className="hello" to={"/shop"}>
      <button className="addprodbutt enter">Explore our products</button>
      </Link>      
    </div>
  );
};

export default Home;