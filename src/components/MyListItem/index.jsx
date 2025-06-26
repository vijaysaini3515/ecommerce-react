import React from 'react';
import {Link} from 'react-router-dom';
import productImg from '../../assets/images/mango.jpeg';
import { IoClose } from "react-icons/io5";
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';

const MyListItem = () => {
  return (
    <div className='cartItem w-full p-3 flex items-center gap-4 border-b border-[rgba(0,0,0,0.4)]'>
        <div className="img w-[15%] rounded-md overflow-hidden">
            <Link to='/product/9090' className='group'>
                <img className='w-full group-hover:scale-105 transition-all' src={productImg} alt="" />
            </Link>
        </div>
        <div className="info w-[85%] h-full relative">
            <IoClose className='absolute top-0 right-0 cursor-pointer text-[22px] link transition-all' />
            <span className="text-[13px]">Sangri</span>
            <h3 className="text-[15px]">
                <Link className="link">Embroidered Satin Saree Lorem ipsum dolor sit</Link>
            </h3>
            <Rating defaultValue={4} size='small' readOnly />
            <div className="flex items-center gap-4 mt-1 ">
                <span className='price text-[14px] font-[600]'>$38.00</span>
                <span className='oldPrice line-through text-gray-400 text-[14px] font-[600]'>$58.00</span>
                <span className='price text-[14px] text-[var(--primary)] font-[600] '>15%off</span>
            </div>
            <Button className='btn-lg btn-org !mt-2'>Add To Cart</Button>
        </div>
    </div>
  )
}

export default MyListItem;