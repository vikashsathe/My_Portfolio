import React from "react";
import "./Footer.css";
import logo from "../../assets/Logo/logo.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <img className="logo" src={logo} alt="footer_logo" />
      </div>
      <hr />
    <div className="footer-bottom">
      <p className="footer-bottom-left">
        <p>
          Copyright © made{" "}
          <span>
            <i class="fa-solid fa-heart"></i>
          </span>{" "}
          by Vikash sathe
        </p>
      </p>
      <div className="footer-bottom-right">
        <p>Term of services</p>
        <p>Privacy Policy</p>
        <p>Connect with me</p>
      </div>
      </div>
    </div>
  );
}

export default Footer;
