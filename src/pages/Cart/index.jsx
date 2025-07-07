import Button from '@mui/material/Button';
import { IoBagCheckSharp } from "react-icons/io5";
import CartItem from './cartItem';



const Cart =()=>{
    return(
        <section className="section py-4 lg:py-10 ">
           <div className="container w-[80%] max-w-[80%] flex flex-col lg:flex-row gap-5">

            <div className="leftPart w-full lg:w-[70%]">
               
                <div className="shadow-sm rounded-sm  bg-white">
                    <div className='py-2 px-3 border-b border-[rgba(0,0,0,0.5)]'>
                        <h2>Your Cart</h2>
                        <p className="!mt-0">There are <span className="text-[var(--primary)] font-[600]">2</span> products in your cart</p>
                    </div>

                    <CartItem size='S' qty="1" />
                    <CartItem size='S' qty="1" />
                    <CartItem size='S' qty="1" />
                    <CartItem size='S' qty="1" />
                    <CartItem size='S' qty="1" />
                    <CartItem size='S' qty="1" />

                </div>

            </div>

            <div className="rightPart w-full lg:w-[30%] h-[280px]  sticky top-[0px]">
                <div className="shadow-sm rounded-sm p-5 bg-white">
                    <h3 className='pb-3'>Cart Totals</h3>
                    <hr className='border-[rgba(0,0,0,0.5)]' />
                    <p className='flex items-center justify-between'>
                        <span className='text-[14px] font-[500]'>Subtotal</span>
                        <span className='font-bold'>1,3000.00</span>
                    </p>
                    <p className='flex items-center justify-between'>
                        <span className='text-[14px] font-[500]'>Shpping</span>
                        <span className='font-bold'>Free</span>
                    </p>
                    <p className='flex items-center justify-between'>
                        <span className='text-[14px] font-[500]'>Estimated for</span>
                        <span className='font-bold'>India</span>
                    </p>
                    <p className='flex items-center justify-between'>
                        <span className='text-[14px] font-[500]'>Total</span>
                        <span className='font-bold'>13,000.00</span>
                    </p>
                    <br/>
                    <Button className='btn-org w-full flex items-center gap-2 !text-[18px]'>Checkout <IoBagCheckSharp className='text-[16px]' /> </Button>
                 </div>
            </div>


           </div>
        </section>
    )
};

export default Cart;