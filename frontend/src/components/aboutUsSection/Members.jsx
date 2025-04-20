import React from "react";
import { motion } from "framer-motion";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

import "./members.css";

import ORG from "../../assets/ORG.png";

import MEM1 from "../../assets/MEM1.jpg";
import MEM2 from "../../assets/MEM2.jpg";
import MEM3 from "../../assets/MEM3.jpg";
import MEM4 from "../../assets/MEM4.jpg";
import MEM5 from "../../assets/MEM5.jpg";
import MEM6 from "../../assets/MEM6.jpg";
import MEM7 from "../../assets/MEM7.png";
import MEM8 from "../../assets/MEM8.jpg";
import MEM9 from "../../assets/MEM9.jpg";
import MEM10 from "../../assets/MEM10.jpg";

const Members = () => {
  const feasibMembers = [
    {
      id: 1,
      image: MEM1,
      name: "Angel Chloe Bardaje",
      role: "General Partner",
    },
    {
      id: 2,
      image: MEM2,
      name: "Mea Caberte",
      role: "Limited Partner",
    },
    {
      id: 3,
      image: MEM3,
      name: "Paula Marie Canlas",
      role: "General Partner",
    },
    {
      id: 4,
      image: MEM4,
      name: "Louis Eugene Clarinan",
      role: "Limited Partner",
    },
    {
      id: 5,
      image: MEM5,
      name: "Elisha Dela Cruz",
      role: "Managing Partner",
    },
    {
      id: 6,
      image: MEM6,
      name: "Christine May Hieto",
      role: "General Partner",
    },
    {
      id: 7,
      image: MEM7,
      name: "Mary Ayen Opague",
      role: "General Partner",
    },
    {
      id: 8,
      image: MEM8,
      name: "Christine Mae Ramirez",
      role: "General Partner",
    },
    {
      id: 9,
      image: MEM9,
      name: "John Mathew Soldevilla",
      role: "Limited Partner",
    },
    {
      id: 10,
      image: MEM10,
      name: "Jozyl Ucag",
      role: "General Partner",
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
        className="row justify-content-center"
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
            <div className="text-center">
              <PhotoProvider>
                <PhotoView src={member.image}>
                  <img
                    src={member.image}
                    className="card-img-top mx-auto"
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
            </div>
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
        className="d-flex justify-content-center"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <PhotoProvider>
          <PhotoView src={ORG}>
            <img className=" w-50" src={ORG} alt="" />
          </PhotoView>
        </PhotoProvider>
      </motion.div>
    </div>
  );
};

export default Members;
