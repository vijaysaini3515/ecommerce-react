import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/images/grape2.jpg';
import { IoClose } from "react-icons/io5";
import { GoTriangleDown } from "react-icons/go";
import Rating from '@mui/material/Rating';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';



const CartItem = ({size,qty}) => {
  const [sizeValue,setSizeValue] = useState(size);
  const [qtyValue,setQtyValue] = useState(qty);

  const [anchorSizeEl, setSizeAnchorEl] =useState(null);
  const [anchorQtyEl, setQtyAnchorEl] =useState(null);

  const openSize = Boolean(anchorSizeEl);
  const openQty = Boolean(anchorQtyEl);

//   size menu functionality
  const handleSizeClick = (event) => {
    setSizeAnchorEl(event.currentTarget);
  };
  const handleSizeClose = (value) => {
    setSizeAnchorEl(null);
    if(value !== null){
        setSizeValue(value)
    }
  };

// qty menu functionality 
const handleQtyClick = (event) => {
    setQtyAnchorEl(event.currentTarget);
  };
  const handleQtyClose = (value) => {
    setQtyAnchorEl(null);
    if(value !== null){
        setQtyValue(value)
    }
  };


    return (
      <div className="cartItem w-full p-3 flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)]">
        <div className="img w-[15%] rounded-sm overflow-hidden">
          <Link className="group" to="/product/0">
            <img
              className="w-full group-hover:scale-105 transition-all"
              src={img1}
              alt=""
            />
          </Link>
        </div>
  
        <div className="info w-[85%] relative">
          <IoClose className="text-[22px] cursor-pointer link transition-all absolute top-0 right-0" />
          <span>Mango</span>
          <h3 className="link transition-all">
            <Link to="/product/0">Dasheri Mango</Link>
          </h3>
          <Rating name="size-small" defaultValue={4} size="small" />
  
          <div className="flex items-center gap-3 my-1">
            <div>
                <span onClick={handleSizeClick} className="flex items-center justify-center text-[12px] font-[500] bg-[#f1f1f1] py-1 px-2 cursor-pointer rounded-sm">
                Size : {sizeValue} <GoTriangleDown />
                </span>
                    <Menu
                        id="size-menu"
                        anchorEl={anchorSizeEl}
                        open={openSize}
                        onClose={()=>handleSizeClose(null)}
                        sx={{
                            '.MuiList-root':{
                                padding:"0px",
                                fontSize:"10px"
                            }
                        }}
                    >
                        <MenuItem onClick={()=>handleSizeClose('s')}>S</MenuItem>
                        <MenuItem onClick={()=>handleSizeClose('M')}>M</MenuItem>
                        <MenuItem onClick={()=>handleSizeClose('L')}>L</MenuItem>
                        <MenuItem onClick={()=>handleSizeClose('XL')}>XL</MenuItem>
                        <MenuItem onClick={()=>handleSizeClose('XXL')}>XXL</MenuItem>
                    </Menu>
            </div>

            <div>
                <span onClick={handleQtyClick} className="flex items-center justify-center text-[12px] font-[500] bg-[#f1f1f1] py-1 px-2 cursor-pointer rounded-sm">
                Qty : {qtyValue} <GoTriangleDown />
                </span>
                    <Menu
                        id="size-menu"
                        anchorEl={anchorQtyEl}
                        open={openQty}
                        onClose={()=>handleQtyClose(null)}
                        sx={{
                            '.MuiList-root':{
                                padding:"0px",
                                fontQty:"10px"
                            }
                        }}
                    >
                        <MenuItem onClick={()=>handleQtyClose('1')}>1</MenuItem>
                        <MenuItem onClick={()=>handleQtyClose('2')}>2</MenuItem>
                        <MenuItem onClick={()=>handleQtyClose('3')}>3</MenuItem>
                        <MenuItem onClick={()=>handleQtyClose('4')}>4</MenuItem>
                        <MenuItem onClick={()=>handleQtyClose('5')}>5</MenuItem>
                        <MenuItem onClick={()=>handleQtyClose('6')}>6</MenuItem>
                        <MenuItem onClick={()=>handleQtyClose('7')}>7</MenuItem>
                        <MenuItem onClick={()=>handleQtyClose('8')}>8</MenuItem>
                        <MenuItem onClick={()=>handleQtyClose('9')}>9</MenuItem>
                        <MenuItem onClick={()=>handleQtyClose('10')}>10</MenuItem>
                    </Menu>
            </div>
            
          </div>
  
          <div className="flex items-center gap-5">
            <span className="price text-[14px] font-[600]">$52.90</span>
            <span className="oldPrice text-[14px] font-[500] line-through text-gray-500">
              $58.00
            </span>
            <span className="oldPrice text-[14px] font-[500] text-[var(--primary)]">
              55% OFF
            </span>
          </div>
        </div>
      </div>
    );
  };
  
  export default CartItem;
  