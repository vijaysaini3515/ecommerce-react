import React from 'react';
import './productItem.scss';
import coverImg1 from '../../assets/images2/coverImg2.jpg';
import hoverImg1 from '../../assets/images2/hoverImg2.jpg';

import { Link } from 'react-router-dom';
import { Button, Rating, Tooltip } from '@mui/material';
import { MdZoomOutMap } from "react-icons/md";
import { IoIosGitCompare } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";


const ProductItem = () => {
  return (
    <div className="productItem shadow-lg rounded-md overflow-hidden border-1 border-[rgba(0,0,0,0.1)]">
       <div className="imageWrapper w-[100%] rounded-md relative group"> {/* h-[250px] */}
        <div className='img overflow-hidden'>
            <img className='w-full rounded-md object-cover' src={coverImg1} alt="cover" />
            <img className='w-full rounded-md object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:scale-105' src={hoverImg1} alt="hover" />
        </div>

          <span className='bg-[var(--primary)] flex items-center p-1 font-[600] text-[12px] rounded-2xl absolute top-[10px] left-[15px] z-50 text-white'>8%</span>

          <div className="actions w-[50px] transition-all duration-200 absolute top-[-200px] group-hover:top-[10px] right-[5px] z-50 flex flex-col items-center gap-2 opacity-0 group-hover:opacity-100">
            <Button className='!w-[20] !min-w-[30px] !h-[20] !bg-white !rounded-full !text-black  hover:!bg-[var(--primary)] hover:!text-white group'>
              <Tooltip title="Zoom" placement="right" arrow>
                <MdZoomOutMap className='text-[18px] font-[900]  !text-black group-hover:text-white' />
              </Tooltip>    
            </Button>
            <Button className='!w-[20] !min-w-[30px] !h-[20] !bg-white !rounded-full !text-black hover:!bg-[var(--primary)] hover:!text-white group'>
              <Tooltip title="Like" placement="right" arrow>
                <FaRegHeart className='text-[18px] font-[900] !text-black group-hover:text-white' />
              </Tooltip>    
            </Button>
            <Button className='!w-[20] !min-w-[30px] !h-[20] !bg-white !rounded-full !text-black hover:!bg-[var(--primary)] hover:!text-white group'>
              <Tooltip title="Compare" placement="right" arrow>
                <IoIosGitCompare className='text-[18px] font-[900] !text-black group-hover:text-white' />
              </Tooltip>
            </Button>
          </div>

       </div>
       <div className="info p-3 py-4">
         <h6 className='text-[12px] font-[500]'><Link to="/" className="link">Tecno</Link></h6>
         <h3 className='text-[13px] title font-[500] mt-1 mb-1 text-[#000]'><Link to="/" className="link">Tecno POP 8 64 GB, 4 GB RAM, Black, Mobile Phone</Link></h3>
         <Rating size='small' defaultValue={4} readOnly />
         <div className="flex items-center gap-5 text-gray-500">
            <span className='oldPrice text-[12px] font-[500] '>$58.00</span>
            <span className='price text-[15px] font-[600] text-[var(--primary)]'>$52.90</span>
         </div>
       </div>
    </div>
  )
}

export default ProductItem;
