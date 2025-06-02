import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { IoClose } from "react-icons/io5";
import { Button, Divider } from '@mui/material';
import { FaRegSquarePlus } from "react-icons/fa6";
import { FaRegSquareMinus } from "react-icons/fa6";
import { Link } from 'react-router-dom'




const CategoryPanel = ({ openCategoryPanel, toggleDrawer }) => {

  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [InnerSubmenuIndex, setInnerSubmenuIndex] = useState(null);


  const openSubMenu = (index) => {
    if (submenuIndex === index) {
      setSubmenuIndex(null);
    } else {
      setSubmenuIndex(index);
    }
  }
  const openInnerSubMenu = (index) => {
    if (InnerSubmenuIndex === index) {
      setInnerSubmenuIndex(null);
    } else {
      setInnerSubmenuIndex(index);
    }
  }


  return (
    <div>
      <Drawer open={openCategoryPanel}>
        <Box sx={{ width: 250 }} role="presentation">
          <h3 className='p-3 text-[14px] font-[600] flex items-center justify-between'>Shop by categories <IoClose onClick={toggleDrawer(false)} className='text-[20px] cursor-pointer' /> </h3>
          <Divider />
          <div className='scroll'>
            <ul className='w-full'>

              <li className='list-none flex flex-col items-center relative'>
                <Link to="/" className='w-full'>
                  <Button className='w-full !px-3 !text-left !justify-start !text-[rgba(0,0,0.8)] !normal-case'>Fashion</Button>
                </Link>
                {
                  submenuIndex === 0 ? <FaRegSquareMinus onClick={() => openSubMenu(0)} className='absolute top-[10px] right-[15px] cursor-pointer' /> : <FaRegSquarePlus onClick={() => openSubMenu(0)} className='absolute top-[10px] right-[15px] cursor-pointer' />
                }
                {
                  submenuIndex === 0 && (
                    <ul className='submenu w-full pl-3'>
                      <li className='list-none relative'>
                        <Link to="/" className='w-full'>
                          <Button className='w-full !px-3 !text-left !justify-start !text-[rgba(0,0,0.8)] !normal-case'>Woman</Button>
                        </Link>
                        {
                          InnerSubmenuIndex === 0 ? <FaRegSquareMinus onClick={() => openInnerSubMenu(0)} className='absolute top-[10px] right-[15px] cursor-pointer' /> : <FaRegSquarePlus onClick={() => openInnerSubMenu(0)} className='absolute top-[10px] right-[15px] cursor-pointer' />
                        }
                      </li>

                      {
                        InnerSubmenuIndex === 0 && (
                          <ul className='inner_submenu w-full pl-4'>
                            <li className='list-none relative mb-1'>
                              <Link className='w-full link transition text-[14px] !px-3 !text-left !justify-start  !normal-case'>Kurtas & Suits</Link>
                            </li>
                            <li className='list-none relative mb-1'>
                              <Link className='w-full link transition text-[14px] !px-3 !text-left !justify-start  !normal-case'>Sarees</Link>
                            </li>
                            <li className='list-none relative mb-1'>
                              <Link className='w-full link transition text-[14px] !px-3 !text-left !justify-start  !normal-case'>Jeans</Link>
                            </li>
                            <li className='list-none relative mb-1'>
                              <Link className='w-full link transition text-[14px] !px-3 !text-left !justify-start  !normal-case'>Tops</Link>
                            </li>
                          </ul>
                        )
                      }



                    </ul>
                  )
                }
              </li>

              <li className='list-none flex flex-col items-center relative'>
                <Link to="/" className='w-full'>
                  <Button className='w-full !px-3 !text-left !justify-start !text-[rgba(0,0,0.8)] !normal-case'>Electronic</Button>
                </Link>
                {
                  submenuIndex === 1 ? <FaRegSquareMinus onClick={() => openSubMenu(0)} className='absolute top-[10px] right-[15px] cursor-pointer' /> : <FaRegSquarePlus onClick={() => openSubMenu(1)} className='absolute top-[10px] right-[15px] cursor-pointer' />
                }
                {
                  submenuIndex === 1 && (
                    <ul className='submenu w-full pl-3'>
                      <li className='list-none relative'>
                        <Link to="/" className='w-full'>
                          <Button className='w-full !px-3 !text-left !justify-start !text-[rgba(0,0,0.8)] !normal-case'>Woman</Button>
                        </Link>
                        {
                          InnerSubmenuIndex === 1 ? <FaRegSquareMinus onClick={() => openInnerSubMenu(0)} className='absolute top-[10px] right-[15px] cursor-pointer' /> : <FaRegSquarePlus onClick={() => openInnerSubMenu(1)} className='absolute top-[10px] right-[15px] cursor-pointer' />
                        }
                      </li>

                      {
                        InnerSubmenuIndex === 1 && (
                          <ul className='inner_submenu w-full pl-4'>
                            <li className='list-none relative mb-1'>
                              <Link className='w-full link transition text-[14px] !px-3 !text-left !justify-start  !normal-case'>Kurtas & Suits</Link>
                            </li>
                            <li className='list-none relative mb-1'>
                              <Link className='w-full link transition text-[14px] !px-3 !text-left !justify-start  !normal-case'>Sarees</Link>
                            </li>
                            <li className='list-none relative mb-1'>
                              <Link className='w-full link transition text-[14px] !px-3 !text-left !justify-start  !normal-case'>Jeans</Link>
                            </li>
                            <li className='list-none relative mb-1'>
                              <Link className='w-full link transition text-[14px] !px-3 !text-left !justify-start  !normal-case'>Tops</Link>
                            </li>
                          </ul>
                        )
                      }
                    </ul>
                  )
                }
              </li>

            </ul>
          </div>
        </Box>
      </Drawer>
    </div>
  )
}

export default CategoryPanel;