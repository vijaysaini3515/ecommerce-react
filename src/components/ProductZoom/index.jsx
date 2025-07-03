import React, { useRef, useState } from "react";
import './productZoom.scss'
import 'react-inner-image-zoom/lib/styles.min.css';
import InnerImageZoom from 'react-inner-image-zoom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation} from 'swiper/modules';
import { useSelector } from "react-redux";


const ProductZoom =()=>{
  const windowWidth = useSelector((state)=>state.window.width)
  const [slideIndex,setSlideIndex] = useState(0);

  const zoomSlidBig = useRef()
  const zoomSlidSml = useRef()

  const goto =(index)=>{
    console.log("slideIndex", index)
    setSlideIndex(index)
    zoomSlidBig.current.swiper.slideTo(index)
    zoomSlidSml.current.swiper.slideTo(index)
  }




    return (
        <div className="flex flex-col lg:flex-row gap-3">

          <div className="slider w-full lg:w-[15%] order-2 lg:order-1">
            <Swiper
            ref={zoomSlidSml}
              direction={windowWidth < 992 ? 'horizontal' : 'vertical'}
              modules={[Navigation]}
              spaceBetween={1}
              slidesPerView={4}
              navigation={true}
              className={`${windowWidth > 992 ? 'zoomProductSlider' : ''}  h-[auto] lg:h-[400px] overflow-hidden`}
             >

                <SwiperSlide>
                    <div onClick={()=>goto(0)} className={`item rounded overflow-hidden cursor-pointer group ${slideIndex===0 ? 'opacity-100' : 'opacity-40'} `}>
                      <img className="w-full transition-all group-hover:scale-105 " src="https://serviceapi.spicezgold.com/download/1742462552739_siril-georgette-pink-color-saree-with-blouse-piece-product-images-rvrk9p11sk-0-202308161432.webp" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div onClick={()=>goto(1)} className={`item rounded overflow-hidden cursor-pointer group ${slideIndex===1 ? 'opacity-100' : 'opacity-40'} `}>
                      <img className="w-full transition-all group-hover:scale-105 " src="https://serviceapi.spicezgold.com/download/1742462552741_siril-georgette-pink-color-saree-with-blouse-piece-product-images-rvrk9p11sk-3-202308161432.webp" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div onClick={()=>goto(2)} className={`item rounded overflow-hidden cursor-pointer group ${slideIndex === 2 ?'opacity-100':'opacity-40'} `}>
                      <img className="w-full transition-all group-hover:scale-105 " src="https://serviceapi.spicezgold.com/download/1742462552743_siril-georgette-pink-color-saree-with-blouse-piece-product-images-rvrk9p11sk-2-202308161432.webp" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div onClick={()=>goto(3)} className={`item rounded overflow-hidden cursor-pointer group ${slideIndex === 3 ?'opacity-100':'opacity-40'} `}>
                      <img className="w-full transition-all group-hover:scale-105 " src="https://serviceapi.spicezgold.com/download/1742462552744_siril-georgette-pink-color-saree-with-blouse-piece-product-images-rvrk9p11sk-1-202308161432.webp" alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>        
          </div>

          <div className="zoomContainer w-full lg:w-[85%] order-1 lg:order-2  overflow-hidden">
          <Swiper
              ref={zoomSlidBig}
              spaceBetween={0}
              slidesPerView={1}
              navigation={false}
             >
                <SwiperSlide>
                   <InnerImageZoom zoomType="hover" zoomScale={1} src="https://serviceapi.spicezgold.com/download/1742462552739_siril-georgette-pink-color-saree-with-blouse-piece-product-images-rvrk9p11sk-0-202308161432.webp"  />
                </SwiperSlide>
                <SwiperSlide>
                   <InnerImageZoom zoomType="hover" zoomScale={1} src="https://serviceapi.spicezgold.com/download/1742462552741_siril-georgette-pink-color-saree-with-blouse-piece-product-images-rvrk9p11sk-3-202308161432.webp"  />
                </SwiperSlide>
                <SwiperSlide>
                   <InnerImageZoom zoomType="hover" zoomScale={1} src="https://serviceapi.spicezgold.com/download/1742462552743_siril-georgette-pink-color-saree-with-blouse-piece-product-images-rvrk9p11sk-2-202308161432.webp"  />
                </SwiperSlide>
                <SwiperSlide>
                   <InnerImageZoom zoomType="hover" zoomScale={1} src="https://serviceapi.spicezgold.com/download/1742462552744_siril-georgette-pink-color-saree-with-blouse-piece-product-images-rvrk9p11sk-1-202308161432.webp"  />
                </SwiperSlide>
               
            </Swiper>   
          </div>

        </div>
    )
}

export default ProductZoom