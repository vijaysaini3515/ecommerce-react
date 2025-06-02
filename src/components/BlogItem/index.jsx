import React from 'react';
import subBanner1 from '../../assets/images2/sub-banner-1.jpg';
import { FaRegClock } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaHandPointRight } from "react-icons/fa";

const BlogItem = () => {
  return (
    <div className='blogItem group'>
        <div className="imageWrapper w-full overflow-hidden rounded-md cursor-pointer relative">
         <img src={subBanner1} className='w-full transition-all group-hover:scale-105 group-hover:rotate-1' alt="blog-img" />
         <span className='absolute bottom-[10px] right-[10px] flex items-center gap-1 bg-[var(--primary)] p-1 text-white rounded-md text-[12px] font-[500] '>
            <FaRegClock /> 1 june 2025
         </span>
        </div>
        <div className="info py-4">
        <Link to="/"><h2 className='link text-[15px] font-[600] text-black text-left'>Lorem ipsum dolor sit amet.</h2></Link>
          <h3 className='mb-2 text-[13px] font-[500] text-[rgba(0,0,0,0.8)] text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore repellat deleniti soluta tempore vitae illum....</h3>
          <Link to="/" className='link text-left flex flex-start items-center gap-2 text-[14px] font-[500] underline'>Read More <FaHandPointRight /></Link>
        </div>
    </div>
  )
}

export default BlogItem;