import React from "react";
import "./Kontakt.css";
import mail_icon from "../../assets/mail.png";
import email_icon from "../../assets/email.png";
import call_icon from "../../assets/call.png";
import address_icon from "../../assets/address.png";
import send_icon from "../../assets/message.png";

const Kontakt = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Slanje....");
    const formData = new FormData(event.target);

    formData.append("access_key", "103e7986-753a-415a-9797-6e57a6f2e23f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Poruka uspješno poslana!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="kontakt">
      <div className="kontakt-col">
        <h3>
          Javite nam se! <img src={mail_icon} alt="" />
        </h3>
        <p>
          Svaki vrt i svaka zelena površina imaju svoju priču - mi smo ovdje da
          ju pomognemo ispričati na najljepši način. Ako imate ideju kako biste
          htjeli urediti svoj prostor, želite savjet ili jednostavno trebate
          nekoga tko će preuzeti brigu o vašem zelenilu, slobodno nam se javite.
          Rado ćemo saslušati Vaše želje i ponuditi rješenja koja najbolje
          odgovaraju upravo Vama.
        </p>
        <ul>
          <li>
            <img src={email_icon} alt="" />
            marekhortikultura@gmail.com
          </li>
          <li>
            <img src={call_icon} alt="" />
            +385915931582
          </li>
          <li>
            <img src={address_icon} alt="" />
            Ulica Fikcijska 5 <br />
            Čepin 31431, Hrvatska
          </li>
        </ul>
      </div>
      <div className="kontakt-col">
        <form onSubmit={onSubmit}>
          <label>Ime i prezime</label>
          <input type="text" name="name" placeholder="Vaše ime" required />

          <label></label>
          <input
            type="email"
            name="email"
            placeholder="Vaša email adresa"
            required
          />

          <label>Kontakt broj</label>
          <input type="tel" name="phone" placeholder="Vaš kontakt broj" />

          <label>Poruka</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Pišite nam"
            required
          ></textarea>

          <button className="btn dark-btn">
            Pošalji <img src={send_icon} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Kontakt;
