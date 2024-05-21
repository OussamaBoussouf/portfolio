import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft,  ChevronRight } from 'lucide-react';




import Slider from "react-slick";
import "./slider.css";

function ResponsiveSlider({ children }) {
  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  function SampleNextArrow() {
    return (
      <button
        className="next-slider"
        onClick={next}
      >
       <ChevronRight color="white"/>
      </button>
    );
  }

  function SamplePrevArrow() {
    return (
      <button
        className="previous-slider"
        onClick={previous}
      >
        <ChevronLeft color="white"/>
      </button>
    );
  }

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
        className="slider__parent"
      >
        {children}
      </Slider>
    </div>
  );
}

export default ResponsiveSlider;
