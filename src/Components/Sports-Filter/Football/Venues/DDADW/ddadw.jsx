import React from "react";
import VenueDetail from "../../../comps/venue-detail";
import ddadwimg from "../../Venue-Images/Basketball_court.jpeg";

const DDADW = () => {

  const title = document.title;
  const url = document.querySelector("link[rel=canonical]")
    ? document.querySelector("link[rel=canonical]").href
    : document.location.href;

  return (
    <>
      <VenueDetail
        imgsrc={ddadwimg}
        name="DDA Dwarka Sports Complex"
        timing="6:30am to 9:00pm"
        address="Sector-11, Dwarka"
        sport = "/book-football"
        locsrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.261944204722!2d77.05244401500808!3d28.59191758243373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1ad8c21c599f%3A0x39c895481d9e44d!2sDda%20Sports%20Complex%20Dwarka%20New%20Delhi%20Sec%2011!5e0!3m2!1sen!2sin!4v1676103817881!5m2!1sen!2sin"
        doctitle = {title}
        docurl = {url}
      />
    </>
  );
};

export default DDADW;
