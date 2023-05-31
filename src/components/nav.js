import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
      <nav>
        <h1>Logo</h1>
        <Link to={"/"}>
        <li>Home</li>
        </Link>
        <Link to={"/shop"}>
        <li>Shop</li>
        </Link>
      </nav>
    );
  };
  
  export default Nav;