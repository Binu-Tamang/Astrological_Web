import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Offcanvas } from "react-bootstrap";
import facebookIcon from "../assets/icons/Facebook.png";
import linkedinIcon from "../assets/icons/Linkedin.png";
import instagramIcon from "../assets/icons/Instagram.png";
import twitterIcon from "../assets/icons/TwitterX.png";
import mapIcon from "../assets/icons/GoogleMaps.png";
import emailIcon from "../assets/icons/Email.png";
import userIcon from "../assets/icons/user.png";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header>
     <div className="mainHead">
     <div className="container-fluid">
        <div className="row p-3">
          {/* Left Column */}
          <div className="col-md-6 text-white p-2">
            <div className="socialIconBox">
              <ul className="list-unstyled socialIcons d-flex m-0">
                <li>
                  <img src={facebookIcon} alt="Facebook" className="img-fluid" />
                </li>
                <li>
                  <img src={linkedinIcon} alt="LinkedIn" className="img-fluid" />
                </li>
                <li>
                  <img src={instagramIcon} alt="Instagram" className="img-fluid" />
                </li>
                <li>
                  <img src={twitterIcon} alt="Twitter" className="img-fluid" />
                </li>
                <li>
                  <img src={mapIcon} alt="Google Maps" className="img-fluid" />
                </li>
                <li>
                  <img src={emailIcon} alt="Email" className="img-fluid" />
                  <a
                    className="text-white px-2"
                    href="mailto:ouremail@emailus.com"
                  >
                    ouremail@emailus.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-6 p-2 d-flex justify-content-end">
            <div className="loginBox">
              <ul className="list-unstyled d-flex gap-2 m-0">
                <li>
                  <img src={userIcon} alt="User Icon" className="img-fluid px-2" />
                  <a href="#" className="text-white">
                    Log In
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Sign In
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Navbar with Button to Open Offcanvas */}
        <nav className="navbar navbar-dark">
          <div className="container-fluid">
            <div className="d-flex justify-content-start">
              <button
                className="btn btn-dark"
                onClick={handleShow}
                aria-controls="offcanvasMenu"
                aria-expanded={show}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <ul className="navbar-brand m-0 d-flex gap-3">
                <li>
                  <a className="text-white" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="text-white" href="#">
                    Services
                  </a>
                </li>
                <li>
                  <a className="text-white" href="#">
                    Best Seller
                  </a>
                </li>
                <li>
                  <a className="text-white" href="#">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Offcanvas Menu */}
        <Offcanvas show={show} onHide={handleClose} placement="start">
          <Offcanvas.Header closeButton>
            {/* <Offcanvas.Title>Menu</Offcanvas.Title> */}
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link text-dark">
                  <i className="bi bi-house-door"></i> Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link text-dark">
                  <i className="bi bi-heart"></i> Personalized Recommendation
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link text-dark">
                  <i className="bi bi-building"></i> Venue Booking
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link text-dark">
                  <i className="bi bi-person"></i> Pandit Booking
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link text-dark">
                  <i className="bi bi-person"></i> Vastu Detection
                </a>
              </li>
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
     </div>
    </header>
  );
};

export default Header;
