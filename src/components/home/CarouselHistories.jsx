import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import images from "../../helpers/ImgHistories";


const CarouselHistories = () => {

    return (
        <div className="container">
            <Swiper
                effect={'coverflow'}
                grabCursor = {true}
                centeredSlides = {true}
                loop = {true}
                slidesPerView={'auto'}
                coverflowEffect={
                    {
                        rotate: 0,
                        stretch: 35,
                        depth: 100,
                        modifier: 3.5,
                    }
                }
                pagination={{el:'.swiper-pagination',clickable:true, dynamicBullets: true }}
                navigation={{
                    nextEl:'.swiper-button-next',
                    prevEl:'.swiper-button-prev',
                    clickable:true
                }} 
                modules={[EffectCoverflow, Pagination,Navigation]}
                className="swiper_container"
            >
                {
                    images.map((img, index) =>(
                        <SwiperSlide key={index}>
                            <img src={img.img} alt= {index.title} />
                        </SwiperSlide>
                    ))
                }

                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <BsFillArrowLeftCircleFill/>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <BsFillArrowRightCircleFill />
                    </div>
                    <div className="swiper-pagination">
                    </div>
                </div>
            </Swiper>
        </div>
    )
}

export default CarouselHistories;