import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import { useAuth } from "../Context/AuthContext";
import "./Header.css";

const Header = () => {
  const { currentUser, logOut } = useAuth();
  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />
      <nav>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/review">Order Review</NavLink>
        <NavLink to="/inventory">Manage Inventory</NavLink>
        <NavLink to="/register">Register</NavLink>
        {currentUser?.name && <span className="name">Hello, {currentUser?.name && currentUser.name}</span>}
        {currentUser?.name ? (
          <button onClick={logOut}>Log Out</button>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </nav>
      
    </div>
  );
};

export default Header;
