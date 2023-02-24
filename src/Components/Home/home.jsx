import React from "react";
import Navbar from "../Navbar/navbar";
// import { useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import Venues from "./venues.png";
import Coaching from "./coaching.png";
import Mobile from './mobile.png';
import { useAuth0 } from "@auth0/auth0-react";



const Home = () => {

  const { loginWithRedirect } = useAuth0();
  

  return (
    <>
      <div className="header">
        <div className="container">
          <Navbar />
          <div className="row">
            <div className="col-1">
              <h1>Sportynn</h1>
              <p>Your only stop for anything Sports!</p>

              <Link to='/sports-home'><button type="submit">Explore Sports</button></Link>
              

              {/* <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search for Sport"
                />
                
              </form> */}

            </div>
          </div>
        </div>
      </div>

      {/* SPORTS SECTION */}

      <div className="sports">
        <div className="small-container">
          <h1>Book Online Now!</h1>
          <div className="row-sports">
            <div className="col-3">
              <Link to="/sports-home">
                <img src={Venues} alt="" width="300px" height="210px"/>
              </Link>
            </div>
            <div className="col-3">
              <Link to="/sports-home">
                <img src={Coaching} alt="" width="300px" height="210px"/>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Home SIGN UP/In SECTION */}

      <div className="home-sign">
        <div className="small-container">
          <div className="row-home-sign">
            <div className="col-2">
              <img src={Mobile} alt="" />
            </div>

            <div className="col-2">
              <p>Don't have an account yet?</p>
              <h1>Create an Account or Log in now!</h1>
              <Link className="btn" to="" onClick={()=> loginWithRedirect()}>
                Create Account/Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Home - Contact Us  */}

      <div className="home-contact">
        <div className="small-container">
          <div className="col-1">
            <h1>Have any concerns or feedback for us?</h1>
            <Link className="btn" to="/contact">
              Contact Us Here
            </Link>
          </div>
        </div>
      </div>

      {/* Home - Footer  */}

      <div className="footer">
        <div className="container">
          <div className="row-footer">
            <div className="footer-col-1">
              <h3>Follow us on our Socials - </h3>
              <div className="social-media">
                {/* <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a> */}
                <a href="https://twitter.com/areingupta" target="_blank" rel="noreferrer">
                  <i class="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.instagram.com/areingupta/?hl=en"
                  target="_blank" rel="noreferrer"
                >
                  <i class="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCNM9zJrCGKGtYhScgYWlMKQ"
                  target="_blank" rel="noreferrer"
                >
                  <i class="fab fa-youtube"></i>
                </a>
                <a
                  href="https://in.linkedin.com/in/arein-gupta-260861211"
                  target="_blank" rel="noreferrer"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            <div className="footer-col-2">
              {/* <img src="" alt="" /> */} <h2>Sportynn</h2>
              <p>© Created by Arein Gupta | All rights reserved</p>
            </div>

            <div className="footer-col-3">
              <h3>Know more about me</h3>
              <Link className="btn" to="/about">
                About Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
