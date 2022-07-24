import React from "react";
import "./HeaderImg.css";
import "animate.css";
import arsyHeader from "../../assets/img/arsyHeader.png";
const HeaderImg = () => {
  return (
    <div className="header-container">
      <img
        src={arsyHeader}
        alt="header"
        className="animate__animated animate__zoomIn"
      />
    </div>
  );
};

export default HeaderImg;
