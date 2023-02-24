import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import "./sports-home.css";

const Sportshome = () => {
  return (
    <>
      <div className="header-sports">
        <div className="container-nav">
          <Navbar />
        </div>

        <div className="account-page">
          <div className="container">
            <div className="row">
              <div className="col-1-sports">
                <h1>Sports</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="account-page">
          <div className="container">
            <div className="row">
              <div className="col-1-sports">
                <h2 className="sport-cats">Select Sport</h2>
                <Link to="/sports-home/football"><button className="sports-buttons" type="submit">Football</button></Link>
                {/* <Link to="/sports-home/cricket"><button className="sports-buttons" type="submit">Cricket</button></Link> */}
                 <Link to="/sports-home/tennis"><button className="sports-buttons" type="submit">Lawn Tennis</button></Link>
                {/* <Link to="/sports-home"><button className="sports-buttons" type="submit">Table Tennis</button></Link>
                <Link to="/sports-home"><button className="sports-buttons" type="submit">Badminton</button></Link>
                <Link to="/sports-home"><button className="sports-buttons" type="submit">Swimming</button></Link> */}

              </div>
            </div>
          </div>
        </div>

      

      

      <div className="footer-reg">
        <div className="container">
          <div className="row-footer">
            <div className="footer-col-1">
              <h3>Follow us on our Socials - </h3>
              <div className="social-media">
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

export default Sportshome;
