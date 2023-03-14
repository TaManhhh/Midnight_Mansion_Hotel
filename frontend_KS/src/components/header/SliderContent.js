import React from "react";
import "./slider.css";
function SliderContent({ activeIndex, imageSlider }) {
  return (
    <div>
      {imageSlider.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slide.urls} alt="" />
          <div className="slide-text">{slide.img}</div>
          <div className="slide-title">{slide.title}</div>
        </div>
      ))}
    </div>
  );
}

export default SliderContent;
