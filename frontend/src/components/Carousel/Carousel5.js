import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Carousel5.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Carousel5 = () =>{
  return (
    <>
    <div className="swiper-1">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'3'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="./pictures/carousel5/styled-by-you.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./pictures/carousel5/home-x-naimal.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./pictures/carousel5/sherwani.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./pictures/carousel5/fabric-glossary.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./pictures/carousel5/the-edit.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./pictures/carousel5/mughal-mirage.png" />
        </SwiperSlide>
      </Swiper>
      </div>
      <div className="swiper-2">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'2'}
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="./pictures/carousel5/styled-by-you.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./pictures/carousel5/home-x-naimal.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./pictures/carousel5/sherwani.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./pictures/carousel5/fabric-glossary.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./pictures/carousel5/the-edit.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./pictures/carousel5/mughal-mirage.png" />
        </SwiperSlide>
      </Swiper>
      </div>
      <div className="swiper-3">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'2'}
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: false,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="./pictures/carousel5/styled-by-you.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./pictures/carousel5/home-x-naimal.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./pictures/carousel5/sherwani.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./pictures/carousel5/fabric-glossary.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./pictures/carousel5/the-edit.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./pictures/carousel5/mughal-mirage.png" />
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
export default Carousel5