import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

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
        opacity: isVisible ? 1 : 0, // Show/hide the button
        visibility: isVisible ? "visible" : "hidden",
        transition: "opacity 0.3s ease-in-out",
      }}
      className="z-3 d-flex justify-content-center align-items-center rounded"
    >
      <FaArrowUp size={20} />
    </div>
  );
};

export default ScrollTop;
