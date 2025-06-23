import { RiArrowLeftDoubleFill, RiArrowRightDoubleFill } from 'react-icons/ri'
import SectionTitle from '../../components/SectionTitle'

import './categories.css'
import CategorySwipper from './components/CategorySwipper'

const Categories = () => {
  return (
    <section id="categories" className="category section container">
      <div className="category-header">
        <SectionTitle 
          title="Categories"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <div className="swiper-btns">
          <button className='swiper-btn prev-btn'>
            <RiArrowLeftDoubleFill/>
          </button>
          <button className='swiper-btn next-btn'>
            <RiArrowRightDoubleFill/>
          </button>
        </div>
      </div>
      <CategorySwipper
        next=".next-btn"
        prev=".prev-btn"
      />
    </section>
  ) 
}

export default Categories