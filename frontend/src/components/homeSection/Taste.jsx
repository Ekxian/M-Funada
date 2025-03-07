import React from "react";

import "./taste.css";

const Taste = () => {
  return (
    <div className="container my-5">
      <div className="row gx-5 justify-content-center align-items-center">
        {/* Image Section */}
        <div className="col-12 col-lg-5 d-flex justify-content-center mb-4 mb-lg-0">
          <img
            src="https://foodthinkers.com.ph/wp-content/uploads/2021/03/P030321034930_1-1500x2000.jpg"
            alt="Delicious Food"
            style={{ width: "100%", maxWidth: "400px", height: "400px" }}
          />
        </div>

        {/* Text Section */}
        <div className="col-12 col-lg-5 text-center text-lg-start">
          <h1>
            <strong>
              The <span style={{ color: "#E9762B" }}>Taste</span> That <br />
              You <span style={{ color: "#E9762B" }}>Need.</span>
            </strong>
          </h1>
          <p className="w-100 w-lg-75 mx-auto">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Lacus nunc est
            volutpat nisl suscipit hendrerit ultricies. Condimentum euismod nibh
            efficitur; morbi sagittis scelerisque. Mus tempor curabitur finibus
            efficitur etiam morbi pretium. Id gravida cras, habitasse leo sem
            sociosqu. Duis dictum semper lacinia nisi facilisi; porta vulputate.
          </p>

          <button className="btn-about-us btn rounded-pill px-4 text-white">
            More About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Taste;
