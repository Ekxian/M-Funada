import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { BiSolidBasket } from "react-icons/bi";

import "./delivered.css";

import MENU1 from "../../assets/MENU1.jpg";
import MENU2 from "../../assets/MENU2.jpg";
import MENU3 from "../../assets/MENU3.jpg";

const Delivered = () => {
  const navigate = useNavigate();
  const toMenuRoute = () => {
    navigate("mfunada/menu");
    window.scrollTo(0, 0);
  };

  return (
    <div className="container mt-5">
      {/* ROW 1 TITLE */}
      <motion.div
        className="row d-flex justify-content-between align-items-center"
        initial={{ opacity: 0, translateY: -50 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="col-lg-4">
          <strong>
            Best <span style={{ color: "#E9762B" }}>Delivered</span> Categories
          </strong>
        </h1>
        <p className="col-lg-3">
          <small>
            Here are some of our best distributed categories.
            <span
              style={{ color: "#E9762B", cursor: "pointer" }}
              onClick={toMenuRoute}
            >
              Order now!
            </span>
          </small>
        </p>
      </motion.div>

      {/* ROW 2: CARDS */}
      <motion.div
        className="row my-5 justify-content-center"
        initial={{ opacity: 0, translateY: -50 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1 }}
      >
        {/* CARD 1 */}
        <motion.div
          className="col-lg-3 col-md-4 col-sm-6 col-12 mb-2 d-flex justify-content-center"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="card h-100 shadow" style={{ width: "18rem" }}>
            <img
              src={MENU1}
              className="card-img-top"
              style={{ width: "100%", height: "18rem", objectFit: "cover" }}
              alt="..."
            />
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">M'FUNada Ala Carte</h5>
                <h5 className="card-title" style={{ color: "#e9762b" }}>
                  <strong>₱59</strong>
                </h5>
              </div>
              <p className="card-text">
                <small>
                  Savor our signature moringga empanadas made fresh and
                  flavorful, perfect for a quick, satisfying bite. A simple
                  treat that hits the tasty spot.
                </small>
              </p>
              <div className="d-grid gap-2">
                <button className="btn-basket btn" onClick={toMenuRoute}>
                  <BiSolidBasket className="fs-4 text-white" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CARD 2 */}
        <motion.div
          className="col-lg-3 col-md-4 col-sm-6 col-12 mb-2 d-flex justify-content-center"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="card h-100 shadow" style={{ width: "18rem" }}>
            <img
              src={MENU2}
              className="card-img-top"
              style={{ width: "100%", height: "18rem", objectFit: "cover" }}
              alt="..."
            />
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">Combo Meal</h5>
                <h5 className="card-title" style={{ color: "#e9762b" }}>
                  <strong>₱99</strong>
                </h5>
              </div>
              <p className="card-text">
                <small>
                  Enjoy the ultimate combo of our signature empanadas paired
                  with your choice of side and a refreshing drink for a fuller
                  meal.
                </small>
              </p>
              <div className="d-grid gap-2">
                <button className="btn-basket btn" onClick={toMenuRoute}>
                  <BiSolidBasket className="fs-4 text-white" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CARD 3 */}
        <motion.div
          className="col-lg-3 col-md-4 col-sm-6 col-12 mb-2 d-flex justify-content-center"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="card h-100 shadow" style={{ width: "18rem" }}>
            <img
              src={MENU3}
              className="card-img-top"
              style={{ width: "100%", height: "18rem", objectFit: "cover" }}
              alt="..."
            />
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">M'FUNada Bundle</h5>
                <h5 className="card-title" style={{ color: "#e9762b" }}>
                  <strong>₱219</strong>
                </h5>
              </div>
              <p className="card-text">
                <small>
                  Get more for less with our M’FUNada bundle, ideal for sharing
                  or satisfying bigger cravings, packed with flavor and value.
                </small>
              </p>
              <div className="d-grid gap-2">
                <button className="btn-basket btn" onClick={toMenuRoute}>
                  <BiSolidBasket className="fs-4 text-white" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Delivered;
