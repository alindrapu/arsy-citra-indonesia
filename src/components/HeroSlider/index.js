import "./heroSlider.css";
import sliderImages from "./sliderImages";
import { useEffect, useState } from "react";
import BtnSlider from "./BtnSlider";

function HeroSlider() {
  const [slideIndex, setSlideIndex] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  });
  const nextSlide = () => {
    if (slideIndex !== sliderImages.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === sliderImages.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(sliderImages.length);
    }
  };

  return (
    <div className="container-slider">
      {sliderImages.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <img src={process.env.PUBLIC_URL + `/imgs/slide${index + 1}.jpg`} />
          </div>
        );
      })}

      {/* Button Slider if needed */}
      {/* <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} /> */}
    </div>
  );
}

export default HeroSlider;
