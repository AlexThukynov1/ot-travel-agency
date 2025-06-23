import './footer.css'

import FooterLogo from '../../assets/footer-logo.png'
import {FaEnvelope, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhoneAlt} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import {footerGallery, links} from "../../data/Data.jsx";
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

            <ul className="footer-list">
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
                <FaMapMarkerAlt className="footer-icon"/>
                <p className="footer-info">
                  12345 Street, San Francisco, CA 94107
                </p>
              </div>

              <div className="footer-item">
                <FaPhoneAlt className="footer-icon"/>
                <p className="footer-info">
                  +099 9288 925972
                </p>
              </div>

              <div className="footer-item">
                <FaEnvelope className="footer-icon"/>
                <p className="footer-info">
                  info@example.com
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="footer-title">Gallery</h3>
            <div className="footer-gallery">
              {
                footerGallery.map((img, index) => {
                  return (
                      <img src={img} alt="Footer gallery" className="footer-img" key={index}/>
                  )
                })
              }
            </div>
          </div>
        </div>
      </footer>
  ) 
}

export default Footer