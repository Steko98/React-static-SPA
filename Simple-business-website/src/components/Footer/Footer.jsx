import React from "react";
import "./Footer.css";

const Footer = () => {
  function godina() {
    const pocetna = 2025;
    const trenutna = new Date().getFullYear();
    if (pocetna === trenutna) {
      return trenutna;
    }
    return pocetna + " - " + trenutna;
  }

  return (
    <div className="footer">
      <p>&copy; {godina()} Hortikultura Marek. All rights reserved.</p>
    </div>
  );
};

export default Footer;
