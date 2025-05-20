import './header.css'
import Logo from '../../assets/logo.svg'
import {links} from '../../data/Data'
import NavLink from '../NavLink'
import { RiCloseFill, RiMenu3Fill, RiTelegram2Fill } from 'react-icons/ri'

const Header = () => {
  return (
    <header className='header'>
      <nav className='nav container'>
        <a href="/" className='nav-logo'>
          <img src={Logo} alt="Logo" className='nav-logo-img'/>
        </a>

        <div className='nav-menu'>
          <ul className='nav-list'>
            {
              links.map((link, index) => {
                return (
                  <li className='nav-item' key={index}>
                    <NavLink to={link} text={link} className='nav-link'/>
                  </li>
                )
              })
            }
          </ul>

          <RiCloseFill className='nav-close'/>
        </div>

       <div className='nav-buttons'>
        <NavLink to="booking" text="Book Now" className="button nav-link">
          <RiTelegram2Fill className='button-icon'/>
        </NavLink>

        <RiMenu3Fill className='nav-toggle'/>
       </div>
      </nav>
    </header>
  ) 
}

export default Header