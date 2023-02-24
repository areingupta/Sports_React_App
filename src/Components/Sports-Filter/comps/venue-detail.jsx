import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar/navbar";
import "./venue-detail.css";
import { RWebShare } from "react-web-share";

const VenueDetail = (props) => {

  var link = props.sport;
  return (
    <>
      <div className="header-sports-filter">
        <div className="container-nav">
          <Navbar />
        </div>
      </div>

      <div className="small-container-sports">
        <div className="row-venue-detail">
          <div className="col-2-venue-detail">
            <img src={props.imgsrc} alt="" height="384px" width="420px" />
          </div>

          <div className="col-2-venue-detail">
            <h1>{props.name}</h1>
            <h2>{props.timing}</h2>
            <Link className="btn-venue" to={link}>
              Book Now
            </Link>
            <RWebShare
              data={{
                text: 'Hey! Check out this Amazing Venue',
                url: props.docurl,
                title: props.doctitle,
              }}
              onClick={() => console.log("shared successfully!")}
            >
              <Link className="btn-venue" id="share-btn" to="">
                Share
              </Link>
            </RWebShare>
          </div>
        </div>
      </div>

      <div className="small-container-sports">
        <div className="row-venue-detail">
          <div className="col-2-venue-detail">
            <h2>Location:</h2>
            <p>{props.address}</p>
          </div>
          <div className="col-2-venue-detail">
            <iframe
              title="AB"
              src={props.locsrc}
              width="500"
              height="350"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
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

export default VenueDetail;
