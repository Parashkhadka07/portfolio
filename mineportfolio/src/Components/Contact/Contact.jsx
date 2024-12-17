import React from "react";
import "./Contact.css";

import { BiLogoGmail } from "react-icons/bi";
import { IoMdPhonePortrait } from "react-icons/io";
import { ImLocation2 } from "react-icons/im";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "01628612-edce-43cb-bc9e-b88d597b7956");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert(data.message);

      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contactme" className="contact">
      <div className="title">
        <h1>
          <u>Get in touch</u>
        </h1>
      </div>
      <div className="section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm avilable to take new projects, so feel free to contact me</p>
          <div className="contact-details">
            <div className="contact-detail">
              <BiLogoGmail style={{ width: "30px", height: "30px" }} />
              <p>parashkhadka020@gmail.com</p>
            </div>
            <div className="contact-detail">
              <IoMdPhonePortrait style={{ width: "30px", height: "30px" }} />
              <p>+977-9748867256</p>
            </div>
            <div className="contact-detail">
              <ImLocation2 style={{ width: "30px", height: "30px" }} />
              <p>Kathmandu, Nepal</p>
            </div>
          </div>
        </div>
        <div>
          <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input
              type="text"
              placeholder="enter your name"
              name="name"
              required
            />
            <label htmlFor="">Your E-mail</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              required
            />
            <label htmlFor="">write your message here</label>
            <textarea
              name="message"
              rows="8"
              placeholder="Enter your message"
              required
            ></textarea>
            <button type="submit" className="contact-submit">
              submit now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
