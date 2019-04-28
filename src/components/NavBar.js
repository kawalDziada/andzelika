import React, { Component } from "react";

import logo from "../img/logo.svg";

export default class NavBar extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light" id="navbar">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-lg-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#testimonials">
                    Testimonials
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link last" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}
