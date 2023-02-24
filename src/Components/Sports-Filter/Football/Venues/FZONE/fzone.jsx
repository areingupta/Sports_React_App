import React from "react";
import VenueDetail from "../../../comps/venue-detail";
import fzoneimg from "../../Venue-Images/fzone.jpeg";

const FZONE = () => {
  return (
    <>
      <VenueDetail
        imgsrc={fzoneimg}
        name="Fzone"
        timing="6:30am to 8:30pm"
        sport = "/book-football"
        address="Near Church Road, Nelson Mandela Marg, Vasant Kunj"
        locsrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.134740689919!2d77.15576491500612!3d28.50559358246802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1e67b24f6a81%3A0x4fe6145d3d55b6c4!2sTheFootballLink%20Sport%20Private%20Limited!5e0!3m2!1sen!2sin!4v1676449363390!5m2!1sen!2sin"
      />
    </>
  );
};

export default FZONE;