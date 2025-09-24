import React from "react";
import "./Footer.scss";
import { FaTiktok, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="newsletter">
          <h3>JOIN THE D1 CLUB</h3>
          <p>Subscribe for deals, and tips on mens skincare</p>

          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">SUBMIT</button>
          </form>

          <div className="socials">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTiktok /></a>
            <a href="#"><FaFacebookF /></a>
          </div>
        </div>

        <div className="logo">D1</div>
      </div>

      <div className="footer-links">
        <div className="column">
          <h4>SUPPORT</h4>
          <ul>
            <li><a href="#">Support</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">FAQS</a></li>
            <li><a href="#">Account</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="column">
          <h4>COMPANY</h4>
          <ul>
            <li><a href="#">Company</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Philosophy</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>©D1 2025 – site by manufactur</p>
        <div className="disclaimer">
          These statements have not been evaluated by the Food and Drug Administration.
          This product is not intended to diagnose, treat, cure, or prevent any disease.
          Lorem ipsum dolor sit amet.
        </div>
      </div>
    </footer>
  );
}
