import React from "react";
import panditImg from "../assets/images/panditji.jpg";
import vastuImg from "../assets/images/VastuDetection.jpg";
import venueImg from "../assets/images/VenueBooking.png";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Pandit Booking",
      description:
        "AstroTalk is an online platform offering astrology consultations via chat or call, including horoscopes, tarot, and birth chart analysis for guidance on love, career, and more.",
      image: panditImg,
      buttonText: "Book Now",
      buttonLink: "#",
    },
    {
      id: 2,
      title: "Vastu Detection",
      description:
        "Vastu Detection is a process of analyzing a space's alignment with Vastu Shastra principles to enhance harmony and positive energy. It identifies structural imbalances and provides remedies for better health, prosperity, and well-being.",
      image: vastuImg,
      buttonText: "Enquire Now",
      buttonLink: "#",
    },
    {
      id: 3,
      title: "Venue Booking",
      description:
        "Venue booking is the process of reserving a location for events like weddings, parties, or conferences. It ensures the chosen space meets requirements for capacity, amenities, and budget.",
      image: venueImg,
      buttonText: "Book Now",
      buttonLink: "#",
    },
  ];

  return (
    <div className="container text-center my-5">
      <h2 className="mb-4">Services</h2>
      <div className="row">
        {services.map((service) => (
          <div className="col-md-4 mb-4" key={service.id}>
            <div className="card h-100 shadow">
              <img
                src={service.image}
                className="card-img-top"
                alt={service.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>
                <a
                  href={service.buttonLink}
                  className="btn btn-primary"
                  style={{ backgroundColor: "#6c63ff", border: "none" }}
                >
                  {service.buttonText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <hr />
        <p className="text-center">
          <span
            style={{
              display: "inline-block",
              margin: "0 auto",
              fontSize: "1.5rem",
            }}
          >
            ✦ ✶ ✦
          </span>
        </p>
      </div>
    </div>
  );
};

export default Services;
