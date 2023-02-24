import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import Logo from "./Sportynn.png";
import { useAuth0 } from "@auth0/auth0-react";


const Navbar = () => {

  const { loginWithRedirect } = useAuth0();

  const { isAuthenticated } = useAuth0();

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

            {isAuthenticated ? (
              <li>
              <Link to="/user-profile" >Profile</Link>
            </li>
            ) : (
              <li>
              <Link to="" onClick={()=> loginWithRedirect()}>Log in</Link>
            </li>
              
            )}
          

          </ul>
        </nav>

      </div>

  );
};

export default Navbar;
