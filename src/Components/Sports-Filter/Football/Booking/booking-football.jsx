import React from "react";
import "./booking-football.css";

const BookingFootball = () => {
  window.onload = function () {
    var today = new Date().toISOString().split("T")[0];
    document.getElementsByName("bookin-date")[0].setAttribute("min", today);
  };

  return (
    <>
      <div className="box">
        <form className="booking-final" action="reservation.php" method="post">
          <div class="elem-group">
            <label for="name">Sport</label>
            <select id="sport-selection" name="sport_preference" required>
              <option value="sport" selected>
                Football
              </option>
            </select>
          </div>
          <div class="elem-group">
            <label for="name">Venue</label>
            <select id="venue-selection" name="venue_preference" required>
              <option value="sport" selected>
                DDA Sports complex, Dwarka
              </option>
              <option value="sport" >
                BGS International Public School, Dwarka
              </option>
              <option value="sport" >
                F-Zone
              </option>
              <option value="sport" >
                Venkateshwar School
              </option>
              <option value="sport" >
                DDA Sports Complex, Rohini 
              </option>
              <option value="sport" >
                Adidas Football
              </option>
            </select>
          </div>

          <div class="elem-group">
            <label for="booking-date">Booking Date</label>
            <input type="date" id="bookin-date" name="bookin-date" required />
          </div>

          <div class="elem-group">
            <label for="phone">Your Phone</label>
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
            <label for="slot-selection">Select time slot</label>
            <select id="slot-selection" name="slot_preference" required>
              <option value="">Choose a Time Slot</option>
              <option value="slot1">6:00</option>
              <option value="slot2">7:00</option>
              <option value="slot3">8:00</option>
            </select>
          </div>
          <hr />
          <div class="elem-group">
            <label for="message">Anything Else?</label>
            <textarea
              id="message"
              name="visitor_message"
              placeholder="Tell us anything else that might be important or have any instructions?"
            ></textarea>
          </div>
          <button className="btn" type="submit">
            Confirm Booking
          </button>
        </form>
      </div>
    </>
  );
};

export default BookingFootball;
