import './header.css'
import Logo from '../../assets/logo.svg'
import {links} from '../../data/Data'
import NavLink from '../NavLink'
import { RiCloseFill, RiMenu3Fill, RiTelegram2Fill } from 'react-icons/ri'
import {Link, animateScroll} from "react-scroll";
import {useState} from "react";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const scrollTop = () => {
        animateScroll.scrollToTop();
    };
  return (
    <header className='header'>
      <nav className='nav container'>
        <Link
            href="/"
            className='nav-logo'
            onClick={scrollTop}
        >
          <img src={Logo} alt="Logo" className='nav-logo-img'/>
        </Link>

        <div className={`${showMenu ? 'show-menu' : ''} nav-menu`}>
          <ul className='nav-list'>
            {
              links.map((link, index) => {
                return (
                  <li className='nav-item' key={index}>
                    <NavLink
                        to={link}
                        text={link}
                        className='nav-link'
                        extraPops={{spy: true}}
                    />
                  </li>
                )
              })
            }

              <li className='nav-item'>
                  <NavLink to="booking" text="Book Now" className="button nav-link-button">
                      <RiTelegram2Fill className='button-icon'/>
                  </NavLink>
              </li>
          </ul>

          <RiCloseFill
              className='nav-close'
              onClick={() => setShowMenu(!showMenu)}
          />
        </div>

       <div className='nav-buttons'>
        <NavLink to="booking" text="Book Now" className="button">
          <RiTelegram2Fill className='button-icon'/>
        </NavLink>

        <RiMenu3Fill
            className='nav-toggle'
            onClick={() => setShowMenu(!showMenu)}
        />
       </div>
      </nav>
    </header>
  ) 
}

export default Header