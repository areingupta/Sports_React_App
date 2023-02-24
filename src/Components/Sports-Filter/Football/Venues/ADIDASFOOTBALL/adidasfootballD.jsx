import React from "react";
import VenueDetail from "../../../comps/venue-detail";
import fzoneimg from "../../Venue-Images/adidasfootball.jpeg";

const ADIDASFOOTD = () => {
  return (
    <>
      <VenueDetail
        imgsrc={fzoneimg}
        name="Adidas Football"
        timing="6:30am to 8:30pm"
        sport = "/book-football"
        address="Address: Sector 11 , Vasant Kunj"
        locsrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.030994894622!2d77.15485141500616!3d28.508715182466887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f33228fba27%3A0x541e190e593e1e3a!2sAB%20PLAZA!5e0!3m2!1sen!2sin!4v1676449269432!5m2!1sen!2sin"
      />
    </>
  );
};

export default ADIDASFOOTD;