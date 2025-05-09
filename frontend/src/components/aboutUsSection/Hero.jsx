import React from "react";
import { motion } from "framer-motion";

import GP from "../../assets/GP.jpg";

import "./hero.css";

const Hero = () => {
  return (
    <div>
      <div>
        <img src={GP} alt="" className="group-image-height d-block w-100" />
        <div className="group-image-overlay"></div> {/* Overlay div */}
      </div>

      <div className="container position-absolute top-50 start-50 translate-middle z-3 text-center">
        <motion.div
          className="row text-white justify-content-center"
          initial={{ opacity: 0, translateY: 50 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="col-12">
            <h1 className="display-1 fw-bold">
              About <span style={{ color: "#E9762B" }}>Us</span>
            </h1>
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12 mx-auto">
            <p>
              At M'FUNada, we're more than just empanadas. We're a movement of
              flavor, culture, and purpose. Born out of passion and innovation,
              we fused the health benefits of malunggay with bold global flavors
              like shawarma and kimchi to bring you empanadas that are uniquely
              Filipino with an international twist. Every bite is a celebration
              of diversity, ambition, and love for food.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
