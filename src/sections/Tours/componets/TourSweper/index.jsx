import {RiArrowLeftDoubleFill, RiArrowRightDoubleFill, RiCalendarFill, RiTelegram2Fill} from "react-icons/ri";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import {tours} from "../../../../data/Data.jsx";
import Stars from "../Stars/index.jsx";
import NavLink from "../../../../components/NavLink/index.jsx";

import "swiper/css";
import "swiper/css/navigation";

const TourSweper = ({prev, next}) => {
    return (
            <Swiper
                slidesPerView={1}
                spaceBetween={12}
                grabCursor={true}
                loop={true}
                navigation={{
                    nextEl: next,
                    prevEl: prev,
                }}
                modules={[Navigation]}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3
                    },
                    1208: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                }}
            >
                {
                    tours.map(({img, title, location, days, price, stars}, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <img src={img} alt={title} className="tour-img"/>
                                <div className="tour-detail">
                                    <Stars stars={stars}/>

                                    <h3 className="tour-title">{title}</h3>
                                    <p className="tour-location">{location}</p>

                                    <hr className="tour-divider"/>

                                    <div className="tour-days">
                                        <RiCalendarFill className="tour-icon"/>
                                        {days}
                                    </div>

                                    <div className="tour-bottom">
                                        <p>
                                            <span className="tour-price">{price}</span>
                                            <span className="tour-person">/Person</span>
                                        </p>

                                        <NavLink
                                            to="/"
                                            text="More Details"
                                            className="button"
                                        >
                                            <RiTelegram2Fill className="button-icon"/>
                                        </NavLink>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
    )
}

export default TourSweper
