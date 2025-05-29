import './footer.css'

import FooterLogo from '../../assets/footer-logo.png'
import {FaFacebookF, FaInstagram} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import {links} from "../../data/Data.jsx";
import NavLink from "../NavLink/index.jsx";

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
                  className="footer-social-link"
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

          <div>
            <h3 className="footer-title">Quick Links</h3>

            <ul className="nav-list">
              {
                links.map((link, index) => {
                  return (
                    <li className="footer-item" key={index}>
                      <NavLink to={link} text={link} className='footer-link'/>
                    </li>
                  )
                })
              }
            </ul>
          </div>

          <div>
            <h3 className="footer-title">Contact</h3>
            <div className="footer-contact grid">
              <div className="footer-item">

              </div>
            </div>
          </div>
        </div>
      </footer>
  ) 
}

export default Footer