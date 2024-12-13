import React from 'react';

const Card = ({ image, heading, description, buttonText, onButtonClick }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg text-gray-800 p-4">
      {/* Image Section */}
      {image && (
        <div className="flex justify-center">
          <img
            className="w-32 h-32 object-contain"
            src={image}
            alt={heading}
          />
        </div>
      )}
      {/* Text Content */}
      <div className="text-center mt-4">
        <h2 className="font-bold text-xl mb-2">{heading}</h2>
        <p className="text-gray-600 text-base mb-4">{description}</p>
        {/* Centered Button */}
        <button
          className="bg-[#462670] text-white font-bold py-2 px-6 rounded mx-auto hover:bg-[#5b3a8f]"
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
