import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
      <nav className="nav">
        <img className="logoimg" alt="" src={process.env.PUBLIC_URL + "/assets/applelogo.png"}></img>
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