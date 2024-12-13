import React from 'react';
import Card from './Card'; // Ensure the path to Card is correct

const BestSellers = () => {
  const bestSellersData = [
    {
      id: 1,
      image: '../src/assets/images/Panna Pic.jpg', 
      description: 'Panna, or Emerald, is a precious green gemstone associated with wisdom, creativity, and prosperity. Ruled by Mercury in astrology, it is believed to enhance communication skills, intellect, and emotional balance.',
      buttonText: 'Order Now',
    },
    {
      id: 2,
      image: '../src/assets/images/Pushparaj.jpg', 
      heading: 'Pushparaj',
      description: 'Pushparaj, also known as Yellow Topaz, is a gemstone associated with Jupiter in astrology. It symbolizes wealth, wisdom, and success, promoting mental clarity, confidence, and positive energy.',
      buttonText: 'Order Now ',
    },
    {
      id: 3,
      image: '../src/assets/images/Rudraksh.jpg', 
      heading: 'Rudrakhsya',
      description: 'Rudraksha is a sacred seed traditionally used in Hinduism for meditation and prayer. It is believed to have spiritual and healing properties, offering benefits such as mental peace, stress relief, and improved focus. Rudraksha is also considered to enhance the wearer’s connection to divine energies.',
      buttonText: 'Order Now',
    },
  ];

  return (
    <div className="p-6 bg-gray-100">
      {/* Image above the title */}
      <div className="flex justify-center mb-4">
        <img
          src="../src/assets/images/Divider.png" // Replace with the actual image URL or path
          alt="Best Sellers Banner"
          className="w-full max-w-4xl object-contain"
        />
      </div>
      {/* Section Title */}
      <h1 className="text-3xl font-bold text-center mb-8">Best Sellers</h1>
      {/* Best Sellers Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {bestSellersData.map(item => (
          <Card
            key={item.id}
            image={item.image}
            heading={item.heading}
            description={item.description}
            buttonText={item.buttonText}
            onButtonClick={() => alert(`You clicked on ${item.heading}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
