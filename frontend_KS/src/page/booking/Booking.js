import React from "react";
import { FaUser } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaHotel } from "react-icons/fa";
import "./booking.css";

function Booking() {
  return (
    <div className="booking-container">
      <div
        className="booking-container-h1"
        style={{
          color: "white",
          fontSize: 35,
          paddingTop:200,
          letterSpacing: 5,
          wordSpacing: 11,
          textTransform: "capitalize",
          fontWeight: 100,
        }}
      >
        {" "}
        Resort Booking Form
      </div>

      <div className="booking-item">
        <div className="title">Book Now</div>
        <div className="booking-content">
          <form action="#" className="book-now">
            <div className="user-details">
              <div className="input-box">
                <FaUser className="icon" />
                <input type="text" id="input-group" placeholder="First name" />
              </div>

              <div className="input-box">
                <FaUser className="icon" />
                <input type="text" id="input-group" placeholder="Last name" />
              </div>

              <div className="input-box">
                <FaEnvelope className="icon" />
                <input type="email" id="input-group" placeholder="Email" />
              </div>

              <div className="input-box">
                <FaPhoneAlt className="icon" />
                <input
                  type="number"
                  id="input-group"
                  placeholder="Phone number"
                />
              </div>

              <div className="input-box">
                <FaCalendarAlt className="icon" />
                <input
                  style={{ color: "#fff" }}
                  type="date"
                  id="input-group"
                  placeholder="Departure Date"
                />
              </div>

              <div className="input-box">
                <FaCalendarAlt className="icon" />
                <input
                  type="date"
                  id="input-group"
                  placeholder="Arrival Date"
                />
              </div>

              <div className="input-box">
                <FaUsers className="icon" />
                <input
                  type="number"
                  id="input-group"
                  placeholder="No.of guests"
                />
              </div>

              <div className="input-box">
                <FaHotel className="icon" />
                <select id="input-group">
                  <option value="">Room Type</option>
                  <option value="">AC</option>
                  <option value="">Non-AC</option>
                  <option value="">Single Bed</option>
                  <option value="">Double Bed</option>
                </select>
              </div>
            </div>
            <div className="button-booking">
              <button id="reset-btn">Reset</button>
              <button type="submit" value="Submit" id="submit-btn">
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Booking;
