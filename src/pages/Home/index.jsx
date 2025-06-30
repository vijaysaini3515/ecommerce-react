import React,{useState} from "react";
import './home.scss'
import AddBannerSlider from "../../components/AddBannerSlider";
import HomeCartSlider from "../../components/HomeCartSlider";
import HomeSlider from "../../components/HomeSlider";
import HomeSliderV2 from '../../components/HomeSliderV2'
import { FaShippingFast } from "react-icons/fa";

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ProductSlider from "../../components/ProductSlider";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { Link } from "react-router-dom";
import BlogItem from "../../components/BlogItem";
import Footer from "../../components/Footer";
import BannerBoxV2 from "../../components/BannerBoxV2";

import bannerImg1 from '../../assets/images2/banner3.jpg'
import bannerImg2 from '../../assets/images2/banner4.jpg'
import AddBannerSliderV2 from "../../components/AddBannerSliderV2";
import { useSelector } from "react-redux";



const Home = () =>{
    const [value, setValue] = useState(0);
    const windowWidth = useSelector((state)=>state.window.width)

    const handleChange = (event ,newValue) => {
      setValue(newValue);
    };





    return(
        <>  
           <HomeSlider />
           
           
           
           <HomeCartSlider />

           <section className="bg-white pt-4">
            <div className="container">
                <div className="flex flex-col lg:flex-row items-center justify-between ">
                    <div className="leftSec w-full lg:w-[40%]">
                        <h3 className="text-[14px] sm:text-[14px] md:text-[22px] lg:text-[20px] font-[600]">Popular Products</h3>
                        <p className="text-[12px] sm:text-[14px] md:text-[13px] lg:text-[14px] font-[400]">Do not miss the current offer until the end of March</p>
                    </div>
                    <div className="rightSec w-full lg:w-[60%]">
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            variant="scrollable"
                            scrollButtons="auto"
                            aria-label="scrollable auto tabs example"
                        >
                            <Tab label="Home" />
                            <Tab label="Fashion" />
                            <Tab label="Men" />
                            <Tab label="Women" />
                            <Tab label="Girls" />
                            <Tab label="Boys" />
                            <Tab label="Kids" />
                            <Tab label="Electronic" />
                            <Tab label="Bags" />
                            <Tab label="Sneakers" />
                            <Tab label="Groceries" />
                            <Tab label="Beauty" />
                            <Tab label="Wellness" />
                            <Tab label="Jewelry" />
                        </Tabs>
                    </div>
                </div>

                <ProductSlider items={6} />


            </div>
           </section>

           <section className="p-2 lg:p-6">
                <div className="container flex flex-col lg:flex-row gap-5 ">
                    <div className="part1 w-full lg:w-[70%]">
                        <HomeSliderV2 />
                    </div>
                    <div className="part2 w-full lg:w-[30%] flex flex-col md:flex-row lg:flex-col gap-3 justify-between">
                        <BannerBoxV2 pic={bannerImg1} position="left"/>
                        <BannerBoxV2 pic={bannerImg2} position="right" />
                    </div>
                </div>
            </section>


            <section className="bg-white  pb-0 lg:py-4 lg:pt-8  pt-2 ">
                <div className="container">
                    <div className="freeShipping mb-5 py-3 w-full md:w-[80%] m-auto p-4  border-2 border-[#ff5252] rounded-md  flex flex-col lg:flex-row items-center justify-center lg:justify-between">
                        <div className="col1 flex items-center gap-4">
                            <FaShippingFast className="text-[30px] lg:text-[50px]" />
                            <span className="text-[16px] lg:text-[20px] font-[600] uppercase">Free shipping</span>
                        </div>
                        <div className="col2 font-[500]">
                            <p className="text-[16px] text-center lg:text-[20px]">Free Delivery Now On Your First Order and over $200</p>
                        </div>
                        <p className="font-bold text-[20px] lg:text-[25px]">- Only $200*</p>
                    </div>
                </div>
            </section>

            <AddBannerSliderV2 item={4} />
            {/* <AddBannerSlider items={4} /> */}


            <section className="py-5 pt-0 bg-white ">
                <div className="container">
                  <h3 className="text-[22px] font-[600]">Latest Products</h3>
                  <ProductSlider items={6} />
                 <AddBannerSlider items={3} />

                </div>
            </section>



            <section className="py-5 pt-0 bg-white ">
                <div className="container">
                  <h3 className="text-[22px] font-[600]">Feature Products</h3>
                  <ProductSlider items={6} />
                  <AddBannerSlider items={2} />

                </div>
            </section>

            <section className="py-5 pt-0 pb-8 bg-white ">
                <div className="container">
                <h3 className="text-[22px] font-[600]">Blog's</h3>
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={30}
                        slidesPerView={4}
                        navigation={windowWidth > 992 ? true : false}
                        loop={true}
                        breakpoints={{
                            330: { slidesPerView: 1, spaceBetween: 10 },
                            550: { slidesPerView: 2, spaceBetween: 10 },
                            900: { slidesPerView: 3, spaceBetween: 10 },
                            1100: { slidesPerView: 4, spaceBetween: 10 },
                          }}
                    >
                        <SwiperSlide>
                            <Link to="/">
                                <div className="item px-1 py-4 bg-white rounded-sm text-center flex flex-col items-center justify-center ">
                                   <BlogItem />
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/">
                                <div className="item px-1 py-4 bg-white rounded-sm text-center flex flex-col items-center justify-center ">
                                   <BlogItem />
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/">
                                <div className="item px-1 py-4 bg-white rounded-sm text-center flex flex-col items-center justify-center ">
                                   <BlogItem />
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/">
                                <div className="item px-1 py-4 bg-white rounded-sm text-center flex flex-col items-center justify-center ">
                                   <BlogItem />
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/">
                                <div className="item px-1 py-4 bg-white rounded-sm text-center flex flex-col items-center justify-center ">
                                   <BlogItem />
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/">
                                <div className="item px-1 py-4 bg-white rounded-sm text-center flex flex-col items-center justify-center ">
                                   <BlogItem />
                                </div>
                            </Link>
                        </SwiperSlide>
                    </Swiper>     
                </div>
            </section>  

        </>
    )
}

export default Home;