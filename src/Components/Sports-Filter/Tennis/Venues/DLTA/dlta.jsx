import React from "react";
import VenueDetail from "../../../comps/venue-detail";
import bgsipsimg from "../../Venue-Images/dlta.jpg";

const DLTA = () => {

  const title = document.title;
  const url = document.querySelector("link[rel=canonical]")
    ? document.querySelector("link[rel=canonical]").href
    : document.location.href;
  return (
    <>
      <VenueDetail
        imgsrc={bgsipsimg}
        name="Delhi Lawn Tennis Association Complex"
        timing="6:30am to 7:00pm"
        sport = "/book-tennis"
        doctitle = {title}
        docurl = {url}
        address="Delta Complex African Avenue, Safdarjung Enclave"
        locsrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.321369024466!2d77.18620431500734!3d28.56011098244646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d86d3605e4d%3A0x7d1f63dc9706f4f8!2sDelhi%20Lawn%20Tennis%20Association!5e0!3m2!1sen!2sin!4v1676488603492!5m2!1sen!2sin"
      />

    </>
  );
};

export default DLTA;