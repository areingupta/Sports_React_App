import React from "react";
import VenueDetail from "../../../comps/venue-detail";
import bgsipsimg from "../../Venue-Images/saketsc.jpg";

const SAKETSC = () => {

  const title = document.title;
  const url = document.querySelector("link[rel=canonical]")
    ? document.querySelector("link[rel=canonical]").href
    : document.location.href;
  return (
    <>
      <VenueDetail
        imgsrc={bgsipsimg}
        name="Saket Sports Complex"
        timing="6:30am to 7:00pm"
        sport = "/book-tennis"
        doctitle = {title}
        docurl = {url}
        address="DDA Sports Complex, Saket"
        locsrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.4495487807326!2d77.21283411500652!3d28.52620448245985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1f122ba54fd%3A0xb4c42ad666d08b80!2sDDA%20Sports%20Complex%2C%20Saket!5e0!3m2!1sen!2sin!4v1676488709673!5m2!1sen!2sin"
      />

    </>
  );
};

export default SAKETSC;