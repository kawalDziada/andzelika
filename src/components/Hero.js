import React from "react";
import Teacher from "../img/teacher.svg";

export default function Hero() {
  return (
    <div className="row align-items-center hero-section">
      <div className="col-md-6 order-md-1 text-center text-md-left pr-md-5">
        <h3 className="text text-big">
          Hi! I'm{" "}
          <span className="highlight">
            <span>Andzelika</span>
          </span>
        </h3>
        <p className="text text-small">Your next English Teacher!</p>
        <button className="button">CONTACT</button>
      </div>
      <div className="col-6 mx-auto col-md-6 order-md-2">
        <img
          src={Teacher}
          className="img-fluid mb-3 mb-md-0 d-none d-md-block .d-lg-none"
          alt="teacher"
        />
      </div>
    </div>
  );
}
