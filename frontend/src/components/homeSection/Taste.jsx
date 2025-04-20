import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import "./taste.css";

import IN1 from "../../assets/IN1.png";

const Taste = () => {
  const navigate = useNavigate();
  const toAboutUsRoute = () => {
    navigate("mfunada/about-us");
    window.scrollTo(0, 0);
  };

  return (
    <div className="container my-5">
      <div className="row gx-5 justify-content-center align-items-center">
        {/* Image Section */}
        <motion.div
          className="col-12 col-lg-5 d-flex justify-content-center mb-4 mb-lg-0"
          initial={{ opacity: 0, translateX: 50 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={IN1}
            alt="Delicious Food"
            style={{ width: "100%", maxWidth: "400px", height: "400px" }}
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="col-12 col-lg-5 text-center text-lg-start"
          initial={{ opacity: 0, translateX: 50 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>
            <strong>
              The <span style={{ color: "#E9762B" }}>Taste</span> That <br />
              You <span style={{ color: "#E9762B" }}>Need.</span>
            </strong>
          </h1>
          <p className="w-100 w-lg-75 mx-auto">
            Craving something new and exciting? At M'FUNada, we bring you
            empanadas like no other. Made with malunggay-infused dough and
            bursting with bold, international flavors like shawarma and kimchi.
            Healthy, flavorful, and proudly local that every bite tells a story
            of passion, creativity, and Filipino pride.
          </p>

          <button
            className="btn-about-us btn rounded-pill px-4 text-white"
            onClick={toAboutUsRoute}
          >
            More About Us
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Taste;
