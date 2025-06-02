import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import './slider.scss'

const HomeSlider = () => {
  return (
    <div className="p-4">
    <Swiper
        modules={[Navigation,Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        autoplay={{ delay: 3000 }}
        loop={true}
        
    >
      <SwiperSlide>
        <img src="https://serviceapi.spicezgold.com/download/1741660881858_NewProject(11).jpg" alt="Slide 1" className='w-full rounded-2xl' />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://serviceapi.spicezgold.com/download/1741660862304_NewProject(8).jpg" alt="Slide 1" className='w-full rounded-2xl' />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://serviceapi.spicezgold.com/download/1745503990603_NewProject(13).jpg" alt="Slide 1" className='w-full rounded-2xl' />
      </SwiperSlide>
    </Swiper>
  </div>
  )
}

export default HomeSlider;