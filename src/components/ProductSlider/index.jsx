import React from 'react';
import './productSlider.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, } from 'swiper/modules';
import ProductItem from '../ProductItem';



const ProductSlider =({items})=>{
    return(
        <>
         <div className="productSlider py-5">
            <Swiper
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={items}
                navigation={true}
                autoplay={{ delay: 3000 }}
                loop={true}
                className='pSlider'
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