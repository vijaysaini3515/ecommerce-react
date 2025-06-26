import React from 'react';
import Button from '@mui/material/Button';
import { BiSolidCloudUpload } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { IoHeart } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import { BsFillBagCheckFill } from "react-icons/bs";
import { NavLink } from "react-router";

const AccountSidebar = () => {
    return (
        <>
            <div className="card bg-[#fff] shadow-md rounded-md sticky top-[10px]">

                <div className="w-full p-5 flex flex-col items-center justify-center ">
                    <div className="w-[110px] h-[110px] rounded-full overflow-hidden mb-4 relative group">
                        <img className='w-full h-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*28pQuRejOMlv_vB3" alt="" />
                        <div className="overlay h-[100%] w-[100%] absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.5)] flex items-center justify-center cursor-pointer opacity-0 transition-all group-hover:opacity-100">
                            <BiSolidCloudUpload className='text-[#fff] text-[30px] cursor-pointer' />
                            <input type="file" className='opacity-0 cursor-pointer h-full w-full absolute top-0 left-0' />
                        </div>
                    </div>
                    <h3>Jon nada</h3>
                    <h6 className='text-[13px] font-[500] text-[rgba(0,0,0,0.5)]'>text@mail.com</h6>
                </div>


                <ul className="myAccountTabs list-none pb-5 bg-[#f1f1f1]">
                    <li className='w-full'>
                        <NavLink to='/my-account' exact={true} activeClassName='isActive'>
                            <Button className='w-full !py-2 !px-5 !justify-start !text-left !rounded-none !capitalize !text-[rgba(0,0,0,0.7)] flex item-center gap-2'><FaUser className="text-[16px]" /> My Profile</Button>
                        </NavLink>
                    </li>
                    <li className='w-full'>
                        <NavLink to='/my-list' exact={true} activeClassName='isActive'>
                            <Button className='w-full !py-2 !px-5 !justify-start !text-left !rounded-none !capitalize !text-[rgba(0,0,0,0.7)] flex item-center gap-2'><IoHeart className="text-[16px]" /> My List</Button>
                        </NavLink>
                    </li>
                    <li className='w-full'>
                        <NavLink to='/my-orders' exact={true} activeClassName='isActive'>
                            <Button className='w-full !py-2 !px-5 !justify-start !text-left !rounded-none !capitalize !text-[rgba(0,0,0,0.7)] flex item-center gap-2'><BsFillBagCheckFill className="text-[16px]" /> My Orders</Button>
                        </NavLink>
                    </li>
                    <li className='w-full'>
                        <NavLink to='/logout' exact={true} activeClassName='isActive'>
                            <Button className='w-full !py-2 !px-5 !justify-start !text-left !rounded-none !capitalize !text-[rgba(0,0,0,0.7)] flex item-center gap-2'><TbLogout className="text-[16px]" /> Logout</Button>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default AccountSidebar;