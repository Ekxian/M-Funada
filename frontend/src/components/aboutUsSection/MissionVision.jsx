import React from "react";
import { motion } from "framer-motion";

const MissionVision = () => {
  return (
    <div className="container my-5">
      <div className="row g-3 d-flex justify-content-center">
        <motion.div
          className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center"
          initial={{ opacity: 0, translateY: 50 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="p-5 shadow d-flex flex-column justify-content-between content-box"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <h2>
              Our <span style={{ color: "#E9762B" }}>Mission</span>
            </h2>
            <p>
              <small>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Lacus nunc
                est volutpat nisl suscipit hendrerit ultricies. Condimentum
                euismod nibh efficitur; morbi sagittis scelerisque. Mus tempor
                curabitur finibus efficitur etiam morbi pretium. Id gravida
                cras, habitasse leo sem
              </small>
            </p>
            <p>
              <small>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Lacus nunc
                est volutpat nisl suscipit hendrerit ultricies. Condimentum
                euismod nibh efficitur; morbi sagittis scelerisque. Mus tempor
                curabitur finibus efficitur etiam morbi pretium. Id gravida
                cras, habitasse leo sem
              </small>
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center"
          initial={{ opacity: 0, translateY: 50 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="p-5 shadow d-flex flex-column justify-content-between content-box"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <h2>
              Our <span style={{ color: "#E9762B" }}>Vision</span>
            </h2>
            <p>
              <small>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Lacus nunc
                est volutpat nisl suscipit hendrerit ultricies. Condimentum
                euismod nibh efficitur; morbi sagittis scelerisque. Mus tempor
                curabitur finibus efficitur etiam morbi pretium. Id gravida
                cras, habitasse leo sem
              </small>
            </p>
            <p>
              <small>
                {/* Lorem ipsum odor amet, consectetuer adipiscing elit. Lacus nunc
                est volutpat nisl suscipit hendrerit ultricies. Condimentum
                euismod nibh efficitur; morbi sagittis scelerisque. Mus tempor
                curabitur finibus efficitur etiam morbi pretium. Id gravida
                cras, habitasse leo sem */}
              </small>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default MissionVision;
