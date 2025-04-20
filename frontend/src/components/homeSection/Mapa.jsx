import React from "react";
import { motion } from "framer-motion";

import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

import "./mapa.css";

const Mapa = () => {
  return (
    <div className="container my-5">
      <motion.div
        className="row"
        initial={{ opacity: 0, translateY: 50 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1 }}
      >
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
            <small>52 Gen. T. de Leon, Valenzuela, 1441 Metro Manila</small>
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
      </motion.div>
      <div className="row">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.463012761683!2d120.99453450000001!3d14.686388599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b6ac1e3d536b%3A0x2225ffd2760758a8!2s52%20Gen.%20T.%20de%20Leon%2C%20Valenzuela%2C%201441%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1745130359268!5m2!1sen!2sph"
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
