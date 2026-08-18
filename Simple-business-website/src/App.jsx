import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Usluge from "./components/Usluge/Usluge";
import Naslov from "./components/Naslov/Naslov";
import Onama from "./components/Onama/Onama";
import Galerija from "./components/Galerija/Galerija";
import Kontakt from "./components/Kontakt/Kontakt";
import Footer from "./components/Footer/Footer";
import Videoplayer from "./components/Videoplayer/Videoplayer";

const App = () => {

  const [playState, setPlayState] = useState(false);



  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Onama setPlayState={setPlayState}/>

        <hr />

        <Naslov subTitle="Usluge" title="Što nudimo?" />
        <Usluge />

        <hr />

        <Naslov subTitle="Pogledajte" title="Galerija" />
        <Galerija />

        <hr />

        <Naslov subTitle="kontakt" title="Kako do nas?" />
        <Kontakt />
      </div>
      <Footer />
      <Videoplayer playState={playState} setPlayState={setPlayState}/>
    </div>
  );
};

export default App;
