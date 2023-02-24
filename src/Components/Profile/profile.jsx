import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import "./profile.css";
import { useAuth0 } from "@auth0/auth0-react";



const Profile = () => {

  const { user, logout } = useAuth0();

  
  return (
    <>
      <div className="header-sports-filter">
        <div className="container-nav">
          <Navbar />
        </div>
      </div>

      <div className="profile-display">
        <div className="small-container">
          <div className="col-1-profile">
            <h1>Your Profile</h1>
            <p>Username: {user.name}</p>
            <p>Email-ID: {user.email}</p>
            <Link className="btn" to="" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              Log out
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-reg">
        <div className="container">
          <div className="row-footer">
            <div className="footer-col-1">
              <h3>Follow us on our Socials - </h3>
              <div className="social-media">
                <a
                  href="https://twitter.com/areingupta"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.instagram.com/areingupta/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCNM9zJrCGKGtYhScgYWlMKQ"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fab fa-youtube"></i>
                </a>
                <a
                  href="https://in.linkedin.com/in/arein-gupta-260861211"
                  target="_blank"
                  rel="noreferrer"
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

export default Profile;
