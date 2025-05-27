import './tours.css'
import SectionTitle from "../../components/SectionTitle/index.jsx";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import TourCard from "../../components/TourCard/index.jsx";
import {tours} from "../../data/Data.jsx";



const Tours = () => {
  return (
      <section className="tours container section">
        <div className="tours-header">
          <SectionTitle
            title="Select Your Tour"
            subtitle="Epic Adventures Tour"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </section>
  ) 
}

export default Tours