import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import { FaUser } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="" style={{ width: "80px", height: "50px" }} />
          <p>I am a Student and Developer from,Nepal</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <FaUser />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2024 ParashKhadka. All Rights Reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Term of services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
