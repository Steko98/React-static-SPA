import React from "react";
import "./Usluge.css";
import usluga_1 from "../../assets/usluga_1.jpg";
import usluga_2 from "../../assets/usluga_2.jpg";
import usluga_3 from "../../assets/usluga_3.jpg";
import usluga_4 from "../../assets/usluga_4.jpg";
import usluga_1_icon from "../../assets/usluga_1_icon.png";
import usluga_2_icon from "../../assets/usluga_2_icon.png";
import usluga_3_icon from "../../assets/usluga_3_icon.png";
import usluga_4_icon from "../../assets/usluga_4_icon.png";

const Usluge = () => {
  return (
    <div className="usluge">
      <div className="usluga">
        <img src={usluga_1} alt="weed trimming" />
        <div className="caption">
          <img src={usluga_1_icon} alt="" />
          <p>Košnja trave</p>
        </div>
      </div>
      <div className="usluga">
        <img src={usluga_2} alt="trimmed hedge" />
        <div className="caption">
          <img src={usluga_2_icon} alt="" />
          <p>Šišanje živice</p>
        </div>
      </div>
      <div className="usluga">
        <img src={usluga_3} alt="cutting down a tree" />
        <div className="caption">
          <img src={usluga_3_icon} alt="" />
          <p>Rušenje drveća</p>
        </div>
      </div>
      <div className="usluga">
        <img src={usluga_4} alt="overgrown yard" />
        <div className="caption">
          <img src={usluga_4_icon} alt="" />
          <p>Krčenje parcela</p>
        </div>
      </div>
    </div>
  );
};

export default Usluge;
