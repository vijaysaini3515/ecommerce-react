
import { Swiper, SwiperSlide } from 'swiper/react';
import './addBannerSlider.scss'
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Autoplay } from 'swiper/modules';
import bannerImg1 from '../../assets/images2/banner1.webp'
import bannerImg2 from '../../assets/images2/banner2.webp'
import bannerImg3 from '../../assets/images2/banner3.webp'
import bannerImg4 from '../../assets/images2/banner4.webp'
// import bannerImg5 from '../../assets/images2/banner5.webp'
import BannerBox from '../BannerBox';

const  AddBannerSlider =({items})=>{
    return (
        <>
         <Swiper
            modules={[Navigation,Autoplay]}
            spaceBetween={10}
            slidesPerView={items}
            navigation={true}
            autoplay={{ delay: 3000 }}
            loop={true}
            className='smlButton'
        >
            <SwiperSlide>
                <BannerBox image={bannerImg1} link={"/"} />
            </SwiperSlide>
            <SwiperSlide>
                <BannerBox image={bannerImg2} link={"/"} />
            </SwiperSlide>
            <SwiperSlide>
                <BannerBox image={bannerImg3} link={"/"} />
            </SwiperSlide>
            <SwiperSlide>
                <BannerBox image={bannerImg4} link={"/"} />
            </SwiperSlide>
            <SwiperSlide>
                <BannerBox image={bannerImg1} link={"/"} />
            </SwiperSlide>
            <SwiperSlide>
                <BannerBox image={bannerImg2} link={"/"} />
            </SwiperSlide>
            <SwiperSlide>
                <BannerBox image={bannerImg3} link={"/"} />
            </SwiperSlide>
            <SwiperSlide>
                <BannerBox image={bannerImg4} link={"/"} />
            </SwiperSlide>
        </Swiper>
        </>
    )
}

export default AddBannerSlider ;