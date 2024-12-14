// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/homePage/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from "./components/homePage/HeroSection";
import Services from "./components/homePage/Services";
import BestSellers from "./components/homePage/BestSellers";
import AboutUs from "./components/homePage/AboutUs";
import MoonBanner from "./assets/images/moonDivider.png";
import CarouselComponent from "./components/homePage/OwlCarousel";
import ContactSection from "./components/homePage/contactus";
import Footer from "./components/homePage/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <HeroSection />
        <Services />
        <div className="mainSection text-center w-100 d-flex justify-center">
          <img className="object-contain" src={MoonBanner} alt={MoonBanner} />
        </div>
        <BestSellers />
        <AboutUs />
        <CarouselComponent />
        <ContactSection />
        <Footer />
      </Router>
    </>
  );
};
export default App;
