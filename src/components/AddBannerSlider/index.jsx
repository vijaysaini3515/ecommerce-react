
import { Swiper, SwiperSlide } from 'swiper/react';
import './addBannerSlider.scss'
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Autoplay } from 'swiper/modules';

import bannerImg1 from '../../assets/images2/banner1.webp'
import bannerImg2 from '../../assets/images2/banner2.webp'
import bannerImg3 from '../../assets/images2/banner3.webp'
import bannerImg4 from '../../assets/images2/banner4.webp'

// import bannerImg1 from '../../assets/images2/banner/banner1.webp'
// import bannerImg2 from '../../assets/images2/banner/banner2.webp'
// import bannerImg3 from '../../assets/images2/banner/banner3.webp'
// import bannerImg4 from '../../assets/images2/banner/banner4.webp'

import BannerBox from '../BannerBox';
import { useSelector } from 'react-redux';

const  AddBannerSlider =({items})=>{
    const windowWidth = useSelector((state)=>state.window.width)
    return (
        <>
         <Swiper
            modules={[Navigation,Autoplay]}
            spaceBetween={10}
            slidesPerView={items}
            navigation={windowWidth > 992 ? true : false}
            autoplay={{ delay: 3000 }}
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