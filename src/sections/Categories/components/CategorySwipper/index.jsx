import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import {categories} from '../../../../data/Data'

import 'swiper/css'
import 'swiper/css/navigation'
import './categoty-swipper.css'

const CategorySwipper = ({next, prev}) => {
    return (
              <Swiper 
        navigation={{
          nextEl: next,
          prevEl: prev
        }} 
        slidesPerView={1}
        spaceBetween={12}
        grabCursor={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 5,
          },
          1208: {
            slidesPerView: 4,
            spaceBetween: 20
          },
        }}
        modules={[Navigation]} 
        className="mySwiper"
      >
        {
          categories.map(({img, title}, index) => {
            return(
              <SwiperSlide
                className='category-slide' 
                key={index}
              >
                <img src={img} alt="Category image" className='category-img'/>
                <h3 className='category-title'>{title}</h3>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    )
}

export default CategorySwipper