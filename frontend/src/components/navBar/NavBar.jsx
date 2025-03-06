import React from "react";
import "./navBar.css";

import { BiSolidBasket } from "react-icons/bi";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar-top navbar navbar-expand-lg position-absolute w-100 mt-3">
        <div className="container py-1 px-5 ">
          {/* shadow */}
          <a className="navbar-brand" href="#">
            <h3 style={{ color: "#E9762B" }}>
              <strong>M'Funada</strong>
            </h3>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-center">
              <li className="nav-item-css nav-item me-4">
                <a
                  className="nav-link text-warning"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item-css nav-item me-4">
                <a className="nav-link text-warning" href="#">
                  Menu
                </a>
              </li>
              <li className="nav-item-css nav-item me-4">
                <a className="nav-link text-warning" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item-css nav-item me-4">
                <a className="nav-link text-warning" href="#">
                  Find us
                </a>
              </li>
            </ul>

            <button
              className="btn-order btn rounded-pill"
              type="submit"
              style={{ color: "#E9762B !important" }}
            >
              <div
                className="btn-text d-flex align-items-center mx-1 text-white"
                // onMouseEnter={(e) => {
                //   e.currentTarget.style.color = "#e9762b";
                // }}
                // onMouseLeave={(e) => {
                //   e.currentTarget.style.color = "white";
                // }}
              >
                <BiSolidBasket className="fs-4 me-2" />
                Orders
              </div>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
