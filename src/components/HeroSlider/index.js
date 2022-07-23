import "./heroSlider.css";
import sliderImages from "./sliderImages";
import { useEffect, useState } from "react";
//eslint-disable-next-line
import BtnSlider from "./BtnSlider";
// import { Fade } from "react-reveal/Fade";

function HeroSlider() {
  const [slideIndex, setSlideIndex] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  });

  // next button
  const nextSlide = () => {
    if (slideIndex !== sliderImages.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === sliderImages.length) {
      setSlideIndex(1);
    }
  };
  // prev button
  //eslint-disable-next-line
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(sliderImages.length);
    }
  };

  return (
    <div className="container-slider" id="home">
      {sliderImages.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <img
              src={process.env.PUBLIC_URL + `/imgs/slide${index + 1}.jpg`}
              alt="slides img"
            />
          </div>
        );
      })}
    </div>

    /* Button Slider if needed */
    /* <BtnSlider moveSlide={nextSlide} direction={"next"} />
    <BtnSlider moveSlide={prevSlide} direction={"prev"} /> */
  );
}

export default HeroSlider;
