import React from "react";
import "./Galerija.css";
import galerija_1 from "../../assets/galerija_1.jpg";
import galerija_2 from "../../assets/galerija_2.jpg";
import galerija_3 from "../../assets/galerija_3.jpg";
import galerija_4 from "../../assets/galerija_4.jpg";
import galerija_5 from "../../assets/galerija_5.jpg";
import galerija_6 from "../../assets/galerija_6.jpg";
import galerija_7 from "../../assets/galerija_7.jpg";
import galerija_8 from "../../assets/galerija_8.jpg";
import galerija_9 from "../../assets/galerija_9.jpg";
import galerija_10 from "../../assets/galerija_10.jpg";
import { FaArrowRight } from "react-icons/fa";

const slike = [
  galerija_1,
  galerija_2,
  galerija_3,
  galerija_4,
  galerija_5,
  galerija_6,
  galerija_7,
  galerija_8,
  galerija_9,
  galerija_10,
];

const Galerija = () => {
  const getWidth = (index) => {
    const patternIndex = index % 5;

    if (patternIndex < 3) {
      return "item-width-3";
    } else {
      return "item-width-2";
    }
  };

  return (
    <div className="galerija">
      <div className="galerija-grid">
        {slike.map((src, index) => (
          <div key={index} className={`galerija-item ${getWidth(index)}`}>
            <div className="slika-container">
              <img src={src} alt="" className="galerija-slika" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galerija;
