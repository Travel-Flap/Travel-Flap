import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import  "swiper/css";
import "swiper/css/free-mode";

// import "bootstrap/dist/css/bootstrap.min.css";
import { ItemCards } from './ItemCards';
export const ProductSlider = () => {
  return (
    <div>
        <div className='container py-4  justify-content-center bg-dark'>
            <Swiper 
                freeMode={true}
                grabCursor={true}
                modules={[FreeMode]}
                className="mySwiper"
                slidesPerView={5}
                spaceBetween={30}
                >
                   {/* <ItemCards /> */}
            </Swiper>
        </div>
    </div>
  )
}
