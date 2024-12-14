// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./ContactSection.css";
import DiceImg from "../../assets/images/dice.png";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add API call or form processing logic here
  };

  return (
    <section className="main-contact-form mainSection">
      <div className="container">
        <h1 className="text-5xl font-bold text-center mb-8">Contact Us</h1>
        <div className="contactDetails">
          <div className="row">
            <div className="col-md-6 text-center">
              <h2 className="card-title font-bold text-xl">Contact Details</h2>
              <ul className="footer-contact contact-content mt-3">
                <li className="justify-center">
                  {/* <strong>Call Us:</strong> */}
                  <a href="tel:+977-9841234567">+977-9841234567</a>
                </li>
                <li className="justify-center">
                  {/* <strong>Our Mail:</strong> */}
                  <a href="mailto:yetahamro@email.com">yetahamro@email.com</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 text-center">
              <h2 className="card-title font-bold text-xl">Business Hours</h2>
              <ul className="footer-contact contact-content mt-3">
                <li className="justify-center">
                    {/* <strong>Our Timing: </strong> */}
                  <a href="#">
                  Mon - Sun : 10:00 AM - 07:00 PM
                  24 HRS  on Booking
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="contact-div">
              {/* <div className="sec-title">
                <span className="sec-title__tagline">Connect with us.</span>
                <h2 className="sec-title__title mb-3">
                  Love to hear from you!
                </h2>
              </div> */}
              <img src={DiceImg} alt="Contact Us" className="img-fluid" />
            </div>
          </div>

          <div className="col-md-6">
            <form onSubmit={handleSubmit} className="contact-form">
              <fieldset>
                {/* <legend className="frm_screen_reader">Contact Us</legend> */}

                <div className="form-group">
                  {/* <label htmlFor="fullName">Full Name *</label> */}
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  {/* <label htmlFor="email">Email *</label> */}
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  {/* <label htmlFor="phone">Phone *</label> */}
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  {/* <label htmlFor="subject">Subject *</label> */}
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  {/* <label htmlFor="message">Message</label> */}
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button className="bg-[#462670] text-white font-bold py-2 px-6 rounded-full  mx-auto hover:bg-[#5b3a8f]">
                  Submit Now
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
