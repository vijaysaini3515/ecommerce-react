
import { Swiper, SwiperSlide } from 'swiper/react';
import './addBannerSlider.scss'
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Autoplay } from 'swiper/modules';
import BannerBoxV2 from '../BannerBoxV2';
import bannerImg1 from '../../assets/images2/banner2.png'
import bannerImg2 from '../../assets/images2/banner3.jpg'


const  AddBannerSliderV2 =({item})=>{
    return (
        <div className='p-2'>
         <Swiper
            modules={[Navigation,Autoplay]}
            spaceBetween={10}
            slidesPerView={item}
            navigation={true}
            autoplay={{ delay: 2500 }}
            loop={true}
            className='smlButton'
            breakpoints={{
                330: { slidesPerView: 1, spaceBetween: 10 },
                550: { slidesPerView: 2, spaceBetween: 10 },
                900: { slidesPerView: 3, spaceBetween: 10 },
                1100: { slidesPerView: 4, spaceBetween: 10 },
              }}
        >
            <SwiperSlide>
                <BannerBoxV2 pic={bannerImg1} position="left" />
            </SwiperSlide>
            <SwiperSlide>
                <BannerBoxV2 pic={bannerImg2} position="left" />
            </SwiperSlide>
            <SwiperSlide>
                <BannerBoxV2 pic={bannerImg1} position="left" />
            </SwiperSlide>
            <SwiperSlide>
                <BannerBoxV2 pic={bannerImg2} position="left" />
            </SwiperSlide>
            <SwiperSlide>
                <BannerBoxV2 pic={bannerImg1} position="left" />
            </SwiperSlide>
            <SwiperSlide>
                <BannerBoxV2 pic={bannerImg2} position="left" />
            </SwiperSlide>
            <SwiperSlide>
                <BannerBoxV2 pic={bannerImg1} position="left" />
            </SwiperSlide>
            <SwiperSlide>
                <BannerBoxV2 pic={bannerImg2} position="left" />
            </SwiperSlide>
        </Swiper>
        </div>
    )
}

export default AddBannerSliderV2 ;