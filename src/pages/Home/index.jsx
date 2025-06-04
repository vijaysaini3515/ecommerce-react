import React,{useState} from "react";
import './home.scss'
import AddBannerSlider from "../../components/AddBannerSlider";
import HomeCartSlider from "../../components/HomeCartSlider";
import HomeSlider from "../../components/HomeSlider";
import { FaShippingFast } from "react-icons/fa";

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ProductSlider from "../../components/ProductSlider";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Autoplay } from 'swiper/modules';
import { Link } from "react-router-dom";
import BlogItem from "../../components/BlogItem";
import Footer from "../../components/Footer";


const Home = () =>{
    const [value, setValue] = useState(0);

    const handleChange = (event ,newValue) => {
      setValue(newValue);
    };





    return(
        <>  
           <HomeSlider />
           <HomeCartSlider />

           <section className="bg-white py-8">
            <div className="container">
                <div className="flex items-center justify-between">
                    <div className="leftSec">
                        <h3 className="text-[22px] font-[600]">Popular Products</h3>
                        <p className="text-[14px] font-[400]">Do not miss the current offer until the end of March</p>
                    </div>
                    <div className="rightSec w-[60%]">
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


            <section className="bg-white py-12 pt-2 ">
                <div className="container">
                    <div className="freeShipping mb-5 py-3 w-[80%] m-auto p-4  border-2 border-[#ff5252] rounded-md  flex items-center justify-between">

                        <div className="col1 flex items-center gap-4">
                            <FaShippingFast className="text-[50px]" />
                            <span className="text-[18px] font-[600] uppercase">Free shipping</span>
                        </div>

                        <div className="col2 font-[500]">
                            <p className="">Free Delivery Now On Your First Order and over $200</p>
                        </div>

                        <p className="font-bold text-[25px]">- Only $200*</p>

                    </div>
                    <AddBannerSlider items={4} />

                </div>
            </section>

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
                        navigation={true}
                        loop={true}
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

            <Footer />



           
            <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
        </>
    )
}

export default Home;