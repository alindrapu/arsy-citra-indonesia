import { motion } from "framer-motion";
import React from "react";
import logoBlack from "../../assets/img/logoBlack.png";
import "./description.css";

const Description = () => {
  return (
    <div className="container-description" id="about-us">
      <img src={logoBlack} alt="desc-logo" />
      <p>
        Arsy Citra Indonesia is a consulting service company that has been
        established since 2017 in the city of Bandung, West Java. The services
        of this company focus on consulting services for feasibility studies,
        regional planning and urban design. <br />
        <br />
        Since our establishment until now, we always grow and move to provide
        the best service for our clients and partners. our clients range from
        government at the central, provincial and regional levels to private
        companies.
      </p>
    </div>
  );
};

export default Description;
