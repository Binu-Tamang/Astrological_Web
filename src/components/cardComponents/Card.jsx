// eslint-disable-next-line no-unused-vars
import React from "react";
// import './Card.css';

const Card = ({ title, description, image, buttonText }) => {
  return (
    <div className="card text-center mt-4 max-w-sm overflow-hidden text-gray-800 p-4">
      {/* <img
        src={image}
        alt={title}
        className="card-image w-32 h-32 object-contain"
      /> */}

      <div className="flex justify-center">
        <img className="w-32 h-32 object-contain" src={image} alt={title} />
      </div>
      <div className="card-content text-center mt-4">
        <h2 className="card-title font-bold text-xl">{title}</h2>
        <p className="card-description text-gray-600 text-base my-4">
          {description}
        </p>
        <button className="bg-[#462670] text-white font-bold py-2 px-6 rounded-full  mx-auto hover:bg-[#5b3a8f]">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;

