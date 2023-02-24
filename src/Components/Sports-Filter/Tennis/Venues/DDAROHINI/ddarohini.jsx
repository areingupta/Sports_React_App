import React from "react";
import VenueDetail from "../../../comps/venue-detail";
import ddadrohiniimg from "../../Venue-Images/ddarohini.jpg";

const DDAROHINI = () => {

  const title = document.title;
  const url = document.querySelector("link[rel=canonical]")
    ? document.querySelector("link[rel=canonical]").href
    : document.location.href;
  return (
    <>
      <VenueDetail
        imgsrc={ddadrohiniimg}
        name="DDA Rohini Sports Complex"
        timing="6:30am to 9:00pm"
        sport = "/book-tennis"
        doctitle = {title}
        docurl = {url}
        address="Sector-16, Rohini"
        locsrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27994.061802281136!2d77.09308907910159!3d28.711842900000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01614389d89d%3A0x3743a1b13d5efcc!2sRohini%20Sports%20Complex%20Gym!5e0!3m2!1sen!2sin!4v1676449443162!5m2!1sen!2sin"
      />
    </>
  );
};

export default DDAROHINI;