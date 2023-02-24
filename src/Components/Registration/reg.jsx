import React from "react";
import { Link } from 'react-router-dom';
import Navbar from "../Navbar/navbar";
import './reg.css';
import Mobile_reg from './mobile_reg.png';


const Registration = () => {


    return(
        <>
        <div className="header-reg">
        <div className="container-nav">
          <Navbar />
        </div>


        <div className="account-page">
            <div className="container">
                <div className="account-page-row">
                    <div className="col-2">
                        <img src={Mobile_reg} alt="" />
                    </div>

                    <div className="col-2">
                        <div className="form-container">
                          <div className="form-btn">
                            <p>Already have an account?</p>
                            <Link className="link-btn" to="/login">Log in</Link>
                          </div>

                  

                          {/* <form id="RegForm" onSubmit={signup}>
                            <input type="text" value={name} placeholder="Full Name" onChange={e => setName(e.target.value)}/>
                            <input type="email" value={email} placeholder="E-mail" onChange={e => setEmail(e.target.value)}/>
                            <input type="password" value={password} placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                            <button type="submit" className="btn">Register</button>
                          </form> */}
                        </div>
                    </div>
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
}

export default Registration;
