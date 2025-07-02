import React from 'react';
import './homeCartSlider.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/free-mode';
import { Navigation, Autoplay} from 'swiper/modules';
import fashionImg from '../../assets/images2/fashion.png'
import bagImg from '../../assets/images2/bag.png'
import footwearImg from '../../assets/images2/footwear.png'
import groceryImg from '../../assets/images2/grocery.png'
import makeupImg from '../../assets/images2/makeup.png'
import exerciseImg from '../../assets/images2/exercise.png'
import jewelry from '../../assets/images2/jewelry.png'

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const HomeCartSlider = () => {
    const windowWidth = useSelector((state)=>state.window.width)
  return (
    <div className='homeCartSlider pt-0 lg:pt-4 py-4 :py-8'>
        <div className='container'>
            <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={6}
            navigation={windowWidth > 992 ? true : false}
            autoplay={{ delay: 3000 }}
            loop={true}
            breakpoints={{
                330: { slidesPerView: 3, spaceBetween: 10 },
                550: { slidesPerView: 4, spaceBetween: 10 },
                900: { slidesPerView: 6, spaceBetween: 10 },
                1100: { slidesPerView: 7, spaceBetween: 10 },
              }}
        >
                <SwiperSlide>
                    <Link to="/">
                        <div className="item py-4 lg:px-3 lg:py-7 bg-white rounded-sm text-center flex flex-col items-center justify-center ">
                            <img src={fashionImg} className='transition-all w-[60px] lg:w-[120px]' alt="" />
                            <h3 className='text-[12px] lg:text-[16px]  font-[500] mt-3'>Fashion</h3>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/">
                        <div className="item py-4 lg:px-3 lg:py-7 bg-white rounded-sm text-center flex flex-col items-center justify-center ">
                            <img src={bagImg} className='transition-all w-[60px] lg:w-[120px]' alt="" />
                            <h3 className='text-[12px] lg:text-[16px]  font-[500] mt-3'>Bags</h3>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/">
                        <div className="item py-4 lg:px-3 lg:py-7 bg-white rounded-sm text-center flex flex-col items-center justify-center ">
                            <img src={footwearImg} className='transition-all w-[60px] lg:w-[120px]' alt="" />
                            <h3 className='text-[12px] lg:text-[16px]  font-[500] mt-3'>Footwear</h3>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/">
                        <div className="item py-4 lg:px-3 lg:py-7 bg-white rounded-sm text-center flex flex-col items-center justify-center ">
                            <img src={groceryImg} className='transition-all w-[60px] lg:w-[120px]' alt="" />
                            <h3 className='text-[12px] lg:text-[16px]  font-[500] mt-3'>Grocery</h3>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/">
                        <div className="item py-4 lg:px-3 lg:py-7 bg-white rounded-sm text-center flex flex-col items-center justify-center ">
                            <img src={makeupImg} className='transition-all w-[60px] lg:w-[120px]' alt="" />
                            <h3 className='text-[12px] lg:text-[16px]  font-[500] mt-3'>Makeup</h3>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/">
                        <div className="item py-4 lg:px-3 lg:py-7 bg-white rounded-sm text-center flex flex-col items-center justify-center ">
                            <img className='transition-all w-[60px] lg:w-[120px]' src={exerciseImg} alt="" />
                            <h3 className=' text-[12px] lg:text-[16px]  font-[500] mt-3'>Exercise</h3>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/">
                        <div className="item py-4 lg:px-3 lg:py-7 bg-white rounded-sm text-center flex flex-col items-center justify-center ">
                            <img src={jewelry} className='transition-all w-[60px] lg:w-[120px]' alt="" />
                            <h3 className='text-[12px] lg:text-[16px]  font-[500] mt-3'>Jewelry</h3>
                        </div>
                    </Link>
                </SwiperSlide>
             
                
            </Swiper>
        </div>
    </div>
   
  )
}

export default HomeCartSlider;