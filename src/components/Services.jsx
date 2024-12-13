import React from 'react';
import Card from './Card'; // Adjust the path if needed

const Services = () => {
  const servicesData = [
    {
      id: 1,
      image: '../src/assets/images/panditji.jpg', 
      heading: 'Pnadit Booking ',
      description: 'AstroTalk is an online platform offering astrology consultations via chat or call, including horoscopes, tarot, and birth chart analysis for guidance on love, career, and more.',
      buttonText: 'Book Now',
    },
    {
      id: 2,
      image: '../src/assets/images/VastuDetection.jpg', 
      heading: 'Vastu Detection',
      description: 'Vastu Detection is a process of analyzing a space alignment with Vastu Shastra principles to enhance harmony and positive energy. It identifies structural imbalances and provides remedies for better health, prosperity, and well-being.',
      buttonText: 'Enquiry now ',
    },
    {
      id: 3,
      image: '../src/assets/images/VenueBooking.png', 
      heading: 'Venue Booking',
      description: 'Venue Booking is the process of reserving a location for events like weddings, parties, or conferences. It ensures the chosen space meets requirements for capacity, amenities, and budget.',
      buttonText: 'Book Now',
    },
  ];

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {servicesData.map(service => (
          <Card
            key={service.id}
            image={service.image}
            heading={service.heading}
            description={service.description}
            buttonText={service.buttonText}
            onButtonClick={() => alert(`You clicked on ${service.heading}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
