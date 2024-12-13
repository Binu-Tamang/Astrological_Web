// eslint-disable-next-line no-unused-vars
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialImg from "../../assets/images/testimonialBg.png";
import "../../../src/index.css";

const CarouselComponent = () => {
  const arrowStyle = (direction) => ({
    position: "absolute",
    top: "50%",
    [direction]: "10px",
    transform: "translateY(-50%)",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
    border: "none",
    padding: "10px",
    fontSize: "35px",
    cursor: "pointer",
    zIndex: 1,
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <button style={arrowStyle("left")}>Prev</button>, // Custom Prev Button
    nextArrow: <button style={arrowStyle("right")}>Next</button>,
  };

  return (
    <div
      className="mainSection mt-5"
      style={{
        position: "relative",
        width: "100%",
        height: "750px",
        backgroundImage: `url(${TestimonialImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Slider
        {...settings}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <div className="main-testimonialBox">
          <div className="testi-Banner text-white">
            <h4 className="text-white text-6xl">Testimonials</h4>
            <p className="text-white">
              I had an incredible experience with Subha Labh. The astrologer
              provided deep insights into my career and personal life, helping
              me make important decisions with confidence. Highly recommended!
            </p>
            <strong>Binu T</strong>
          </div>
        </div>

        <div className="main-testimonialBox">
          <div className="testi-Banner text-white">
            <h4 className="text-white text-6xl">Testimonials</h4>
            <p className="text-white">
              I had an incredible experience with Subha Labh. The astrologer
              provided deep insights into my career and personal life, helping
              me make important decisions with confidence. Highly recommended!
            </p>
            <strong>Binu T</strong>
          </div>
        </div>

        <div className="main-testimonialBox">
          <div className="testi-Banner text-white">
            <h4 className="text-white text-6xl">Testimonials</h4>
            <p className="text-white">
              I had an incredible experience with Subha Labh. The astrologer
              provided deep insights into my career and personal life, helping
              me make important decisions with confidence. Highly recommended!
            </p>
            <strong>Binu T</strong>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default CarouselComponent;
