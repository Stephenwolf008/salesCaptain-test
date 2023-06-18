import React, { useState, useEffect } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [images]);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative flex items-center justify-center">
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 px-2 py-1 bg-gray-500 text-white rounded"
        onClick={handlePrevClick}
      >
        <FiArrowLeft />
      </button>
      <img
        className="px-12 py-12 shadow-2xl rounded-full"
        src={images[currentImageIndex]}
        alt="Carousel"
      />
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 px-2 py-1 bg-gray-500 text-white rounded"
        onClick={handleNextClick}
      >
        <FiArrowRight />
      </button>
    </div>
  );
};

export default Carousel;
