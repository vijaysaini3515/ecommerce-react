import React, { useState } from 'react';
import './navigation.scss';
import { Button } from '@mui/material';
import { RiMenu2Fill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { GoRocket } from "react-icons/go";
import CategoryPanel from '../CategoryPanel';

const Navigation = () => {

    const [openCategoryPanel, setOpenCategoryPanel] = useState(false);
    const toggleDrawer = (newOpen) => () => {
        setOpenCategoryPanel(newOpen);
    };

    return (
        <>

            <nav>
                <div className='container flex items-center justify-end gap-8'>

                    <div className='col_1 w-[20%] flex items-center'>
                        <Button onClick={toggleDrawer(true)} className='w-full !text-black gap-3 !text-[12px] !font-[600]'>
                            <RiMenu2Fill className='text-[18px]' />
                            shop by categories
                            <FaAngleDown className='text-[14px]' />
                        </Button>
                    </div>

                    <div className='col_2 w-[60%]'>
                        <ul className='nav flex items-center gap-1'>

                            <li className='list-none'>
                                <Link to="/" className="link transition text-[14px] font-[500]">
                                    <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.5)] hover:!text-[red] !normal-case'>Home</Button>
                                </Link>
                            </li>
                            {/*  */}
                            <li className='list-none relative'>
                                <Link to="/productListing" className="link transition text-[14px] font-[500]">
                                    <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.5)] hover:!text-[red] !normal-case'>Fashion</Button>
                                </Link>
                                <div className='submenu absolute top-[100%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all'>
                                    <ul>
                                        <li className='list-none w-fill relative'>
                                            <Link to="/" className='w-fill'>
                                                <Button className=' !w-full !justify-start !text-left !rounded-none !normal-case'>Men</Button>
                                            </Link>

                                            {/* start */}

                                            <div className='submenu absolute top-[0%] left-[100%] min-w-[130px] bg-white shadow-md opacity-0 transition-all'>
                                                <ul>
                                                    <li className='list-none w-fill'>
                                                        <Link to="/" className='w-fill'>
                                                            <Button className='!w-full !justify-start !text-left !rounded-none !normal-case'>Men</Button>
                                                        </Link>
                                                    </li>
                                                    <li className='list-none w-fill'>
                                                        <Link to="/" className='w-fill'>
                                                            <Button className=' !w-full !justify-start !text-left !rounded-none !normal-case'>Women</Button>
                                                        </Link>
                                                    </li>
                                                    <li className='list-none w-fill'>
                                                        <Link to="/" className='w-fill'>
                                                            <Button className=' !w-full !justify-start !text-left !rounded-none !normal-case'>Girls</Button>
                                                        </Link>
                                                    </li>
                                                    <li className='list-none w-fill'>
                                                        <Link to="/" className='w-fill'>
                                                            <Button className=' !w-full !justify-start !text-left !rounded-none !normal-case'>Boys</Button>
                                                        </Link>
                                                    </li>
                                                    <li className='list-none w-fill'>
                                                        <Link to="/" className='w-fill'>
                                                            <Button className='!w-full !justify-start !text-left !rounded-none !normal-case'>Kids</Button>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* end */}

                                        </li>
                                        <li className='list-none w-fill'>
                                            <Link to="/" className='w-fill'>
                                                <Button className=' !w-full !justify-start !text-left !rounded-none !normal-case'>Women</Button>
                                            </Link>
                                        </li>
                                        <li className='list-none w-fill'>
                                            <Link to="/" className='w-fill'>
                                                <Button className=' !w-full !justify-start !text-left !rounded-none !normal-case'>Girls</Button>
                                            </Link>
                                        </li>
                                        <li className='list-none w-fill'>
                                            <Link to="/" className='w-fill'>
                                                <Button className=' !w-full !justify-start !text-left !rounded-none !normal-case'>Boys</Button>
                                            </Link>
                                        </li>
                                        <li className='list-none w-fill'>
                                            <Link to="/" className='w-fill'>
                                                <Button className=' !w-full !justify-start !text-left !rounded-none !normal-case'>Kids</Button>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            {/*  */}
                            <li className='list-none'>
                                <Link to="/" className="link transition text-[14px] font-[500]">
                                    <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.5)] hover:!text-[red] !normal-case'>Electronic</Button>
                                </Link>
                            </li>
                            <li className='list-none'>
                                <Link to="/" className="link transition text-[14px] font-[500]">
                                    <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.5)] hover:!text-[red] !normal-case'>Bags</Button>
                                </Link>
                            </li>
                            <li className='list-none'>
                                <Link to="/" className="link transition text-[14px] font-[500]">
                                    <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.5)] hover:!text-[red] !normal-case'>Sneakers</Button>
                                </Link>
                            </li>
                            <li className='list-none'>
                                <Link to="/" className="link transition text-[14px] font-[500]">
                                    <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.5)] hover:!text-[red] !normal-case'>Groceries</Button>
                                </Link>
                            </li>
                            <li className='list-none'>
                                <Link to="/" className="link transition text-[14px] font-[500]">
                                    <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.5)] hover:!text-[red] !normal-case'>Beauty</Button>
                                </Link>
                            </li>
                            <li className='list-none'>
                                <Link to="/" className="link transition text-[14px] font-[500]">
                                    <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.5)] hover:!text-[red] !normal-case'>Wellness</Button>
                                </Link>
                            </li>
                            <li className='list-none'>
                                <Link to="/" className="link transition text-[14px] font-[500]">
                                    <Button className='link transition !font-[500] !text-[rgba(0,0,0,0.5)] hover:!text-[red] !normal-case'>Jewelry</Button>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col_3 w-[20%]">
                        <p className='text-[14px] font-[500] flex items-center gap-2 mb-0 mt-0'>
                            <GoRocket />
                            Free Internationl Delivery
                        </p>
                    </div>

                </div>
            </nav>

            <CategoryPanel openCategoryPanel={openCategoryPanel} toggleDrawer={toggleDrawer} />


        </>

    )
}

export default Navigation;