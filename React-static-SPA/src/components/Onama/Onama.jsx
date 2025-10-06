import React from "react";
import "./Onama.css";
import about_slika from "../../assets/about_slika.jpg";
import { FaRegPlayCircle } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

const Onama = ({setPlayState}) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_slika} alt="" className="about-img" />
        {/* <FaRegPlayCircle size={56} strokeWidth={15} stroke="#2C3930" className="play-button" onClick={()=>{
          setPlayState(true)
        }}/> */}
        <FaPlay size={64} className="play-button" onClick={()=>{
          setPlayState(true)
        }}/>
      </div>
      <div className="about-right">
        <h3>O Nama</h3>
        <h2>Obrt za hortikulturu Marek</h2>
        <p>
          Naš obrt nastao je iz ljubavi prema prirodi i želje da zelenilo unese
          ravnotežu i ljepotu u svakodnevni život. Bavimo se hortikulturom - od
          oblikovanja i uređenja vrtova, dvorišta i zelenih površina, do
          održavanja biljaka koje već imate. Svakom prostoru pristupamo
          individualno: osluškujemo vaše ideje, spajamo ih s našim znanjem i
          iskustvom te pretvaramo u mjesto gdje se rado boravi.
        </p>
        <p>
          Naša filozofija je jednostavna - priroda najbolje izgleda kada joj
          damo malo pažnje i stručne ruke. Zato radimo s puno strpljenja, znanja
          i poštovanja prema svakoj biljci.
        </p>
      </div>
    </div>
  );
};

export default Onama;
