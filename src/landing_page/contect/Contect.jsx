import React from "react";
import "./Contect.css";
import phone from '../../assets/Social/phone.svg'
import mail from '../../assets/Social/mail.svg'
import location from '../../assets/Social/location.svg'
import github from '../../assets/Social/github.svg'
import linkedin from '../../assets/Social/linkedin.svg'
import twitter from '../../assets/Social/twitter.svg'
import instagram from '../../assets/Social/instagram.svg'





function Contect() {


  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "b95628ec-e8d3-4649-8adc-18072ba0c72e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert(res.message);
    }
  };

  return (
    <div id="contect" className="contect">
      <div className="contect-title">
        <h1>Contect.</h1>
      </div>
      
      <div className="contect-section">
        <div className="contect-left">
          <h1>Let's Talk</h1>
          <p>
            I'm currently avaliable to take on new project, so feel free to send me a message about anything that you want me to work on. You can contact anytime.
          </p>
          <div className="contect-details">
          <div className="contect-detail">
            <img src={mail} alt="Mail_icon" /> <p>vikashsathe83@gmail.com</p>
          </div>
            <div className="contect-detail">
            <img src={phone} alt="call_icon" />
            <p>+91 7869603377</p>
          </div>
          <div className="contect-detail">
            <img src={location} alt="location_icom" />
            <p>Indore, Madhya Pradesh</p>
          </div>
          <div className="contect-social">
            <a href="https://github.com/vikashsathe"><img src={github} alt="" /></a>
            <a href="https://www.linkedin.com/in/vikash-sathe-941166208/"><img src={linkedin} alt="" /></a>
            <a href=""><img src={twitter} alt="" /></a>
            <a href=""><img src={instagram} alt="" /></a>
          </div>
        </div>
      </div>

      <form onSubmit={onSubmit} className="contect-right">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" /> 
          <textarea name="message" placeholder="Your Message" id="" />
          <button type="submit" className="contect-submit">Submit now</button>
        </form>
    </div>
    </div>
    
  );
}

export default Contect;
