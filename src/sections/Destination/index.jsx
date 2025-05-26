import './destination.css'
import SectionTitle from "../../components/SectionTitle/index.jsx";
import {destinations} from "../../data/Data.jsx";
import NavLink from "../../components/NavLink/index.jsx";
import {RiTelegram2Fill} from "react-icons/ri";

const Destination = () => {
  return (
      <section className="destinations section container">
        <SectionTitle
          subtitle="Top Destinations"
          title="Legendary Places"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <div className="destination-container">
          {
            destinations.map((id, img, title, price, rating) => {
              return (
                  <div className="destination-item" key={id}>
                    <img src={img} alt={title} className="destination-img"/>
                    <div className="destination-details">
                      <div className="destination-top">
                        <span className="destination-price">{price}</span>
                        <span className="destination-rating">{rating}</span>
                      </div>

                      <h3 className="destination-title">{title}</h3>
                      <NavLink
                          to="/"
                          text="Details"
                          className="button button-white"
                      >
                        <RiTelegram2Fill className="button-icon"/>
                      </NavLink>
                    </div>
                  </div>
              )
                })
          }
        </div>
      </section>
  ) 
}

export default Destination