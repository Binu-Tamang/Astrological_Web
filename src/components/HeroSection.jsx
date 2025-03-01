// eslint-disable-next-line no-unused-vars
import React from "react";
import mainBanner from "../assets/images/Backgroung-Image.png";
import bannerBg from "../assets/images/Background-Gradient.png";

function HeroSection() {
  return (
    <>
      <div className="banner-slider">
        <div className="slide">
          <img src={bannerBg} alt="Gradient Background" />
        </div>
        <div className="slide overlay">
          <img src={mainBanner} alt="Astrology Background" />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
