import './checkout.scss'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import pImg from '../../assets/images/corn.jpeg';
import { IoBagCheckOutline } from "react-icons/io5";


const Checkout =()=>{
    return(
        <section className="py-3 px-2 lg:py-10">
            <div className="container flex flex-col lg:flex-row gap-5">
                <div className="leftCol w-full lg:w-[75%]">
                    <div className="card bg-white p-5 shadow-md rounded-md w-full ">
                        <h1>Billing Details</h1>
                        <form className="w-full mt-5">

                           <div className="flex items-center gap-5 pb-5">
                              <div className="col w-[50%]">
                                  <TextField
                                     variant="outlined"
                                     label='Full Name'
                                     size="small"
                                     fullWidth
                                  />
                              </div>
                              <div className="col w-[50%]">
                                  <TextField
                                     type="email"
                                     variant="outlined"
                                     label='Enter Email'
                                     size="small"
                                     fullWidth
                                  />
                              </div>
                           </div>

                           <h6 className="mb-3 font-[500] text-[14px]">Street Address *</h6>
                           <div className="col w-[100%] pb-5">
                                  <TextField
                                     variant="outlined"
                                     label='House No and Street Name'
                                     size="small"
                                     fullWidth
                                  />
                           </div>

                           <div className="col w-[100%] pb-5">
                                  <TextField
                                     variant="outlined"
                                     label='Apartment, suite, unit, etc (optional)'
                                     size="small"
                                     fullWidth
                                  />
                           </div>

                           <h6 className="mb-3 font-[500] text-[14px]">Town / City</h6>
                           <div className="flex items-center gap-5 pb-5">
                              <div className="col w-[50%]">
                                  <TextField
                                     variant="outlined"
                                     label='Town / City*'
                                     size="small"
                                     fullWidth
                                  />
                              </div>
                              <div className="col w-[50%]">
                                  <TextField
                                     type="text"
                                     variant="outlined"
                                     label='State / Country*'
                                     size="small"
                                     fullWidth
                                  />
                              </div>
                           </div>

                           <h6 className="mb-3 font-[500] text-[14px]">Postcode / ZIP*</h6>
                           <div className="col w-[100%] pb-5">
                                  <TextField
                                     variant="outlined"
                                     label='Postcode / ZIP*'
                                     size="small"
                                     fullWidth
                                  />
                           </div>
                           <div className="flex items-center gap-5 pb-5">
                              <div className="col w-[50%]">
                                  <TextField
                                     variant="outlined"
                                     label='Phone Number'
                                     size="small"
                                     fullWidth
                                  />
                              </div>
                              <div className="col w-[50%]">
                                  <TextField
                                     type="email"
                                     variant="outlined"
                                     label='Email Address'
                                     size="small"
                                     fullWidth
                                  />
                              </div>
                           </div>
                           

                        </form>
                    </div>
                </div>
                <div className="leftCol w-full lg:w-[30%]">
                    <div className="card shadow-md bg-white p-5 rounded-md">
                        <h2 className="text-[22px]">Your Order</h2>

                        <div className="flex items-center justify-between py-3 border-t border-b border-[rgba(0,0,0,0.1)]">
                           <span className="text-[14px] font-[600]">Product</span>
                           <span className="text-[14px] font-[600]">Subtotal</span>
                        </div>


                        <div className="scroll my-3 max-h-[250px] overflow-y-auto overflow-x-hidden pr-2">

                            <div className="flex items-center justify-between py-2">
                                <div className="part1 flex items-center gap-3">
                                    <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                                        <img className="w-full transition-all group-hover:scale-105" src={pImg} alt="" />
                                    </div>
                                    <div className="info">
                                        <h4 className="text-[13px]">Free Delivery Now for...</h4>
                                        <span className="text-[12px]">Qty  :  2</span>
                                    </div>
                                    <span className="text-[14px] font-[500]">13,000.00</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between py-2">
                                <div className="part1 flex items-center gap-3">
                                    <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                                        <img className="w-full transition-all group-hover:scale-105" src={pImg} alt="" />
                                    </div>
                                    <div className="info">
                                        <h4 className="text-[13px]">Free Delivery Now for...</h4>
                                        <span className="text-[12px]">Qty  :  2</span>
                                    </div>
                                    <span className="text-[14px] font-[500]">13,000.00</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between py-2">
                                <div className="part1 flex items-center gap-3">
                                    <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                                        <img className="w-full transition-all group-hover:scale-105" src={pImg} alt="" />
                                    </div>
                                    <div className="info">
                                        <h4 className="text-[13px]">Free Delivery Now for...</h4>
                                        <span className="text-[12px]">Qty  :  2</span>
                                    </div>
                                    <span className="text-[14px] font-[500]">13,000.00</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between py-2">
                                <div className="part1 flex items-center gap-3">
                                    <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                                        <img className="w-full transition-all group-hover:scale-105" src={pImg} alt="" />
                                    </div>
                                    <div className="info">
                                        <h4 className="text-[13px]">Free Delivery Now for...</h4>
                                        <span className="text-[12px]">Qty  :  2</span>
                                    </div>
                                    <span className="text-[14px] font-[500]">13,000.00</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between py-2">
                                <div className="part1 flex items-center gap-3">
                                    <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                                        <img className="w-full transition-all group-hover:scale-105" src={pImg} alt="" />
                                    </div>
                                    <div className="info">
                                        <h4 className="text-[13px]">Free Delivery Now for...</h4>
                                        <span className="text-[12px]">Qty  :  2</span>
                                    </div>
                                    <span className="text-[14px] font-[500]">13,000.00</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between py-2">
                                <div className="part1 flex items-center gap-3">
                                    <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                                        <img className="w-full transition-all group-hover:scale-105" src={pImg} alt="" />
                                    </div>
                                    <div className="info">
                                        <h4 className="text-[13px]">Free Delivery Now for...</h4>
                                        <span className="text-[12px]">Qty  :  2</span>
                                    </div>
                                    <span className="text-[14px] font-[500]">13,000.00</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between py-2">
                                <div className="part1 flex items-center gap-3">
                                    <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                                        <img className="w-full transition-all group-hover:scale-105" src={pImg} alt="" />
                                    </div>
                                    <div className="info">
                                        <h4 className="text-[13px]">Free Delivery Now for...</h4>
                                        <span className="text-[12px]">Qty  :  2</span>
                                    </div>
                                    <span className="text-[14px] font-[500]">13,000.00</span>
                                </div>
                            </div>

                        </div>

                        <Button className='w-full btn-org flex items-center gap-3'><IoBagCheckOutline className="text-[18px]" />Checkout</Button>

                       

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Checkout;