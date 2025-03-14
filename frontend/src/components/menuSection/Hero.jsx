import React from "react";

import "./hero.css";

const Hero = () => {
  return (
    <div>
      <div>
        <img
          src="https://media.istockphoto.com/id/521954007/photo/homemade-stuffed-chicken-empanadas.jpg?s=612x612&w=0&k=20&c=Qcnf7eqfyXdMexdLa5G78c1Jq0_D1j9FIUandKHQR0s="
          alt=""
          className="menu-image-height d-block w-100"
        />
        <div className="menu-image-overlay"></div> {/* Overlay div */}
      </div>

      <div className="container position-absolute top-50 start-50 translate-middle z-3 text-center">
        <div className="row text-white justify-content-center">
          <div className="col-12">
            <h1 className="display-1 fw-bold">
              Order <span style={{ color: "#E9762B" }}>Here</span>
            </h1>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mx-auto">
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Lacus nunc
              est volutpat nisl suscipit hendrerit ultricies. Condimentum
              euismod nibh efficitur; morbi sagittis scelerisque. Mus tempor
              curabitur finibus efficitur etiam morbi pretium. Id gravida cras,
              habitasse leo sem
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
