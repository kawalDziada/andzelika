import React from "react";
import about from "../img/about.svg";

export default function About() {
  return (
    <div className="row align-items-center hero-section">
      <div className="col-6 mx-auto col-md-6 order-md-1">
        <img
          src={about}
          className="img-fluid mb-3 mb-md-0 d-block"
          alt="about"
        />
      </div>
      <div className="col-md-6 order-md-2 text-center text-md-left pr-md-5">
        <h2 className="text text-big">About me</h2>
        <p className="text text-small">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button className="button">MORE INFO</button>
      </div>
    </div>
  );
}
