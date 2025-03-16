import React from "react";
import { motion } from "framer-motion";

import { BiSolidBasket } from "react-icons/bi";

import "./order.css";

const Order = () => {
  return (
    <motion.div
      className="container my-5"
      initial={{ opacity: 0, translateY: -50 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-center mb-5">
        <strong>
          How To <span style={{ color: "#E9762B" }}>Order?</span>
        </strong>
      </h2>

      <div className="row d-flex justify-content-center gx-2 gy-4 px-5">
        {/* BOX 1 */}
        <motion.div
          className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-4 shadow d-flex flex-column justify-content-between align-items-center square-box">
            <div className="d-flex justify-content-between align-items-center w-100">
              <h1 style={{ color: "#E9762B", fontSize: "60px" }}>
                <strong>01</strong>
              </h1>
              <BiSolidBasket className="fs-2" style={{ color: "#E9762B" }} />
            </div>
            <p>
              <small>
                <strong>Go to Menu and pick your items.</strong>
              </small>
            </p>
          </div>
        </motion.div>

        {/* BOX 2 */}
        <motion.div
          className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-4 shadow d-flex flex-column justify-content-between align-items-center square-box">
            <div className="d-flex justify-content-between align-items-center w-100">
              <h1 style={{ color: "#E9762B", fontSize: "60px" }}>
                <strong>02</strong>
              </h1>
              <BiSolidBasket className="fs-2" style={{ color: "#E9762B" }} />
            </div>
            <p>
              <small>
                <strong>Once finished, proceed to the Order page.</strong>
              </small>
            </p>
          </div>
        </motion.div>

        {/* BOX 3 */}
        <motion.div
          className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-4 shadow d-flex flex-column justify-content-between align-items-center square-box">
            <div className="d-flex justify-content-between align-items-center w-100">
              <h1 style={{ color: "#E9762B", fontSize: "60px" }}>
                <strong>03</strong>
              </h1>
              <BiSolidBasket className="fs-2" style={{ color: "#E9762B" }} />
            </div>
            <p>
              <small>
                <strong>Pick your mode of delivery and payment.</strong>
              </small>
            </p>
          </div>
        </motion.div>

        {/* BOX 4 */}
        <motion.div
          className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-4 shadow d-flex flex-column justify-content-between align-items-center square-box">
            <div className="d-flex justify-content-between align-items-center w-100">
              <h1 style={{ color: "#E9762B", fontSize: "60px" }}>
                <strong>04</strong>
              </h1>
              <BiSolidBasket className="fs-2" style={{ color: "#E9762B" }} />
            </div>
            <p>
              <small>
                <strong>Submit and wait for your order to arrive!</strong>
              </small>
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Order;
