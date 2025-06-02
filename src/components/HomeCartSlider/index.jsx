import React from 'react';
import './homeCartSlider.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Autoplay,Pagination } from 'swiper/modules';
import fashionImg from '../../assets/images2/fashion.png'
import bagImg from '../../assets/images2/bag.png'
import footwearImg from '../../assets/images2/footwear.png'
import groceryImg from '../../assets/images2/grocery.png'
import makeupImg from '../../assets/images2/makeup.png'
import exerciseImg from '../../assets/images2/exercise.png'
import jewelry from '../../assets/images2/jewelry.png'

import { Link } from 'react-router-dom';


const HomeCartSlider = () => {
  return (
    <div className='homeCartSlider pt-4 py-8'>
        <div className='container'>
            <Swiper
            modules={[Navigation,Autoplay]}
            spaceBetween={10}
            slidesPerView={6}
            navigation={true}
            autoplay={{ delay: 3000 }}
            loop={true}
        >
                <SwiperSlide>
                    <Link to="/">
                        <div className="item px-1 py-4 bg-white rounded-sm text-center flex flex-col items-center justify-center ">
                            <img src={fashionImg} className='transition-all' alt="" />
                            <h3 className='text-[16px] font-[500] mt-3'>Fashion</h3>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/">
                        <div className="item px-1 py-4 bg-white rounded-sm text-center flex flex-col items-center justify-center ">
                            <img src={bagImg} className='transition-all' alt="" />
                            <h3 className='text-[16px] font-[500] mt-3'>Bags</h3>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/">
                        <div className="item px-1 py-4 bg-white rounded-sm text-center flex flex-col items-center justify-center ">
                            <img src={footwearImg} className='transition-all' alt="" />
                            <h3 className='text-[16px] font-[500] mt-3'>Footwear</h3>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/">
                        <div className="item px-1 py-4 bg-white rounded-sm text-center flex flex-col items-center justify-center ">
                            <img src={groceryImg} className='transition-all' alt="" />
                            <h3 className='text-[16px] font-[500] mt-3'>Grocery</h3>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/">
                        <div className="item px-1 py-4 bg-white rounded-sm text-center flex flex-col items-center justify-center ">
                            <img src={makeupImg} className='transition-all' alt="" />
                            <h3 className='text-[16px] font-[500] mt-3'>Makeup</h3>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/">
                        <div className="item px-1 py-4 bg-white rounded-sm text-center flex flex-col items-center justify-center ">
                            <img src={exerciseImg} alt="" />
                            <h3 className='text-[16px] font-[500] mt-3'>Exercise</h3>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/">
                        <div className="item px-1 py-4 bg-white rounded-sm text-center flex flex-col items-center justify-center ">
                            <img src={jewelry} className='transition-all' alt="" />
                            <h3 className='text-[16px] font-[500] mt-3'>Jewelry</h3>
                        </div>
                    </Link>
                </SwiperSlide>
             
                
            </Swiper>
        </div>
    </div>
   
  )
}

export default HomeCartSlider;