import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import "../../styles/main.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={scrolled ? "scrolled" : ""}>
      <span>
        <img
          src={
            scrolled
              ? require("../../assets/img/whiteLogo.png")
              : require("../../assets/img/blackLogo.png")
          }
          alt="Logo"
        />
      </span>
      <nav ref={navRef}>
        <Link activeClass="active" smooth spy to="home">
          Home
        </Link>
        <Link activeClass="active" smooth spy to="about-us">
          About Us
        </Link>
        <Link activeClass="active" smooth spy to="our-services">
          Our Services
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
