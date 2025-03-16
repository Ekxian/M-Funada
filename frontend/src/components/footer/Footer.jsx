import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll"; // react-scroll Link
import { Link as RouterLink, useLocation } from "react-router-dom";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

const Footer = () => {
  const navigate = useNavigate();
  const toHomeRoute = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };
  const toMenuRoute = () => {
    navigate("mfunada/menu");
    window.scrollTo(0, 0);
  };
  const toAboutUsRoute = () => {
    navigate("mfunada/about-us");
    window.scrollTo(0, 0);
  };
  const toFindUsRoute = () => {
    navigate("mfunada/about-us");
    window.scrollTo(0, 0);
  };

  const location = useLocation();
  const isHome = location.pathname === "/";

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black">
      <div className="container py-4">
        <div className="row">
          {/* First Column */}
          <div className="col-lg-4 col-md-6 col-12 pt-5 pb-5">
            <h3 style={{ color: "#E9762B" }}>
              <strong>M'Funada</strong>
            </h3>
            <p className="text-white">
              <small>Continue M’Funada 2025, all rights reserved</small>
            </p>
            <h3 className="mt-5" style={{ color: "#E9762B" }}>
              <strong>Follow us on</strong>
            </h3>
            <div className="d-flex gap-2">
              <a
                href="https://www.facebook.com/profile.php?id=61573713874153"
                target="_blank"
                className="text-decoration-none"
              >
                <div
                  className="bg-white rounded-circle d-flex justify-content-center align-items-center"
                  style={{ width: "25px", height: "25px" }}
                >
                  <FaFacebookF className="text-dark" />
                </div>
              </a>
              <div
                className="bg-white rounded-circle d-flex justify-content-center align-items-center"
                style={{ width: "25px", height: "25px" }}
              >
                <FaInstagram className="text-dark" />
              </div>
              <div
                className="bg-white rounded-circle d-flex justify-content-center align-items-center"
                style={{ width: "25px", height: "25px" }}
              >
                <FaTiktok className="text-dark" />
              </div>
            </div>
          </div>
          {/* Second Column */}
          <div className="col-lg-2 col-md-6 col-12 pt-5">
            <h3 style={{ color: "#E9762B" }}>
              <strong>Menu</strong>
            </h3>
            <p
              className="text-white"
              onClick={toHomeRoute}
              style={{ cursor: "pointer" }}
            >
              <small>Home</small>
            </p>
            <p
              className="text-white"
              onClick={toMenuRoute}
              style={{ cursor: "pointer" }}
            >
              <small>Menu</small>
            </p>
            <p
              className="text-white"
              onClick={toAboutUsRoute}
              style={{ cursor: "pointer" }}
            >
              <small>About Us</small>
            </p>
            <p className="text-white">
              {isHome ? (
                // If already on Home, use react-scroll to smooth scroll
                <ScrollLink
                  className="nav-link"
                  to="find-us"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  style={{ cursor: "pointer" }}
                >
                  <small>Find Us</small>
                </ScrollLink>
              ) : (
                // If not on Home, navigate to Home with a hash so Home's useEffect will scroll
                <RouterLink
                  className="nav-link"
                  to="/#find-us"
                  style={{ cursor: "pointer" }}
                >
                  <small>Find Us</small>
                </RouterLink>
              )}
            </p>
          </div>
          {/* Third Column */}
          <div className="col-lg-3 col-md-6 col-12 pt-5">
            <h3 style={{ color: "#E9762B" }}>
              <strong>Contact</strong>
            </h3>
            <p className="text-white">
              <small>+63-992 264 5378</small>
            </p>
            <p className="text-white">
              <small>mfunadaest2026@gmail.com</small>
            </p>
            <p className="text-white">
              <small>
                4000 - A Gen. T. de Leon Corner Policarpio, Valenzuela, 1442
                Metro Manila
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
