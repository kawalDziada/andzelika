import React from "react";
import message from "../img/message.svg";

export default function Contact() {
  return (
    <div className="row align-items-center hero-section">
      <div className="col-6 mx-auto col-md-6 order-md-1">
        <img
          src={message}
          className="img-fluid mb-3 mb-md-0 .d-none .d-block"
          alt="teacher"
        />
      </div>
      <div className="col-md-6 order-md-2 text-center text-md-left pr-md-5">
        <h3 className="text text-big">First lesson for 0£</h3>
        <p className="text text-small">Book your trial now!</p>
        <button className="button">CONTACT</button>
      </div>
    </div>
  );
}
