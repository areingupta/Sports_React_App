import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import Logo from "./Sportynn.png";

const Navbar = () => {


  return (
      <div className="navbar">
        <div className="logo">
          <img src={Logo} alt="Logo" width="50px" />
        </div>

        <nav>
          <ul id="MenuItems">
            <li>
              <Link to="/">Home</Link>
            </li>
            
            <li>
              <Link to="/login">Log in</Link>
            </li>
          </ul>
        </nav>

      </div>

  );
};

export default Navbar;
