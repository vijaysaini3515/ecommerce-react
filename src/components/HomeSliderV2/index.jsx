import React from 'react';
import './homeSliderV2.scss';
import Button from '@mui/material/Button'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination, Autoplay, } from 'swiper/modules';

import sampleImg1 from '../../assets/images2/sample-1.jpg';
import sampleImg2 from '../../assets/images2/sample-2.jpg';
import { useSelector } from 'react-redux';

const HomeSliderV2 = () => {
  const windowWidth = useSelector((state)=>state.window.width)
  return (
    <>
        <Swiper
        loop={true}
        spaceBetween={30}
        effect={'fade'}
        navigation={windowWidth > 992 ? true : false}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination,Autoplay]}
        className="homeSliderV2"
      >
        <SwiperSlide>
            <div className="item w-full rounded-md overflow-hidden relative">
               <img src={sampleImg1} alt='homeV2'/>

               <div className="info absolute top-0 w-[60%] lg:w-[50%] h-[100%] z-50 p-4 lg:p-8 flex flex-col items-center justify-center -right-[100%] opacity-0 transition-all duration-700">
                    <h2 className='text-[10px] lg:text-[18px] hidden lg:block font-[500] mb-1 lg:mb-3 w-full text-left relative -right-[100%] opacity-0' >Big saving days sale</h2>
                    <h4 className='text-[12px] lg:text-[32px] font-[500] mb-1 lg:mb-3 w-full text-left relative -right-[100%] opacity-0'>Women Solid Rounded Green T-Shirt</h4>
                    <h3 className='flex items-center gap-1 lg:gap-3 my-2 lg:my-3 text-[12px] lg:text-[18px] font-[500] mb-1 lg:mb-3 w-full text-left relative -right-[100%] opacity-0'>Starting at only <span className='text-[var(--primary)] text-[14px] lg:text-[30px] font-[700]'>$59.00</span> </h3>
                    <div className='btn_ w-full relative -right-[100%] opacity-0'>
                        <Button className='btn-org !text-[12px] lg:!text-[18px]'>Shop now</Button>
                    </div>
               </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item w-full rounded-md overflow-hidden relative">
            <img src={sampleImg2} alt='homeV21'/>
            <div className="info absolute top-0 w-[60%] lg:w-[50%] h-[100%] z-50 p-4 lg:p-8 flex flex-col items-center justify-center -right-[100%] opacity-0 transition-all duration-700">
                    <h2 className='text-[10px] lg:text-[18px] hidden lg:block font-[500] mb-1 lg:mb-3 w-full text-left relative -right-[100%] opacity-0' >Big saving days sale</h2>
                    <h4 className='text-[12px] lg:text-[32px] font-[500] mb-1 lg:mb-3 w-full text-left relative -right-[100%] opacity-0'>Apple iphone 13 128gb, pink</h4>
                    <h3 className='flex items-center gap-1 lg:gap-3 my-2 lg:my-3 text-[12px] lg:text-[18px] font-[500] mb-1 lg:mb-3 w-full text-left relative -right-[100%] opacity-0'>Starting at only <span className='text-[var(--primary)] text-[14px] lg:text-[30px] font-[700]'>₹35000.00</span> </h3>
                    <div className='btn_ w-full relative -right-[100%] opacity-0'>
                        <Button className='btn-org !text-[12px] lg:!text-[18px]'>Shop now</Button>
                    </div>
               </div>
          </div>  
        </SwiperSlide>
        


        
      </Swiper>
    </>
  )
}

export default HomeSliderV2;