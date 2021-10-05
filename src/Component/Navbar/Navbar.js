import React from "react";
import "./navbar.scss";
import Logo from "../../image/Logo.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="sad" height="90px" width="auto" />
      </div>
      <div className="navlinks">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Service +</li>
          <li>Page +</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
