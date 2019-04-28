import React, { Component } from "react";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Contact from "./components/Contact";
import ScrollAnimation from "react-animate-on-scroll";

import "./styles/custom.scss";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container master-head">
          <ScrollAnimation animateIn="fadeIn">
            <Hero />
          </ScrollAnimation>
          <div id="about">
            <ScrollAnimation animateIn="fadeIn">
              <About />
            </ScrollAnimation>
          </div>
          <div id="testimonials">
            <ScrollAnimation animateIn="fadeIn">
              <Testimonials />
            </ScrollAnimation>
          </div>
          <div id="contact">
            <ScrollAnimation animateIn="fadeIn">
              <Contact />
            </ScrollAnimation>
          </div>
        </div>
      </div>
    );
  }
}
