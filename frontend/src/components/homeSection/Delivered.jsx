import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { BiSolidBasket } from "react-icons/bi";

import "./delivered.css";

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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-pdH0qh12XweymWNkJZdjV-NAovekfQeaKw&s"
              className="card-img-top"
              style={{ width: "100%", height: "18rem", objectFit: "cover" }}
              alt="..."
            />
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">Ikinamada</h5>
                <h5 className="card-title" style={{ color: "#e9762b" }}>
                  <strong>₱59</strong>
                </h5>
              </div>
              <p className="card-text">
                <small>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
              src="https://hips.hearstapps.com/hmg-prod/images/chicken-empanada-1jpg-1651248642.jpg?crop=0.6794177386594448xw:1xh;center,top&resize=1200:*"
              className="card-img-top"
              style={{ width: "100%", height: "18rem", objectFit: "cover" }}
              alt="..."
            />
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">Ikinamada</h5>
                <h5 className="card-title" style={{ color: "#e9762b" }}>
                  <strong>₱59</strong>
                </h5>
              </div>
              <p className="card-text">
                <small>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
              src="https://salimaskitchen.com/wp-content/uploads/2023/08/DSC01303.jpg"
              className="card-img-top"
              style={{ width: "100%", height: "18rem", objectFit: "cover" }}
              alt="..."
            />
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">Ikinamada</h5>
                <h5 className="card-title" style={{ color: "#e9762b" }}>
                  <strong>₱59</strong>
                </h5>
              </div>
              <p className="card-text">
                <small>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
