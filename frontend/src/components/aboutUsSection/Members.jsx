import React from "react";
import { motion } from "framer-motion";

import "./members.css";

const Members = () => {
  return (
    <div className="container my-5">
      <motion.h1
        className="text-center mb-5"
        initial={{ opacity: 0, translateY: 50 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1 }}
      >
        <strong>
          Meet Our <span style={{ color: "#E9762B" }}>Team</span>
        </strong>
      </motion.h1>

      {/* row 1 */}
      <motion.div
        className="row d-flex justify-content-center text-center mx-5"
        initial={{ opacity: 0, translateY: 50 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1 }}
      >
        {/* member 1 */}
        <motion.div
          className="col-lg-3 col-md-6 col-sm-12"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src="https://i.pinimg.com/736x/fe/ef/c3/feefc35e4614590ea6ee2c44252a14ae.jpg"
            className="card-img-top"
            style={{ width: "14rem", height: "14rem", objectFit: "cover" }}
            alt="..."
          />
          <p className="" style={{ color: "#E9762B" }}>
            <strong>Mary Ayen G. Opague</strong>
            <br />
            <small>Thesis Leader</small>
          </p>
        </motion.div>
        <motion.div
          className="col-lg-3 col-md-6 col-sm-12"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src="https://i.pinimg.com/736x/fe/ef/c3/feefc35e4614590ea6ee2c44252a14ae.jpg"
            className="card-img-top"
            style={{ width: "14rem", height: "14rem", objectFit: "cover" }}
            alt="..."
          />
          <p style={{ color: "#E9762B" }}>
            <strong>Mary Ayen G. Opague</strong>
            <br />
            <small>Thesis Leader</small>
          </p>
        </motion.div>
        <motion.div
          className="col-lg-3 col-md-6 col-sm-12"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src="https://i.pinimg.com/736x/fe/ef/c3/feefc35e4614590ea6ee2c44252a14ae.jpg"
            className="card-img-top"
            style={{ width: "14rem", height: "14rem", objectFit: "cover" }}
            alt="..."
          />
          <p style={{ color: "#E9762B" }}>
            <strong>Mary Ayen G. Opague</strong>
            <br />
            <small>Thesis Leader</small>
          </p>
        </motion.div>
        <motion.div
          className="col-lg-3 col-md-6 col-sm-12"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src="https://i.pinimg.com/736x/fe/ef/c3/feefc35e4614590ea6ee2c44252a14ae.jpg"
            className="card-img-top"
            style={{ width: "14rem", height: "14rem", objectFit: "cover" }}
            alt="..."
          />
          <p style={{ color: "#E9762B" }}>
            <strong>Mary Ayen G. Opague</strong>
            <br />
            <small>Thesis Leader</small>
          </p>
        </motion.div>
      </motion.div>

      {/*  row 2 */}
      <motion.div
        className="row d-flex justify-content-center text-center lg-px-5 mx-5"
        initial={{ opacity: 0, translateY: 50 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1 }}
      >
        {/* member 1 */}
        <motion.div
          className="col-lg-3 col-md-6 col-sm-12"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src="https://i.pinimg.com/736x/fe/ef/c3/feefc35e4614590ea6ee2c44252a14ae.jpg"
            className="card-img-top"
            style={{ width: "14rem", height: "14rem", objectFit: "cover" }}
            alt="..."
          />
          <p className="" style={{ color: "#E9762B" }}>
            <strong>Mary Ayen G. Opague</strong>
            <br />
            <small>Thesis Leader</small>
          </p>
        </motion.div>
        <motion.div
          className="col-lg-3 col-md-6 col-sm-12"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src="https://i.pinimg.com/736x/fe/ef/c3/feefc35e4614590ea6ee2c44252a14ae.jpg"
            className="card-img-top"
            style={{ width: "14rem", height: "14rem", objectFit: "cover" }}
            alt="..."
          />
          <p style={{ color: "#E9762B" }}>
            <strong>Mary Ayen G. Opague</strong>
            <br />
            <small>Thesis Leader</small>
          </p>
        </motion.div>
        <motion.div
          className="col-lg-3 col-md-6 col-sm-12"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src="https://i.pinimg.com/736x/fe/ef/c3/feefc35e4614590ea6ee2c44252a14ae.jpg"
            className="card-img-top"
            style={{ width: "14rem", height: "14rem", objectFit: "cover" }}
            alt="..."
          />
          <p style={{ color: "#E9762B" }}>
            <strong>Mary Ayen G. Opague</strong>
            <br />
            <small>Thesis Leader</small>
          </p>
        </motion.div>
        <motion.div
          className="col-lg-3 col-md-6 col-sm-12"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src="https://i.pinimg.com/736x/fe/ef/c3/feefc35e4614590ea6ee2c44252a14ae.jpg"
            className="card-img-top"
            style={{ width: "14rem", height: "14rem", objectFit: "cover" }}
            alt="..."
          />
          <p style={{ color: "#E9762B" }}>
            <strong>Mary Ayen G. Opague</strong>
            <br />
            <small>Thesis Leader</small>
          </p>
        </motion.div>
      </motion.div>

      {/*  row 3 */}
      <motion.div
        className="row d-flex justify-content-center text-center lg-px-5 mx-5"
        initial={{ opacity: 0, translateY: 50 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1 }}
      >
        {/* member 1 */}
        <motion.div
          className="col-lg-3 col-md-6 col-sm-12"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src="https://i.pinimg.com/736x/fe/ef/c3/feefc35e4614590ea6ee2c44252a14ae.jpg"
            className="card-img-top"
            style={{ width: "14rem", height: "14rem", objectFit: "cover" }}
            alt="..."
          />
          <p style={{ color: "#E9762B" }}>
            <strong>Mary Ayen G. Opague</strong>
            <br />
            <small>Thesis Leader</small>
          </p>
        </motion.div>
        <motion.div
          className="col-lg-3 col-md-6 col-sm-12"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src="https://i.pinimg.com/736x/fe/ef/c3/feefc35e4614590ea6ee2c44252a14ae.jpg"
            className="card-img-top"
            style={{ width: "14rem", height: "14rem", objectFit: "cover" }}
            alt="..."
          />
          <p style={{ color: "#E9762B" }}>
            <strong>Mary Ayen G. Opague</strong>
            <br />
            <small>Thesis Leader</small>
          </p>
        </motion.div>
      </motion.div>

      {/*ORG CHARTS */}
      <motion.h1
        className="text-center my-5"
        initial={{ opacity: 0, translateY: 50 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1 }}
      >
        <strong>
          <span style={{ color: "#E9762B" }}>Organizational</span> Chart
        </strong>
      </motion.h1>

      <motion.div
        className="d-flex justify-content-center border"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <img
          className=" w-50"
          src="https://www.liveabout.com/thmb/A6M9w9-iPwNGI7_s3urch4gaAYY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-514319435-569fda2c5f9b58eba4ad79db.jpg"
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default Members;
