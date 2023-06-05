import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
      <nav className="nav">
        <h1>Apple</h1>
        <Link to={"/"}>
        <li>Inicio</li>
        </Link>
        <Link to={"/shop"}>
        <li>Tienda</li>
        </Link>
        <p></p>
      </nav>
    );
};
  
export default Nav;