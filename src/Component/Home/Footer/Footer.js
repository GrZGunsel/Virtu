import React from "react";
import "./Footer.scss";
import Logo from "../../../image/Logo.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="upperFooter">
          <div className="logo">
            <img src={Logo} alt="" height="55px" width="auto" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className="quickcontact">
            <h3>Quick Contact</h3>
            <ul>
              <li>Rometheme Studio </li>
              <li>99th, Arround St, Pku City</li>
              <li>012 345 6789</li>
              <li>Info@yourdomain.com</li>
            </ul>
          </div>
          <div className="otherpage">
            <h3>Other Page </h3>
            <ul>
              <li>Privacy Policy</li>
              <li>Term Of Service</li>
              <li>Disclaimer</li>
              <li>Credit</li>
            </ul>
          </div>
          <div className="ourSocialMedia">
            <h3>Our Social Media</h3>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Pinterest</li>
              <li>Linkedin</li>
            </ul>
          </div>
        </div>
        <div className="bottomFooter">
          <p>Copyright 2021 © Virtu | Powered by Rometheme Studio</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
