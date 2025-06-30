import React from 'react';
import './productSlider.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, } from 'swiper/modules';
import ProductItem from '../ProductItem';
import { useSelector } from 'react-redux';



const ProductSlider =({items})=>{
    const windowWidth = useSelector((state)=>state.window.width)
    return(
        <>
         <div className="productSlider py-4">
            <Swiper
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={items}
                navigation={windowWidth > 992 ? true : false}
                autoplay={{ delay: 3000 }}
                loop={true}
                className='pSlider'
                breakpoints={{
                    330: { slidesPerView: 2, spaceBetween: 10 },
                    550: { slidesPerView: 3, spaceBetween: 10 },
                    900: { slidesPerView: 4, spaceBetween: 10 },
                    1100: { slidesPerView: 5, spaceBetween: 10 },
                }}
            >
                    <SwiperSlide>
                        <ProductItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductItem />
                    </SwiperSlide>
            </Swiper>
         </div>
        </>
    )
}

export default ProductSlider ;