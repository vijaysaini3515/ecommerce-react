import React from 'react';
import './footer.scss'
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineSettingsBackupRestore } from "react-icons/md";
import { BsWallet2 } from "react-icons/bs";
import { IoGiftOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { RiChatAiLine } from "react-icons/ri";
import { Button } from '@mui/material';
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

import cardImg1 from '../../assets/images2/paypal.png';
import cardImg2 from '../../assets/images2/master_card.png';
import cardImg3 from '../../assets/images2/visa.png';
import cardImg4 from '../../assets/images2/carte_bleue.png';
import cardImg5 from '../../assets/images2/card1.png';

import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import CartDrawer from '../CartDrawer';

const Footer = () => {
  return (
    <>
        <footer className='py-6 bg-[#fafafa] '>
            <div className="container">
                {/* flex w-full items-center justify-center gap-10 lg:gap-2 py-8 pb-8 overflow-x-scroll lg:overflow-hidden */}
                <div className=" w-full flex items-center justify-start lg:justify-center gap-1 lg:gap-10 overflow-x-scroll xl:overflow-hidden">

                <div className="lg:w-[15%] min-w-[200px] flex items-center justify-center flex-col group ">
                        <FaShippingFast className='text-[30px] lg:text-[40px] transition-all duration-300 group-hover:text-[var(--primary)] group-hover:-translate-y-1' />
                        <h3 className='text-[16px] font-[600] mt-3'>Free Shipping</h3>
                        <p className='text-[12px] font-[500]'>For all orders over $100</p>
                    </div>

                    <div className="flex items-center justify-center flex-col group lg:w-[15%] min-w-[200px]">
                        <MdOutlineSettingsBackupRestore className='text-[30px] lg:text-[40px] transition-all duration-300 group-hover:text-[var(--primary)] group-hover:-translate-y-1' />
                        <h3 className='text-[13px] lg:text-[16px] font-[600] mt-1 lg:mt-3'>30 Days Return</h3>
                        <p className='text-[10px] lg:text-[12px] font-[500]'>For an Exchange Product</p>
                    </div>

                    

                    <div className="flex items-center justify-center flex-col group lg:w-[15%] min-w-[200px]">
                        <BsWallet2 className='text-[30px] lg:text-[40px] transition-all duration-300 group-hover:text-[var(--primary)] group-hover:-translate-y-1' />
                        <h3 className='text-[16px] font-[600] mt-3'>Secure Payment</h3>
                        <p className='text-[12px] font-[500]'>Payment card Accepted</p>
                    </div>

                    <div className="flex items-center justify-center flex-col group  lg:w-[15%] min-w-[200px]">
                        <IoGiftOutline className='text-[30px] lg:text-[40px] transition-all duration-300 group-hover:text-[var(--primary)] group-hover:-translate-y-1' />
                        <h3 className='text-[16px] font-[600] mt-3'>Special Gifts</h3>
                        <p className='text-[12px] font-[500]'>Our First Product Order</p>
                    </div>

                    <div className="flex items-center justify-center flex-col group  lg:w-[15%] min-w-[200px]">
                        <BiSupport className='text-[30px] lg:text-[40px] transition-all duration-300 group-hover:text-[var(--primary)] group-hover:-translate-y-1' />
                        <h3 className='text-[16px] font-[600] mt-3'>Support 24/7</h3>
                        <p className='text-[12px] font-[500]'>Contact US Anytime</p>
                    </div>

                </div>

                <br/>

                <hr />

                <div className="footer flex py-8">

                    <div className="part1 w-[25%]  border-r border-[rgba(133,133,133,0.53)]">
                        <h2 className='text-[18px] font-[600] mb-4'>Contact us</h2>
                        <p className='text-[13px] font-[400] pb-4'>
                            classyShop - Mega Super store <br/> 
                            507-Union trade center
                            France
                        </p>
                        <Link  className='link text-[13px]' to="mailto:someone@example.com"></Link>
                        <span className='text-[22px] font-[600] block w-full mt-3 mb-5 text-[var(--primary)]'>(+91) 2439-852-095</span>
                        <div className="flex items-center gap-2">
                            <RiChatAiLine className='text-[40px] text-[var(--primary)]' />
                            <span  className='text-[16px] font-[600]' >Online chat <br/> Get Expert Help</span>
                        </div>
                    </div>

                    <div className="part2 w-[40%] flex pl-5">
                        <div className="part2_col1 w-[50%]">
                            <h2 className='text-[18px font-[600] mb-4'>Products</h2>
                            <ul className='list'>
                                <li className='list-none text-[14px] w-fill mb-2'>
                                    <Link className='link' to="/">Price drop</Link>
                                </li>
                                <li className='list-none text-[14px] w-fill mb-2'>
                                    <Link className='link' to="/">New products</Link>
                                </li>
                                <li className='list-none text-[14px] w-fill mb-2'>
                                    <Link className='link' to="/">Best sales</Link>
                                </li>
                                <li className='list-none text-[14px] w-fill mb-2'>
                                    <Link className='link' to="/">Contact Us</Link>
                                </li>
                                <li className='list-none text-[14px] w-fill mb-2'>
                                    <Link className='link' to="/">Sitemap</Link>
                                </li>
                                <li className='list-none text-[14px] w-fill mb-2'>
                                    <Link className='link' to="/">Stores</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="part2_col2 w-[50%]">
                            <h2 className='text-[18px font-[600] mb-4'>Our Company</h2>
                            <ul className='list'>
                                <li className='list-none text-[14px] w-fill mb-2'>
                                    <Link className='link' to="/">Delivery</Link>
                                </li>
                                <li className='list-none text-[14px] w-fill mb-2'>
                                    <Link className='link' to="/">Legal Notic</Link>
                                </li>
                                <li className='list-none text-[14px] w-fill mb-2'>
                                    <Link className='link' to="/">Terms and conditions of use</Link>
                                </li>
                                <li className='list-none text-[14px] w-fill mb-2'>
                                    <Link className='link' to="/">About Us</Link>
                                </li>
                                <li className='list-none text-[14px] w-fill mb-2'>
                                    <Link className='link' to="/">Secure Payment</Link>
                                </li>
                                <li className='list-none text-[14px] w-fill mb-2'>
                                    <Link className='link' to="/">Login</Link>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className="part2 w-[35%] flex flex-col pr-8 pl-5">
                        <h2 className='text-[18px] font-[600] mb-4'>Subscribe to newsletter</h2>
                        <p className='text-[13px] mb-2'>Subscribe to our latest newsletter to get news about special discounts.</p>
                        <form>
                            <input type="text" className='w-full h-[45px] border outline-none pl-4 pr-4  rounded-sm mb-4 focus:border-[rgba(0,0,0,0.1)]' placeholder='enter your email ...' />
                            <Button className='btn-org'>SUBSCRIBE</Button>
                            <FormControlLabel sx={{'& .MuiCheckbox-root.Mui-checked': {color:'var(--primary)'},'.MuiFormControlLabel-label':{fontSize:"12px",color:"rgba(0,0,0,0.7)"}}} control={<Checkbox defaultChecked />} label="I am agree to the terms and conditions and the privacy policy" />
                        </form>
                    </div>

                </div>
            </div>
        </footer>

        <div className="bottomStrip border-t border-[rgba(0,0,0,0.1)] py-3 bg-white">
            <div className="container flex items-center justify-between">
                <ul className="flex items-center gap-2">
                    <li className='list-none'>
                        <Link to="/" target='_blank' className='w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.6)] flex items-center justify-center group hover:bg-[var(--primary)]'>
                          <FaFacebookF className='text-[15px] group-hover:text-white' />
                        </Link>
                    </li>
                    <li className='list-none'>
                        <Link to="/" target='_blank' className='w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.6)] flex items-center justify-center group hover:bg-[var(--primary)]'>
                          <FaYoutube className='text-[18px] group-hover:text-white' />
                        </Link>
                    </li>
                    <li className='list-none'>
                        <Link to="/" target='_blank' className='w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.6)] flex items-center justify-center group hover:bg-[var(--primary)]'>
                          <FaPinterestP className='text-[15px] group-hover:text-white' />
                        </Link>
                    </li>
                    <li className='list-none'>
                        <Link to="/" target='_blank' className='w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.6)] flex items-center justify-center group hover:bg-[var(--primary)]'>
                          <FaInstagram className='text-[15px] group-hover:text-white' />
                        </Link>
                    </li>
                    <li className='list-none'>
                        <Link to="/" target='_blank' className='w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.6)] flex items-center justify-center group hover:bg-[var(--primary)]'>
                          <BsTwitterX className='text-[15px] group-hover:text-white' />
                        </Link>
                    </li>
                </ul>

                <p className='text-[13px] text-center mb-0'>© 2024 - Ecommerce Template</p>

                <div className="flex items-center gap-1">
                    <img src={cardImg1} alt="card" />
                    <img src={cardImg2} alt="card" />
                    <img src={cardImg3} alt="card" />
                    <img src={cardImg4} alt="card" />
                    <img src={cardImg5} alt="card" />
                </div>
            </div>
            
        </div>
     <CartDrawer />

    </>
  ) 
}

export default Footer;
