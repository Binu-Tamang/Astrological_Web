// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import BestSellers from "./components/BestSellers";
import AboutUs from "./components/AboutUs/AboutUs";;
// import Testimonials from "./components/Testimonials/Testimonials";
// import ContactUs from "./components/ContactUs/ContactUs";
// import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Services/>
      <BestSellers />
      <AboutUs />
      {/* <Testimonials /> */}
      {/* <ContactUs /> */}
      {/* <Footer /> */}
    </>
  );
};
export default App;
