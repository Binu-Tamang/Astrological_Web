// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "./components/homePage/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from "./components/homePage/HeroSection";
import Services from "./components/homePage/Services";
import BestSellers from "./components/homePage/BestSellers";
import AboutUs from "./components/homePage/AboutUs";
import MoonBanner from "./assets/images/moonDivider.png";
import CarouselComponent from "./components/homePage/OwlCarousel";
// import ContactUs from "./components/ContactUs/ContactUs";
// import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Services />
      <div className="mainSection text-center w-100 d-flex justify-center">
        <img className="object-contain" src={MoonBanner} alt={MoonBanner} />
      </div>
      <BestSellers />
      <AboutUs />
      <CarouselComponent />
      {/* <ContactUs /> */}
      {/* <Footer /> */}
    </>
  );
};
export default App;
