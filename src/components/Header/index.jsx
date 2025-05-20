import './header.css'
import Logo from '../../assets/logo.svg'
import {links} from '../../data/Data'
import NavLink from '../NavLink'

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
        </div>
      </nav>
    </header>
  ) 
}

export default Header