import React from 'react';
import './bannerBoxV2.scss'
import { Link } from 'react-router-dom';

const BannerBoxV2 = ({pic,position}) => {
  return (
    <div className='bannerBox w-full rounded-md overflow-hidden group relative'>
        <img src={pic} className='w-full transition-all duration-150 group-hover:scale-105' alt="banner" />
        <div className={`info absolute top-0 ${position === "left" ? 'left-0' : 'right-0'} w-[70%] h-full p-5 ${position === "left" ? '' : 'pl-15'}`}>
          <h2 className='text-[20px] font-[600] leading-[1.2]'>Samsung Gear VR camera</h2>
          <p className='text-[20px] font-[600] text-[var(--primary)]' >$129.00</p>
          <div className='w-full'>
            <Link className='underline font-[500]' to="/">SHOP NOW</Link>
          </div>
        </div>
    </div>
  )
}

export default BannerBoxV2;