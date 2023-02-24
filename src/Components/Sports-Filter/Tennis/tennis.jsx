import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar/navbar";
import "./tennis.css";
import DDASPCDW from "./Venue-Images/Basketball_court.jpeg";
import DDAROHINI from "./Venue-Images/ddarohini.jpg";
import DLTA from "./Venue-Images/dlta.jpg";
import SIRIFORT from "./Venue-Images/sirifort.jpg";
import SAKETSC from "./Venue-Images/saketsc.jpg";
import BGSIPS from "./Venue-Images/maxresdefault.jpg";
import ColVenue from "../comps/col-venue";

const Tennis = () => {
  return (
    <>
      <div className="header-sports-filter">
        <div className="container-nav">
          <Navbar />
        </div>
      </div>

      <div className="small-container-sports">
        <h2>Available Venues</h2>
        <div className="row-sports-filter">
          <ColVenue
            imgsrc={DLTA}
            link="/sports-home/tennis/dltacd"
            name="Delhi Lawn Tennis Association Complex"
            address="Address: Delta Complex African Avenue, Safdarjung Enclave"
          />

          <ColVenue
            imgsrc={SIRIFORT}
            link="/sports-home/tennis/sirifortd"
            name="Siri Fort Complex"
            address="Address: August Kranti Marg"
          />
          <ColVenue
            imgsrc={DDAROHINI}
            link="/sports-home/tennis/ddarohinid"
            name="DDA Sports Complex Rohini"
            address="Address: Sector-18, Rohini"
          />
        </div>

        <div className="row-sports-filter">
          <ColVenue
            imgsrc={DDASPCDW}
            link="/sports-home/tennis/ddadw"
            name="DDA Sports Complex, Dwarka"
            address="Address: Sector 11 Dwarka, Dwarka"
          />

          <ColVenue
            imgsrc={BGSIPS}
            link="/sports-home/tennis/bgsipsd"
            name="BGS International Public School, Dwarka"
            address="Address: Sector 5 Dwarka, Dwarka"
          />

          <ColVenue
            imgsrc={SAKETSC}
            link="/sports-home/tennis/saketscd"
            name="Saket Sports Complex"
            address="Address: DDA Sports Complex, Saket"
          />
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

export default Tennis;
