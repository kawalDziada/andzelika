import React from "react";
import Dominiczka from "../img/Dominiczka.svg";
import Gosia from "../img/Gosia.svg";
import YaoMing from "../img/YaoMing.svg";
import ScrollAnimation from "react-animate-on-scroll";

export default function Testimonials() {
  return (
    <div className="container-fluid hero-section">
      <div className="row">
        <div className="col-sm">
          <ScrollAnimation animateIn="fadeIn">
            <div className="text-center space-bottom">
              <img src={Dominiczka} alt="Dominiczka" />
            </div>
            <h5 className="headers text text-mid">Dominiczka</h5>
            <p className="headers text text-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </ScrollAnimation>
        </div>
        <div className="col-sm">
          <ScrollAnimation animateIn="fadeIn">
            <div className="text-center space-bottom">
              <img src={Gosia} alt="Gosia" />
            </div>
            <h5 className="headers text text-mid">Gosia</h5>
            <p className="headers text text-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </ScrollAnimation>
        </div>
        <div className="col-sm">
          <ScrollAnimation animateIn="fadeIn">
            <div className="text-center space-bottom">
              <img src={YaoMing} alt="YaoMing" />
            </div>
            <h5 className="headers text text-mid">Yao Ming</h5>
            <p className="headers text text-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}
