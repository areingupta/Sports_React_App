import React from "react";
import './contact.css';

const Contact = () => {
  return (
    <>
      <div className="box">
        <form className="booking-final" action="reservation.php" method="post">
        <div class="elem-group">
            <label for="phone">Name</label>
            <input
              type="text"
              id="name"
              name="visitor_name"
              placeholder="Enter Full Name"
              required
            />
          </div>
          <div class="elem-group">
            <label for="phone">E-mail</label>
            <input
              type="email"
              id="email"
              name="visitor_email"
              placeholder="Enter email"
              required
            />
          </div>
          <div class="elem-group">
            <label for="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="visitor_phone"
              placeholder="Phone Number"
              required
            />
          </div>
          
          <hr />
          <div class="elem-group">
            <label for="message">Tell us how we can help</label>
            <textarea
              id="message"
              name="visitor_message"
              placeholder="Your text here"
            ></textarea>
          </div>
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
