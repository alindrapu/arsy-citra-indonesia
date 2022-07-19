import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import "../../styles/main.css";

const Navbar = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <span>
        <img src={require("../../assets/img/blackLogo.png")} alt="Black Logo" />
      </span>
      <nav ref={navRef}>
        <a href="/">Home</a>
        <a href="/about-us">About Us</a>
        <a href="/scope">Scope</a>
        <a href="/contact-us">Contact Us</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
