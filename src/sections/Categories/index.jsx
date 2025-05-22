import { RiArrowLeftDoubleFill, RiArrowRightDoubleFill } from 'react-icons/ri'
import SectionTitle from '../../components/SectionTitle'
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
    </section>
  ) 
}

export default Categories