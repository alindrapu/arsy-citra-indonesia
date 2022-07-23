import React from "react";
import "./heroSlider.css";
import arrowLeft from "./icons/arrowLeft.svg";
import arrowRight from "./icons/arrowRight.svg";

function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClbuttonck={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img
        src={direction === "next" ? arrowRight : arrowLeft}
        alt="header img"
      />
    </button>
  );
}

export default BtnSlider;
