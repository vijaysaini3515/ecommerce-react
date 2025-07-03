import React,{useState} from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import QtyBox from '../QtyBox';
import { FaRegHeart } from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';



const ProductDetailsComp = () => {
    const [productAction, setProductAction] = useState(null);
    return (
        <>
            <h1 className='mb-2 text-[18px] lg:text-[24px] font-[600]'>Embroidered Satin Saree Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, voluptatem.</h1>

            <div className="flex items-center gap-3">
                <span className='text-gray-400 text-[13px]'>
                    Brands :
                    <span className='text-black font-[500] opacity-75'>
                    all about you
                    </span>
                </span>
                <Rating name="size-small" value={5} size="small" readOnly />
                <span className='text-[13px] cursor-pointer'>Review(10)</span>
            </div>

            <div className="mt-4  flex items-center gap-4 text-gray-500">
                <span className='oldPrice text-[12px] font-[500] line-through'>$58.00</span>
                <span className='price text-[15px] font-[600] text-[var(--primary)]'>$52.90</span>
                <span className='text-[14px]'>Available in stock : <span className='text-[14px] text-green-600 font-bold'>90 Items</span></span>
            </div>


            <p className='mt-3 mb-5 lg:pr-10'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium officia dolor rem nostrum amet nisi quos at doloribus sunt quod recusandae dignissimos laudantium nemo, laborum voluptatibus asperiores iste dicta doloremque laboriosam beatae ex magni quaerat eius quis. Maiores, recusandae voluptatibus magnam dolorem quis velit amet.
            </p>

            <div className="flex items-center gap-3 mb-4">
                <span className='text-[16px]'>Size : </span>
                <div className="actions flex items-center gap-1">
                    <Button onClick={() => setProductAction(0)} className={`${productAction === 0 ? '!bg-[var(--primary)] !text-[#FFF]' : null}`}>S</Button>
                    <Button onClick={() => setProductAction(1)} className={`${productAction === 1 ? '!bg-[var(--primary)] !text-[#FFF]' : null}`} >M</Button>
                    <Button onClick={() => setProductAction(2)} className={`${productAction === 2 ? '!bg-[var(--primary)] !text-[#FFF]' : null}`} >L</Button>
                    <Button onClick={() => setProductAction(3)} className={`${productAction === 3 ? '!bg-[var(--primary)] !text-[#FFF]' : null}`} >XL</Button>
                </div>
            </div>

            <p className='mt-5 mb-2 text-[14px] text-[#000]'>Free Shipping (Est. Delivery Time 2-3 Days)</p>

            <div className="flex items-center gap-4 py-4">
                <div className="qtyBoxWrapper w-[70px]">
                    <QtyBox />
                </div>
                <Button className="btn-org flex gap-2">
                    <MdOutlineShoppingCart className='text-[22px]' /> Add To Cart
                </Button>
            </div>

            <div className="flex items-center gap-4 mt-4">
                <span className='link flex items-center gap-2 text-[15px] cursor-pointer font-[500]'>
                    <FaRegHeart className='text-[18px]' /> Add to cart
                </span>
                <span className='link flex items-center gap-2 text-[15px] cursor-pointer font-[500]'>
                    <IoIosGitCompare className='text-[18px]' /> Add to compare
                </span>
            </div>
        </>
    )
};

export default ProductDetailsComp;