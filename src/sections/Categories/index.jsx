import { RiArrowLeftDoubleFill, RiArrowRightDoubleFill } from 'react-icons/ri'
import SectionTitle from '../../components/SectionTitle'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import {categories} from '../../data/Data'

import 'swiper/css'
import 'swiper/css/navigation'

import './categories.css'

const Categories = () => {
  return (
    <section className="category section">
      <div className="category-header">
        <SectionTitle 
          title="Categories"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <div className="swiper-btns">
          <button className='swipper-btn prev-btn'>
            <RiArrowLeftDoubleFill/>
          </button>
          <button className='swipper-btn next-btn'>
            <RiArrowRightDoubleFill/>
          </button>
        </div>
      </div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
          categories.map(({img, title}, index) => {
            return(
              <SwiperSlide
              className='categoty-slide' 
                key={index}
              >
                <img src={img} alt="Category image" className='category-img'/>
                <h3 className='category-title'>{title}</h3>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  ) 
}

export default Categories