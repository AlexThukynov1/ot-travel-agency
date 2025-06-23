import './tours.css'
import SectionTitle from "../../components/SectionTitle/index.jsx";
import TourSweper from "./componets/TourSweper/index.jsx";
import {RiArrowLeftDoubleFill, RiArrowRightDoubleFill} from "react-icons/ri";





const Tours = () => {
  return (
      <section className="tours container section">
        <div className="tours-header">
          <SectionTitle
            title="Select Your Tour"
            subtitle="Epic Adventures Tour"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
            <div className="swiper-btns">
                <button className="swiper-btn prev-btn">
                    <RiArrowLeftDoubleFill/>
                </button>
                <button className="swiper-btn next-btn">
                    <RiArrowRightDoubleFill/>
                </button>
            </div>
        </div>
        <TourSweper prev=".prev-btn" next=".next-btn"/>

      </section>
  ) 
}

export default Tours