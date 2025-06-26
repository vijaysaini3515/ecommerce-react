import React, { useState } from 'react'
import { Link, Links } from 'react-router-dom';
import LogoImg from '../../assets/images2/logo.jpg';
import Search from '../Search';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { Button, Tooltip } from '@mui/material';
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosGitCompare } from "react-icons/io";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import Navigation from './Navigation';
import { FaUserCircle } from "react-icons/fa";
import { BsFillBagCheckFill } from "react-icons/bs";
import { IoHeart } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import Divider from '@mui/material/Divider';
// import PersonAdd from '@mui/icons-material/PersonAdd';
// import Settings from '@mui/icons-material/Settings';
// import Logout from '@mui/icons-material/Logout';
import { toggleCartDrawer } from '../../features/cartSlice/cartSlice'
import { useDispatch } from 'react-redux';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
        padding: '0 4px',
    },
}));

const Header = () => {
    const dispatch = useDispatch(); 
    const [isLogin, setIsLogin] = useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleOpenCartDrawer = () => {
        dispatch(toggleCartDrawer(true)); 
      };



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
                                <li className='list-none'> <Link to="/help-center" className='text-[13px] font-[500] transition link'>Help Center</Link>

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
                        <Link to={"/"}> <img src={LogoImg} alt="logo" /></Link>
                    </div>
                    <div className="col2 w-[45%]">
                        <Search />
                    </div>
                    <div className="col3 w-[30%]  pl-8 flex items-center ">

                        <ul className="w-full flex items-center justify-end gap-3">
                            {
                                isLogin === false ? (
                                    <li className='list-none'>
                                        <Link to={"/login"} className='link transition text-[15px] font-[500]'>Login</Link> |&nbsp;
                                        <Link to={"/register"} className='link transition text-[15px] font-[500]'>Register</Link>
                                    </li>
                                ) : (
                                    <>
                                        <Button onClick={handleClick} className=' !text-[#000] myAccountWrap flex items-center gap-3 cursor-pointer'>
                                            <Button className='!w-[40px] !min-w-[40px] !h-[40px] !rounded-full'><FaUserCircle className='text-[14px] text-[rgba(0,0,0,0.5)]' /></Button>
                                            <div className="info flex flex-col">
                                                <h4 className='leading-3 text-[rgba(0,0,0,0.7)] text-[14px] font-[500] mb-0 capitalize text-left justify-start'>vijay saini</h4>
                                                <span className='text-[14px] text-[rgba(0,0,0,0.5)] font-[400] mb-0 capitalize text-left justify-start'>vj@minfoail.com</span>
                                            </div>
                                        </Button>

                                        <Menu
                                            anchorEl={anchorEl}
                                            id="account-menu"
                                            open={open}
                                            onClose={handleClose}
                                            onClick={handleClose}
                                            slotProps={{
                                                paper: {
                                                    elevation: 0,
                                                    sx: {
                                                        overflow: 'visible',
                                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                        mt: 1.5,
                                                        width: 180,
                                                        '& .MuiMenu-list': {
                                                            paddingTop: 0,
                                                            paddingBottom: 0,
                                                        },
                                                        '&::before': {
                                                            content: '""',
                                                            display: 'block',
                                                            position: 'absolute',
                                                            top: 0,
                                                            right: 14,
                                                            width: 10,
                                                            height: 10,
                                                            bgcolor: 'background.paper',
                                                            transform: 'translateY(-50%) rotate(45deg)',
                                                            zIndex: 0,
                                                        },
                                                    },
                                                },
                                            }}
                                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                        >
                                            <Link to='/my-account'>
                                                <MenuItem onClick={handleClose} className='flex gap-4 !py-3 !px-5' >
                                                    <FaUserCircle className='text-[18px]' /> <span className='text-[16px]'>My Account</span>
                                                </MenuItem>
                                            </Link>
                                            <Link to='/my-orders'>
                                                <MenuItem onClick={handleClose} className='flex gap-4 !py-3 !px-5'>
                                                    <BsFillBagCheckFill className='text-[18px]' /> <span className='text-[16px]'>Orders</span>
                                                </MenuItem>
                                            </Link>
                                            <Link to='/my-list'>
                                                <MenuItem onClick={handleClose} className='flex gap-4 !py-3 !px-5'>
                                                    <IoHeart className='text-[18px]' /> <span className='text-[16px]'>My List</span>
                                                </MenuItem>
                                            </Link>
                                            <Link to='/logout'>
                                                <MenuItem onClick={handleClose} className='flex gap-4 !py-3 !px-5'>
                                                    <TbLogout className='text-[18px]' /> <span className='text-[16px]'>Logout</span>
                                                </MenuItem>
                                            </Link>
                                        </Menu>
                                    </>
                                )
                            }


                            <li>
                                <Tooltip title="Compare">
                                    <IconButton aria-label="cart">
                                        <StyledBadge sx={{ ".MuiBadge-badge": { backgroundColor: "#ff5252" } }} badgeContent={4} color="secondary">
                                            <IoIosGitCompare />
                                        </StyledBadge>
                                    </IconButton>
                                </Tooltip>
                            </li>

                            <li>
                                <Tooltip title="Wish-list">
                                    <IconButton aria-label="cart">
                                        <StyledBadge sx={{ ".MuiBadge-badge": { backgroundColor: "#ff5252" } }} badgeContent={4} color="secondary">
                                            <MdOutlineFavoriteBorder />
                                        </StyledBadge>
                                    </IconButton>
                                </Tooltip>
                            </li>

                            <li>
                                <Tooltip title="Cart">
                                    <IconButton aria-label="cart" onClick={handleOpenCartDrawer}>
                                        <StyledBadge sx={{ ".MuiBadge-badge": { backgroundColor: "#ff5252" } }} badgeContent={4} color="secondary">
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
