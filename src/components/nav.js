import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
      <nav>
        <h1>Apple</h1>
        <Link to={"/"}>
        <li>Inicio</li>
        </Link>
        <Link to={"/shop"}>
        <li>Tienda</li>
        </Link>
      </nav>
    );
};
  
export default Nav;