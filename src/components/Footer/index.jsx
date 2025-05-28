import './footer.css'

import FooterLogo from '../../assets/footer-logo.png'
import {FaFacebookF, FaInstagram} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";

const Footer = () => {
  return (
      <footer className="footer">
        <div className="footer-container container grid">
          <div>
            <a href="/" className="footer-logo">
              <img src={FooterLogo} alt="" className="footer-logo-img"/>
            </a>

            <p className="footer-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="footer-socials">
              <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="footer-social-link"
              >
                <FaFacebookF/>
              </a>
              <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  lassName="footer-social-link"
              >
                <FaInstagram/>
              </a>
              <a
                  href="https://x.com/"
                  target="_blank"
                  className="footer-social-link"
              >
                <FaXTwitter/>
              </a>
            </div>
          </div>
        </div>
      </footer>
  ) 
}

export default Footer