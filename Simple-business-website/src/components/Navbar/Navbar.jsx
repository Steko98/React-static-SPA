import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll";
import { RiMenu5Line } from "react-icons/ri";
import { TbPlant2 } from "react-icons/tb";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <div className="logo-head">

        <Link to="hero" smooth={true} offset={0} duration={500}>
          <svg className="logo" xmlns="http://www.w3.org/2000/svg" width="50" height="50" preserveAspectRatio="xMidYMid" version="1.0" viewBox="0 0 90 90" fill="none">
          <defs>
            <clipPath id="a"><path d="M37.5 163H64v45H37.5Zm0 0"/></clipPath>
            <clipPath id="b"><path d="M37.5 190H61v32H37.5Zm0 0"/></clipPath>
            <clipPath id="c"><path d="M42 212h16v16.527H42Zm0 0"/></clipPath>
            <clipPath id="d"><path d="M106 212h16v16.527h-16zm0 0"/></clipPath>
            <clipPath id="e"><path d="M103 190h23.75v32H103Zm0 0"/></clipPath>
            <clipPath id="f"><path d="M100 163h26.75v45H100Zm0 0"/></clipPath>
            <clipPath id="g"><path d="M43 146.777h72V215H43Zm0 0"/></clipPath>
          </defs>
          <path d="M0 0h450v450H0z"/>
          <g clip-path="url(#a)" transform="translate(-37.002 -142.5)"><path d="M37.523 189.863a44.3 44.3 0 0 1 9.829-26.48c7.656 14.129 13.746 28.668 16.636 44.05-7.168-8.097-15.933-14.035-26.465-17.57" fill="currentColor"/></g>
          <g clip-path="url(#b)" transform="translate(-37.002 -142.5)"><path d="M40.91 208.414a44.4 44.4 0 0 1-3.41-17.11q.001-.386.008-.773c9.89 8.008 17.93 17.93 23.387 30.531C54.684 216.45 48 212.25 40.91 208.415" fill="currentColor"/></g>
          <g clip-path="url(#c)" transform="translate(-37.002 -142.5)"><path d="M57.105 228.195a44.74 44.74 0 0 1-14.117-15.468c5.094 4.836 9.801 9.988 14.117 15.468" fill="currentColor"/></g>
          <g clip-path="url(#d)" transform="translate(-37.002 -142.5)"><path d="M121.016 212.727a44.7 44.7 0 0 1-14.114 15.468 145 145 0 0 1 14.114-15.468" fill="currentColor"/></g>
          <g clip-path="url(#e)" transform="translate(-37.002 -142.5)"><path d="M126.496 190.535q.007.382.008.77c0 6.062-1.215 11.84-3.41 17.11-7.09 3.835-13.774 8.034-19.984 12.648 5.457-12.602 13.496-22.524 23.386-30.528" fill="currentColor"/></g>
          <g clip-path="url(#f)" transform="translate(-37.002 -142.5)"><path d="M116.652 163.383a44.3 44.3 0 0 1 9.825 26.48c-10.532 3.535-19.293 9.473-26.461 17.57 2.89-15.382 8.98-29.921 16.636-44.05" fill="currentColor"/></g>
          <g clip-path="url(#g)" transform="translate(-37.002 -145.695)"><path d="M82 150c12.883 0 24.484 5.473 32.61 14.219-12.665 13.445-21.13 28.324-26.262 47.523-4.805-16.52-10.618-25.414-24.86-36.41 10.149 12.352 15.73 24.922 19.012 42.473-6.664-16.817-17.3-38.934-38.652-59.133 2.617 1.012 5.066 2.238 7.293 3.77C59.14 154.737 70.02 150 82 150" fill="currentColor"/></g>
        </svg>
        </Link>
        <div className="nav-naslov">
          <Link to="hero" smooth={true} offset={0} duration={500}>
            <h1>Marek<span className="subtitle"> - obrt za hortikulturu</span></h1>
          </Link>
        </div>
      </div>
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li><Link className="nav-link" to="about" smooth={true} offset={-160} duration={500}>O Nama</Link></li>
        <li><Link className="nav-link" to="usluge" smooth={true} offset={-250} duration={500}>Usluge</Link></li>
        <li><Link className="nav-link" to="galerija" smooth={true} offset={-205} duration={500}>Galerija</Link></li>
        <li><Link className="nav-link btn" to="kontakt" smooth={true} offset={-200} duration={500}>Kontakt</Link></li>
        <li>
          <a href="https://www.facebook.com/people/Marek-Hortikultura/61574599284137/#" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="social pulse-icon" size={32} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/marek_hortikultura/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social pulse-icon" size={32} />
          </a>
        </li>
      </ul>
      <RiMenu5Line size={32} className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
