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
        <h2>Uređenje okućnice</h2>
        <p>
          Now that we know who you are, I know who I am. I'm not a mistake! It
          all makes sense! In a comic, you know how you can tell who the
          arch-villain's going to be? He's the exact opposite of the hero. And
          most times they're friends, like you and me! I should've known way
          back when... You know why, David? Because of the kids. They called me
          Mr Glass.
        </p>
        <p>
          Well, the way they make shows is, they make one show. That show's
          called a pilot. Then they show that show to the people who make shows,
          and on the strength of that one show they decide if they're going to
          make more shows. Some pilots get picked and become television
          programs. Some don't, become nothing. She starred in one of the ones
          that became nothing.
        </p>
        <p>
          You think water moves fast? You should see ice. It moves like it has a
          mind. Like it knows it killed the world once and got a taste for
          murder. After the avalanche, it took us a week to climb out. Now, I
          don't know exactly when we turned on each other, but I know that seven
          of us survived the slide... and only five made it out. Now we took an
          oath, that I'm breaking now. We said we'd say it was the snow that
          killed the other two, but it wasn't. Nature is lethal but it doesn't
          hold a candle to man.
        </p>
      </div>
    </div>
  );
};
import "./Onama.css";

export default Onama;
