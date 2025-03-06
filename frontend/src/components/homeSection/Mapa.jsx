import React from "react";

import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

import "./mapa.css";

const Mapa = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 col-lg-6">
          <h2>
            <strong>
              Get In <span style={{ color: "#E9762B" }}>Touch</span>
            </strong>
          </h2>
          <p>
            <small>
              We’d love to here from you! Whether you have questions, need
              support or want to learn more about our services, our team is here
              to help!
            </small>
          </p>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <FaLocationDot className="bg-orange fs-3 text-white p-1 rounded-1" />
          <p>
            <strong>
              <small>Our Address</small>
            </strong>
          </p>
          <p>
            <small>
              4000 - A Gen. T. de Leon Corner Policarpio, Valenzuela, 1442 Metro
              Manila
            </small>
          </p>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <FaPhoneAlt className="bg-orange fs-3 text-white p-1 rounded-1" />
          <p>
            <strong>
              <small>Our Contact Info</small>
            </strong>
          </p>
          <p>
            <small>0992 264 5378</small>
            <br />
            <small>mfunadaest2026@gmail.com</small>
          </p>
        </div>
      </div>
      <div className="row">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.482985044137!2d120.98820517457445!3d14.685257274999493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b6a9095c5e89%3A0x6c7f3f02b9c0e619!2s4000%20-%20A%20Gen.%20T.%20de%20Leon%20Corner%20Policarpio%2C%20Valenzuela%2C%201442%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1741278053532!5m2!1sen!2sph"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowfullscreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default Mapa;
