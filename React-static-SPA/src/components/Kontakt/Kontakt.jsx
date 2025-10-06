import React from "react";
import "./Kontakt.css";
import mail_icon from "../../assets/mail.png";
import email_icon from "../../assets/email.png";
import call_icon from "../../assets/call.png";
import address_icon from "../../assets/address.png";
import send_icon from "../../assets/message.png";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { RiMailSendLine } from "react-icons/ri";
import { IoIosSend } from "react-icons/io";

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
          Javite nam se! <RiMailSendLine size={32} style={{marginLeft: 15, color: '#3F4F44'}}/>
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
            <IoIosMail size={32} className="contact-icons"/>
            marekhortikultura@gmail.com
          </li>
          <li>
            <FaPhoneAlt size={28} className="contact-icons"/>
            +385915931582
          </li>
          <li>
            <IoLocationSharp size={32} className="contact-icons"/>
            Ulica Fikcijska 5 <br />
            Čepin 31431, Hrvatska
          </li>
        </ul>
      </div>
      <div className="kontakt-col">
        <form onSubmit={onSubmit}>
          <label>Ime i prezime</label>
          <input type="text" name="name" placeholder="Vaše ime" required />

          <label>Email</label>
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
            Pošalji <IoIosSend size={20} style={{marginLeft: 10}}/>
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Kontakt;
