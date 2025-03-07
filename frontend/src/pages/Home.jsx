import React, { useEffect } from "react";
import { Element, scroller } from "react-scroll";
import { useLocation } from "react-router-dom";

import NavBar from "../components/navBar/NavBar";
import ImageCarousel from "../components/imageCarousel/ImageCarousel";
import Footer from "../components/footer/Footer";

import { MdOutlineRestaurantMenu } from "react-icons/md";

import "./css/home.css";
import Delivered from "../components/homeSection/Delivered";
import Order from "../components/homeSection/Order";
import Taste from "../components/homeSection/Taste";
import Mapa from "../components/homeSection/Mapa";

const Home = () => {
  // If navigating from another page with a hash like "#find-us"
  useEffect(() => {
    if (location.hash === "#find-us") {
      // Use scroller from react-scroll to scroll smoothly
      scroller.scrollTo("find-us", {
        duration: 500,
        delay: 100,
        smooth: true,
        offset: -70, // adjust for fixed headers if needed
      });
    }
  }, [location]);
  return (
    <div>
      <NavBar />
      <div className="position-relative">
        <ImageCarousel />
        <div
          className="container position-absolute top-50 start-50 translate-middle z-3"
          // style={{
          //   left: "7rem", // Adjust this to align with the navbar
          //   top: "20rem", // Adjust this to position below the navbar
          // }}
        >
          <div className="row text-white">
            <h1 className="display-4 fw-bold">Order your</h1>
            <h1 className="display-4 fw-bold">
              <span className="text-warning">favorite food</span> here.
            </h1>
            <p className="col-lg-5 col-md-6 col-sm-12">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Lacus nunc
              est volutpat nisl suscipit hendrerit ultricies. Condimentum
              euismod nibh efficitur; morbi sagittis scelerisque. Mus tempor
              curabitur finibus efficitur etiam morbi pretium. Id gravida cras,
              habitasse leo sem
            </p>
          </div>

          <button
            type="button"
            className="btn-menu btn rounded-pill text-white"
            style={{ width: "150px" }}
          >
            <div className="btn-text d-flex align-items-center justify-content-center">
              <MdOutlineRestaurantMenu className="fs-4 me-2" />
              View Menu
            </div>
          </button>
        </div>
      </div>

      <Delivered />
      <Order />
      <Taste />

      {/* Fin Us Section here is the Mapa */}
      <Element id="find-us">
        <Mapa />
      </Element>

      <Footer />
    </div>
  );
};

export default Home;
