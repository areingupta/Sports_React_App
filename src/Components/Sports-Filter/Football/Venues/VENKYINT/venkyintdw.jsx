import React from "react";
import VenueDetail from "../../../comps/venue-detail";
import venkydwimg from "../../Venue-Images/venkateshwarDw.jpg";

const VENKINTSCH = () => {
  return (
    <>
      <VenueDetail
        imgsrc={venkydwimg}
        name="Venkateshwar Internation School"
        timing="7:30am to 7:00pm"
        sport = "/book-football"
        address="Sector 18 Dwarka, Dwarka"
        locsrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14013.443340391845!2d77.02141253955081!3d28.58895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1ac154bc0c77%3A0x74da7f773efd240e!2sSri%20Venkateshwar%20International%20School!5e0!3m2!1sen!2sin!4v1676449508158!5m2!1sen!2sin"
      />
    </>
  );
};

export default VENKINTSCH;