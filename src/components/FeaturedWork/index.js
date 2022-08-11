import React, { Component } from "react";
import Slider from "react-slick";

const FeaturedWork = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };

  return (
    <div>
      <h1>Featured Work : </h1>
      <Slider {...settings}>
        <div>
          <img src="http://localhost:3000/imgs/f-1.jfif" />
        </div>
      </Slider>
    </div>
  );
};

export default FeaturedWork;
