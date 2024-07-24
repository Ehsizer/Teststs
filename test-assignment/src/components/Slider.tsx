import React, { useState } from 'react';
import './Slider.css';

const Slider = () => {
  const slides = [
    { id: 1, title: 'Slide 1', description: 'Description 1' },
    { id: 2, title: 'Slide 2', description: 'Description 2' },
    { id: 3, title: 'Slide 3', description: 'Description 3' },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slider">
      <button onClick={handlePrev}>&lt;</button>
      <div className="slide">
        <h2>{slides[currentSlide].title}</h2>
        <p>{slides[currentSlide].description}</p>
      </div>
      <button onClick={handleNext}>&gt;</button>
    </div>
  );
};

export default Slider;