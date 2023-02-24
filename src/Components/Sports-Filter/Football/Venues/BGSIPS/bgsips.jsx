import React from "react";
import VenueDetail from "../../../comps/venue-detail";
import bgsipsimg from "../../Venue-Images/maxresdefault.jpg";

const BGSIPS = () => {
  return (
    <>
      <VenueDetail
        imgsrc={bgsipsimg}
        name="BGS International Public School, Dwarka"
        timing="6:30am to 7:00pm"
        sport = "/book-football"
        address="Sector-5, Dwarka"
        locsrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.034584136027!2d77.0546975150083!3d28.598739282431172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b282efd92c7%3A0xc109393d8b519013!2sBgs%20International%20Public%20School%2C%20Sector%205%2C%20Dwarka%2C%20Delhi%2C%20110075!5e0!3m2!1sen!2sin!4v1676106520070!5m2!1sen!2sin"
      />

    </>
  );
};

export default BGSIPS;