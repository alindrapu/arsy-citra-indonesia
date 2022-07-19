import "./heroSlider.css";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import sliderImages from "./sliderImages";
import { useState } from "react";

function HeroSlider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {};

  return (
    <div className="container-slider">
      {sliderImages.map((obj, index) => {
        return (
          <div className="slide">
            <img src={process.env.PUBLIC_URL + `/imgs/slide${index + 1}.jpg`} />
          </div>
        );
      })}
    </div>
  );
}

export default HeroSlider;
