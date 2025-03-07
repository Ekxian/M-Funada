import React from "react";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="container py-4">
        <div className="row">
          {/* First Column */}
          <div className="col-lg-4 col-md-6 col-12 pt-5 pb-5">
            <h3 style={{ color: "#E9762B" }}>
              <strong>M'Funada</strong>
            </h3>
            <p className="text-white">
              <small>Continue M’Funada 2025, all rights reserved</small>
            </p>
            <h3 className="mt-5" style={{ color: "#E9762B" }}>
              <strong>Follow us on</strong>
            </h3>
            <div className="d-flex gap-2">
              <a
                href="https://www.facebook.com/profile.php?id=61573713874153"
                target="_blank"
                className="text-decoration-none"
              >
                <div
                  className="bg-white rounded-circle d-flex justify-content-center align-items-center"
                  style={{ width: "25px", height: "25px" }}
                >
                  <FaFacebookF className="text-dark" />
                </div>
              </a>
              <div
                className="bg-white rounded-circle d-flex justify-content-center align-items-center"
                style={{ width: "25px", height: "25px" }}
              >
                <FaInstagram className="text-dark" />
              </div>
              <div
                className="bg-white rounded-circle d-flex justify-content-center align-items-center"
                style={{ width: "25px", height: "25px" }}
              >
                <FaTiktok className="text-dark" />
              </div>
            </div>
          </div>
          {/* Second Column */}
          <div className="col-lg-2 col-md-6 col-12 pt-5">
            <h3 style={{ color: "#E9762B" }}>
              <strong>Menu</strong>
            </h3>
            <p className="text-white">
              <small>Home</small>
            </p>
            <p className="text-white">
              <small>Menu</small>
            </p>
            <p className="text-white">
              <small>About Us</small>
            </p>
            <p className="text-white">
              <small>Find Us</small>
            </p>
          </div>
          {/* Third Column */}
          <div className="col-lg-2 col-md-6 col-12 pt-5">
            <h3 style={{ color: "#E9762B" }}>
              <strong>Contact</strong>
            </h3>
            <p className="text-white">
              <small>+63-910-555-6414</small>
            </p>
            <p className="text-white">
              <small>mfunada@gmail.com</small>
            </p>
            <p className="text-white">
              <small>Address here</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
