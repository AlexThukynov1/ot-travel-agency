import './home.css'
import homeImage from '../../assets/home-img.png'
import { PiGlobeHemisphereEastFill } from 'react-icons/pi'
import NavLink from '../../components/NavLink'
import { RiTelegram2Fill } from 'react-icons/ri'
import Booking from './components/Booking'

const Home = () => {
  return (
    <section className="home section">
      <div className="home-container container grid">
        <div className="home-data">
          <h3 className="home-subtitle">
            <PiGlobeHemisphereEastFill/>
            Let's Start Your Journey
          </h3>
          <h1 className="home-title">
            Your Journey Begins Here - Find, Book, Travel!
          </h1>
          <p className="home-description">
            Discover, plan, and book unforgettable journeys with our expert recommendations and travel inspiration.
          </p>
          <NavLink
            to="about"
            name="About Us"
            className="button button-white"
          >
            About Us
            <RiTelegram2Fill/>
          </NavLink>
        </div>
        <img src={homeImage} alt="Home section image" className="home-img" />
      </div>

      <Booking icon={<RiTelegram2Fill/>}/>
    </section>
  ) 
}

export default Home