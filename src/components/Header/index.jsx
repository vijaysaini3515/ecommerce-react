import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logi from '../../assets/images2/logo.jpg';
import Search from '../Search';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import {Tooltip} from '@mui/material';
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosGitCompare } from "react-icons/io";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import Navigation from './Navigation';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
      padding: '0 4px',
    },
  }));

const Header = () => {
   



  return (
    <header className='bg-white'>
        <div className='top-strip p-2 border-t border-b border-gray-300 '>
            <div className="container">
                <div className='flex items-center justify-between'>
                    <div className='col1 w-[50%]'>
                      <p className='text-[14px] text-gray-500 font-[500]'>Get up to 50% off new season styles, limited time only</p>
                    </div>

                    <div className='col2  flex item-center justify-end'>
                       <ul className='flex items-center gap-3'>
                            <li className='list-none'>
                                <Link to="/help-center" className='text-[13px] font-[500] transition link'>Help Center</Link>
                            </li>
                            <li className='list-none'>
                             <Link to="/order-tracking" className='text-[13px] font-[500] transition link'>Order Tracking</Link>
                            </li>
                        </ul>
                    </div>


                </div>
            </div>
        </div>

        <div className='header border-b border-gray-300 py-4'>
            <div className="container flex items-center justify-between">
                <div className="col1 w-[25%]">
                    <Link to={"/"}> <img src={logi} alt="logo" /></Link>
                </div>
                <div className="col2 w-[45%]">
                    <Search />
                </div>
                <div className="col3 w-[30%]  pl-8 flex items-center ">

                    <ul className="w-full flex items-center justify-end gap-3">
                        <li className='list-none'>
                            <Link to={"/login"} className='link transition text-[15px] font-[500]'>Login</Link> |&nbsp;
                            <Link to={"/register"} className='link transition text-[15px] font-[500]'>Register</Link>
                        </li>

                        <li>
                          <Tooltip title="Compare">
                                <IconButton aria-label="cart">
                                    <StyledBadge sx={{".MuiBadge-badge":{backgroundColor:"#ff5252"}}} badgeContent={4} color="secondary">
                                        <IoIosGitCompare />
                                    </StyledBadge>
                                </IconButton>
                            </Tooltip>    
                        </li>

                        <li>
                          <Tooltip title="Wish-list">
                                <IconButton aria-label="cart">
                                    <StyledBadge sx={{".MuiBadge-badge":{backgroundColor:"#ff5252"}}} badgeContent={4} color="secondary">
                                        <MdOutlineFavoriteBorder />
                                    </StyledBadge>
                                </IconButton>
                            </Tooltip>    
                        </li>

                        <li>
                          <Tooltip title="Cart">
                                <IconButton aria-label="cart">
                                    <StyledBadge sx={{".MuiBadge-badge":{backgroundColor:"#ff5252"}}} badgeContent={4} color="secondary">
                                        <MdOutlineShoppingCart />
                                    </StyledBadge>
                                </IconButton>
                            </Tooltip>    
                        </li>

                    </ul>
                </div>
            </div>
        </div>

        <Navigation />

    </header>
    
    
  )
}

export default Header;
