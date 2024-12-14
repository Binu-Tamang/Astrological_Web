import React from "react";
import facebookIcon from "../../assets/icons/Facebook.png";
import linkedinIcon from "../../assets/icons/Linkedin.png";
import instagramIcon from "../../assets/icons/Instagram.png";
import twitterIcon from "../../assets/icons/TwitterX.png";
import mapIcon from "../../assets/icons/GoogleMaps.png";
import emailIcon from "../../assets/icons/Email.png";
import userIcon from "../../assets/icons/user.png";

const Footer = () => {
  return (
    <footer
      style={{
        // background: "linear-gradient(to right, #4facfe, #00f2fe)",
        background: "linear-gradient(to right, #000000, #9b59b6, #ff69b4)",
        padding: "10px",
      }}
    >
      <div className="container">
        {/* Scroll up button - Uncomment if needed */}
        {/* <div id="errorContainer">
        <button id="scrollToTopButton" title="Scroll to Top" style={{ display: 'inline-block' }}>
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      </div> */}

        <div className="footer-up py-4">
          <div className="row">
            {/* About Us Section */}
            <div className="col-md-4">
              <div className="footer-box">
                <h5 className="footer-h text-white pb-3">About Us</h5>
                <p className="text-white">
                  [Demo Company] is a trusted organization providing expert
                  services for various professional needs.
                </p>
                <div
                  className="social-icons"
                  style={{ display: "flex", gap: "10px", marginTop: "10px" }}
                >
                  <a href="#">
                    <img
                      src={facebookIcon}
                      alt="Facebook"
                      style={{ width: "25px" }}
                    />
                  </a>
                  <a href="#">
                    <img
                      src={linkedinIcon}
                      alt="LinkedIn"
                      style={{ width: "25px" }}
                    />
                  </a>
                  <a href="#">
                    <img
                      src={instagramIcon}
                      alt="Instagram"
                      style={{ width: "25px" }}
                    />
                  </a>
                  <a href="#">
                    <img
                      src={twitterIcon}
                      alt="Twitter"
                      style={{ width: "25px" }}
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="col-md-4">
              <div className="footer-box">
                <h5 className="footer-h text-white pb-3">Quick Links</h5>
                <ul className="imp-link">
                  <li>
                    <a href="#">
                      → 
                      Private Policy Links
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      → 
                      Our Services
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      → 
                      Our Gallery
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      → 
                      Our Testimonials
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      → 
                      About Us
                    </a>
                  </li>
                  <li>
                    <a target="_blank" rel="noopener noreferrer" href="#">
                      → 
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Connect With Us Section */}
            <div className="col-md-4">
              <div className="footer-box">
                <h5 className="footer-h text-white pb-3">Connect With Us</h5>
                <ul className="footer-contact">
                  <li>
                    <img
                      src={mapIcon}
                      alt="Map"
                      style={{ width: "20px", marginRight: "10px" }}
                    />
                    <a href="#">Nepal, Baneshor, Thapagau, Presidential Graduate School, Tin talla, 301</a>
                  </li>
                  <li>
                    <img
                      src={userIcon}
                      alt="User"
                      style={{ width: "20px", marginRight: "10px" }}
                    />
                    <a href="tel:+977-9841234567">+977-9841234567</a>
                  </li>
                  <li>
                    <img
                      src={emailIcon}
                      alt="Email"
                      style={{ width: "20px", marginRight: "10px" }}
                    />
                    <a href="mailto:yetahamro@email.com">yetahamro@email.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer text-center pt-2 border-t-2">
          <p className="text-white">
          ©Copyright 2024 - 2025. Celestial Astrology. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
