import React from "react";
import { motion } from "framer-motion";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

import "./members.css";

const Members = () => {
  const feasibMembers = [
    {
      id: 1,
      image:
        "https://i.pinimg.com/736x/fe/ef/c3/feefc35e4614590ea6ee2c44252a14ae.jpg",
      name: "Mary Ayen G. Opague",
      role: "Thesis Leader",
    },
    {
      id: 2,
      image:
        "https://i.pinimg.com/736x/fe/ef/c3/feefc35e4614590ea6ee2c44252a14ae.jpg",
      name: "Mary Ayen G. Opague",
      role: "Thesis Leader",
    },
    {
      id: 3,
      image:
        "https://i.pinimg.com/736x/fe/ef/c3/feefc35e4614590ea6ee2c44252a14ae.jpg",
      name: "Mary Ayen G. Opague",
      role: "Thesis Leader",
    },
    {
      id: 4,
      image:
        "https://i.pinimg.com/736x/fe/ef/c3/feefc35e4614590ea6ee2c44252a14ae.jpg",
      name: "Mary Ayen G. Opague",
      role: "Thesis Leader",
    },
    {
      id: 5,
      image:
        "https://i.pinimg.com/736x/fe/ef/c3/feefc35e4614590ea6ee2c44252a14ae.jpg",
      name: "Mary Ayen G. Opague",
      role: "Thesis Leader",
    },
    {
      id: 6,
      image:
        "https://i.pinimg.com/736x/fe/ef/c3/feefc35e4614590ea6ee2c44252a14ae.jpg",
      name: "Mary Ayen G. Opague",
      role: "Thesis Leader",
    },
    {
      id: 7,
      image:
        "https://i.pinimg.com/736x/fe/ef/c3/feefc35e4614590ea6ee2c44252a14ae.jpg",
      name: "Mary Ayen G. Opague",
      role: "Thesis Leader",
    },
    {
      id: 8,
      image:
        "https://i.pinimg.com/736x/fe/ef/c3/feefc35e4614590ea6ee2c44252a14ae.jpg",
      name: "Mary Ayen G. Opague",
      role: "Thesis Leader",
    },
    {
      id: 9,
      image:
        "https://i.pinimg.com/736x/fe/ef/c3/feefc35e4614590ea6ee2c44252a14ae.jpg",
      name: "Mary Ayen G. Opague",
      role: "Thesis Leader",
    },
    {
      id: 10,
      image:
        "https://i.pinimg.com/736x/fe/ef/c3/feefc35e4614590ea6ee2c44252a14ae.jpg",
      name: "Mary Ayen G. Opague",
      role: "Thesis Leader",
    },
  ];

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
      <motion.div
        className="row justify-content-center mx-5"
        initial={{ opacity: 0, translateY: 50 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1 }}
      >
        {feasibMembers.map((member) => (
          <motion.div
            key={member.id}
            className="col-lg-3 col-md-6 col-sm-12"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <PhotoProvider>
              <PhotoView src={member.image}>
                <img
                  src={member.image}
                  className="card-img-top"
                  style={{
                    width: "14rem",
                    height: "14rem",
                    objectFit: "cover",
                  }}
                  alt="..."
                />
              </PhotoView>
            </PhotoProvider>
            <p className="" style={{ color: "#E9762B" }}>
              <strong>{member.name}</strong>
              <br />
              <small>{member.role}</small>
            </p>
          </motion.div>
        ))}
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
