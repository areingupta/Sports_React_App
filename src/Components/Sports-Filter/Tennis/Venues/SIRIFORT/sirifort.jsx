import React from "react";
import VenueDetail from "../../../comps/venue-detail";
import bgsipsimg from "../../Venue-Images/sirifort.jpg";

const SIRIFORT = () => {

  const title = document.title;
  const url = document.querySelector("link[rel=canonical]")
    ? document.querySelector("link[rel=canonical]").href
    : document.location.href;
  return (
    <>
      <VenueDetail
        imgsrc={bgsipsimg}
        name="Siri Fort Complex"
        timing="6:30am to 7:00pm"
        sport = "/book-tennis"
        doctitle = {title}
        docurl = {url}
        address="Address: August Kranti Marg"
        locsrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.5387721180196!2d77.21538011500718!3d28.553579982449026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce23fe219a60b%3A0x1811bb3b5784716!2sSiri%20Fort%20Sports%20Complex!5e0!3m2!1sen!2sin!4v1676488764661!5m2!1sen!2sin"
      />

    </>
  );
};

export default SIRIFORT;