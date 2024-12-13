import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles

const AboutUs = () => {
  return (
    <div className="container py-5">
      {/* Title Section */}
      <div className="text-center mb-4">
        <h1 className="fw-bold">About Us</h1>
      </div>

      {/* Content Section */}
      <div className="row justify-content-center align-items-center">
        {/* Image Section */}
        <div className="col-md-6 text-center">
          <img
            src="../src/assets/images/about.png" 
            alt="Astrology Chart and Tools"
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Text Section */}
        <div className="col-md-8 mt-4 text-center">
          <p className="fs-5 text-muted">
            At Subha Labh, we are dedicated to providing expert services in
            astrology, vastu, and wellness. Our team of experienced
            professionals offers personalized consultations, aiming to guide
            you toward a harmonious and prosperous life. Whether you're seeking
            insights through astrology, enhancing your living space with vastu
            solutions, or exploring the power of gemstones, we are here to
            support you on your journey. Trust us to help you make informed
            decisions and achieve a balanced, fulfilling life.
          </p>
        </div>
      </div>

    </div>
  );
};

export default AboutUs;
