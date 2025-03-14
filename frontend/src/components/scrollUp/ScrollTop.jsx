import React from "react";
import { FaArrowUp } from "react-icons/fa6";

const ScrollTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      //   onClick={handleScrollToTop}
      style={{
        width: "50px",
        height: "50px",
        position: "fixed",
        bottom: "20px",
        right: "20px",
        cursor: "pointer",
        background: "#E9762B",
        color: "#fff",
        padding: "10px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.53)",
      }}
      className="z-3 d-flex justify-content-center align-items-center rounded"
    >
      <FaArrowUp size={20} />
    </div>
  );
};

export default ScrollTop;
