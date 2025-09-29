import React from "react";
import "./Onama.css";
import about_slika from "../../assets/about_slika.jpg";
import play_button from "../../assets/play-button.png";

const Onama = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_slika} alt="" className="about-img" />
        <img src={play_button} alt="" className="play-button" />
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
import "./Onama.css";

export default Onama;
