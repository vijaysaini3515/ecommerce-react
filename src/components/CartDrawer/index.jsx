import React from "react";
import './cartDrawer.scss';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Img from '../../assets/images/capsicum.jpeg'
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartDrawer, selectCartDrawerState } from '../../features/cartSlice/cartSlice'
import { MdDeleteOutline } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const CartDrawer = () => {
  const navigate =useNavigate();
  const dispatch = useDispatch();
  const openCartDrawer = useSelector(selectCartDrawerState);


  const toggleCartDrawerHandler = (newOpen) => {
    dispatch(toggleCartDrawer(newOpen));  // Dispatch action
  };

  return (
    <div>
       <Drawer 
         open={openCartDrawer} 
         onClose={()=>toggleCartDrawerHandler(false)}
         anchor="right"
         sx={{
          width: {
            xs: 300,
            sm: 350,
            //  overflow:"hidden"
          },
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: {
              xs: 300,
              sm: 350,
              // overflow:"hidden"
            },
            boxSizing: 'border-box'
          }
        }}
      
       >

        <div className="flex items-center justify-between p-1 lg:py-3 px-4 gap-3 border-b border-[rgba(0,0,0,0.4)]">
          <h4>Shopping Cart (3)</h4>
          <IoClose onClick={() => toggleCartDrawerHandler(false)}  className='text-[20px] cursor-pointer' />
        </div>

        <div className="h-full flex flex-col items-center justify-between">

          <div className="scroll w-full max-h-[500px] overflow-y-auto overflow-x-hidden">

            <div className="cartItem py-3 px-4 w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)]">
              <div className="img w-[25%] h-[80px] overflow-hidden rounded-sm">
                <Link to='/product/9090' className="block group">
                  <img src={Img} className="w-full group-hover:scale-105" alt="" />
                </Link>
              </div>
              <div className="info w-[75%] pr-5 relative">
              <Link className="link transition-all" to='/product/9090'><h4 className="text-[12px] lg:text-[14px] font-[500]">capsicum afasd  sdfasdf  asdfasdf  asdfasdf</h4></Link>
                <p className="flex items-center gap-4 !mb-1 !mt-1">
                  <span>QTY : <span>4</span> </span>
                  <span className="text-[var(--primary)] font-bold">Price : $25</span>
                </p>
                <MdDeleteOutline className="link absolute top-[10px] right-[10px] text-[20px] transition-all" />
              </div>
            </div>

            <div className="cartItem py-3 px-4 w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)]">
              <div className="img w-[25%] h-[80px] overflow-hidden rounded-sm">
                <Link to='/product/9090' className="block group">
                  <img src={Img} className="w-full group-hover:scale-105" alt="" />
                </Link>
              </div>
              <div className="info w-[75%] pr-5 relative">
              <Link className="link transition-all" to='/product/9090'><h4 className="text-[12px] lg:text-[14px] font-[500]">capsicum afasd  sdfasdf  asdfasdf  asdfasdf</h4></Link>
                <p className="flex items-center gap-4 !mb-1 !mt-1">
                  <span>QTY : <span>4</span> </span>
                  <span className="text-[var(--primary)] font-bold">Price : $25</span>
                </p>
                <MdDeleteOutline className="link absolute top-[10px] right-[10px] text-[20px] transition-all" />
              </div>
            </div>

            <div className="cartItem py-3 px-4 w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)]">
              <div className="img w-[25%] h-[80px] overflow-hidden rounded-sm">
                <Link to='/product/9090' className="block group">
                  <img src={Img} className="w-full group-hover:scale-105" alt="" />
                </Link>
              </div>
              <div className="info w-[75%] pr-5 relative">
              <Link className="link transition-all" to='/product/9090'><h4 className="text-[12px] lg:text-[14px] font-[500]">capsicum afasd  sdfasdf  asdfasdf  asdfasdf</h4></Link>
                <p className="flex items-center gap-4 !mb-1 !mt-1">
                  <span>QTY : <span>4</span> </span>
                  <span className="text-[var(--primary)] font-bold">Price : $25</span>
                </p>
                <MdDeleteOutline className="link absolute top-[10px] right-[10px] text-[20px] transition-all" />
              </div>
            </div>

            <div className="cartItem py-3 px-4 w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)]">
              <div className="img w-[25%] h-[80px] overflow-hidden rounded-sm">
                <Link to='/product/9090' className="block group">
                  <img src={Img} className="w-full group-hover:scale-105" alt="" />
                </Link>
              </div>
              <div className="info w-[75%] pr-5 relative">
              <Link className="link transition-all" to='/product/9090'><h4 className="text-[12px] lg:text-[14px] font-[500]">capsicum afasd  sdfasdf  asdfasdf  asdfasdf</h4></Link>
                <p className="flex items-center gap-4 !mb-1 !mt-1">
                  <span>QTY : <span>4</span> </span>
                  <span className="text-[var(--primary)] font-bold">Price : $25</span>
                </p>
                <MdDeleteOutline className="link absolute top-[10px] right-[10px] text-[20px] transition-all" />
              </div>
            </div>

            <div className="cartItem py-3 px-4 w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)]">
              <div className="img w-[25%] h-[80px] overflow-hidden rounded-sm">
                <Link to='/product/9090' className="block group">
                  <img src={Img} className="w-full group-hover:scale-105" alt="" />
                </Link>
              </div>
              <div className="info w-[75%] pr-5 relative">
              <Link className="link transition-all" to='/product/9090'><h4 className="text-[12px] lg:text-[14px] font-[500]">capsicum afasd  sdfasdf  asdfasdf  asdfasdf</h4></Link>
                <p className="flex items-center gap-4 !mb-1 !mt-1">
                  <span>QTY : <span>4</span> </span>
                  <span className="text-[var(--primary)] font-bold">Price : $25</span>
                </p>
                <MdDeleteOutline className="link absolute top-[10px] right-[10px] text-[20px] transition-all" />
              </div>
            </div>

            <div className="cartItem py-3 px-4 w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)]">
              <div className="img w-[25%] h-[80px] overflow-hidden rounded-sm">
                <Link to='/product/9090' className="block group">
                  <img src={Img} className="w-full group-hover:scale-105" alt="" />
                </Link>
              </div>
              <div className="info w-[75%] pr-5 relative">
              <Link className="link transition-all" to='/product/9090'><h4 className="text-[12px] lg:text-[14px] font-[500]">capsicum afasd  sdfasdf  asdfasdf  asdfasdf</h4></Link>
                <p className="flex items-center gap-4 !mb-1 !mt-1">
                  <span>QTY : <span>4</span> </span>
                  <span className="text-[var(--primary)] font-bold">Price : $25</span>
                </p>
                <MdDeleteOutline className="link absolute top-[10px] right-[10px] text-[20px] transition-all" />
              </div>
            </div>

            

          </div>


          <div className="bottom-info py-3 px-4 w-full border-t border-[rgba(0,0,0,0.5)] flex flex-col items-center justify-between">
              <div className="flex items-center justify-between w-full">
                  <span className="text-[14px] font-[400]">6 item</span> 
                  <span  className="text-[var(--primary)] font-bold">₹14,587.00</span>
              </div>
              <div className="flex items-center justify-between w-full">
                  <span className="text-[14px] font-[400]">Total (tax excl.)</span> 
                  <span className="text-[var(--primary)] font-bold" >₹14,587.00</span>
              </div>
              <div  className="w-full flex items-center gap-3 m-2">
                <Link to='/cart' className="d-block w-[50%]"><Button className="btn-org w-full">View Cart</Button></Link> 
                <Link to='/checkout' className="d-block w-[50%]"><Button className="btn-org w-full">Checkout</Button></Link> 
              </div>
          </div>

        </div>  

      

       

        

      </Drawer>
    </div>
  );
};

export default CartDrawer;
