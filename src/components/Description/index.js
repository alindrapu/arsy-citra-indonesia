import { motion } from "framer-motion";
import React from "react";
import logoBlack from "../../assets/img/logoBlack.png";
import "./description.css";

const Description = () => {
  return (
    <motion.div className="container-description">
      <img src={logoBlack} alt="desc-logo" />
    </motion.div>
  );
};

export default Description;
