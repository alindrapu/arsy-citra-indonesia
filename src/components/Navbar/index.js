import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import "../../styles/main.css";
import { Link } from "react-scroll";

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
        <Link activeClass="active" smooth spy to="home">
          Home
        </Link>
        <Link activeClass="active" smooth spy to="about-us">
          About Us
        </Link>
        <Link activeClass="active" smooth spy to="scope">
          Scope
        </Link>
        <Link activeClass="active" smooth spy to="contact-us">
          Contact Us
        </Link>
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
