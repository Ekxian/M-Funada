import React, { useState, useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll"; // react-scroll Link

import "./navBar.css";
import { BiSolidBasket } from "react-icons/bi";

const NavBar = ({ cartCount }) => {
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
    <nav
      // className={`navbar-top navbar navbar-expand-lg w-100 mt-3 fixed-top ${
      //   scrolled ? "scrolled" : "bg-transparent"
      // }`} fixed-top

      className="navbar-top navbar navbar-expand-lg position-absolute fixed-top w-100 mt-3"
    >
      <div className="container py-1 px-5">
        <RouterLink className="navbar-brand" to="/">
          <h3 style={{ color: "#E9762B" }}>
            <strong>M'Funada</strong>
          </h3>
        </RouterLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-center">
            <li className="nav-item-css nav-item me-4">
              <RouterLink className="nav-link text-warning" to="/">
                Home
              </RouterLink>
            </li>
            <li className="nav-item-css nav-item me-4">
              <RouterLink className="nav-link text-warning" to="/mfunada/menu">
                Menu
              </RouterLink>
            </li>
            <li className="nav-item-css nav-item me-4">
              <RouterLink
                className="nav-link text-warning"
                to="/mfunada/about-us"
              >
                About Us
              </RouterLink>
            </li>
            <li className="nav-item-css nav-item me-4">
              {isHome ? (
                // If already on Home, use react-scroll to smooth scroll
                <ScrollLink
                  className="nav-link text-warning"
                  to="find-us"
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  Find Us
                </ScrollLink>
              ) : (
                // If not on Home, navigate to Home with a hash so Home's useEffect will scroll
                <RouterLink className="nav-link text-warning" to="/#find-us">
                  Find Us
                </RouterLink>
              )}
            </li>
          </ul>
          <RouterLink to="/mfunada/orders">
            <button
              className="btn-order btn rounded-pill position-relative"
              type="button"
            >
              <div className="btn-text d-flex align-items-center mx-1">
                <BiSolidBasket className="fs-4 me-2" />
                Orders
                {cartCount > 0 && (
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {cartCount}
                  </span>
                )}
              </div>
              {/* Display the cart count as a badge */}
            </button>
          </RouterLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
