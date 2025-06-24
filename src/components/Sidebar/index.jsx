import React, { useState } from 'react';
import './sidebar.scss'
import { Button, Checkbox, FormControlLabel } from '@mui/material';
import { Collapse } from 'react-collapse';
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import Rating from '@mui/material/Rating';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

const Sidebar = () => {

  const [isOpenCategoryFilter,setIsOpenCategoryFilter] = useState(true);
  const [isOpenAvailableFilter,setIsOpenAvailableFilter] = useState(true);
  const [isOpenSizeFilter,setIsOpenSizeFilter] = useState(true);


  const checkBoxCustomStyle = {
    '& .MuiCheckbox-root.Mui-checked': {
      color: 'var(--primary)'
    },
    '.MuiFormControlLabel-label': {
      fontSize: '14px',
      color: 'rgba(0,0,0,0.7)'
    }
  };


  return (
   <aside className='sidebar '>

     <div className='box'>
        <h3 className='w-full mb-3 text-[14px] font-[600] flex items-center pr-5'>
          Shop By Category
          <Button onClick={()=>setIsOpenCategoryFilter(!isOpenCategoryFilter)} className='!h-[30px] !w-[30px] !min-w-[30px] !rounded-full !ml-auto'>
            {
              isOpenCategoryFilter === true ? <FaAngleUp /> : <FaAngleDown />
            }
          </Button>
        </h3>
        <Collapse isOpened={isOpenCategoryFilter}>
          <div className="scroll px-3 relative -left-[10px]">
            <FormControlLabel className='w-full' sx={checkBoxCustomStyle} control={<Checkbox size="small" />} label="Fashion" />
            <FormControlLabel className='w-full' sx={checkBoxCustomStyle} control={<Checkbox size="small" />} label="Electronic" />
            <FormControlLabel className='w-full' sx={checkBoxCustomStyle} control={<Checkbox size="small" />} label="Bags" />
            <FormControlLabel className='w-full' sx={checkBoxCustomStyle} control={<Checkbox size="small" />} label="Sneakers" />
            <FormControlLabel className='w-full' sx={checkBoxCustomStyle} control={<Checkbox size="small" />} label="Groceries" />
            <FormControlLabel className='w-full' sx={checkBoxCustomStyle} control={<Checkbox size="small" />} label="Beauty" />
            <FormControlLabel className='w-full' sx={checkBoxCustomStyle} control={<Checkbox size="small" />} label="Wellness" />
            <FormControlLabel className='w-full' sx={checkBoxCustomStyle} control={<Checkbox size="small" />} label="Jewelry" />
          </div>
        </Collapse>
     </div>

     <div className='box'>
        <h3 className='w-full my-3 text-[14px] font-[600] flex items-center pr-5'>
          Availability
          <Button onClick={()=>setIsOpenAvailableFilter(!isOpenAvailableFilter)} className='!h-[30px] !w-[30px] !min-w-[30px] !rounded-full !ml-auto'>
            {
              isOpenAvailableFilter === true ? <FaAngleUp /> : <FaAngleDown />
            }
          </Button>
        </h3>
        <Collapse isOpened={isOpenAvailableFilter}>
          <div className="scroll px-3 relative -left-[10px]">
            <FormControlLabel className='w-full' sx={checkBoxCustomStyle} control={<Checkbox size="small" />} label="Available (17)" />
            <FormControlLabel className='w-full' sx={checkBoxCustomStyle} control={<Checkbox size="small" />} label="In Stock (10)" />
            <FormControlLabel className='w-full' sx={checkBoxCustomStyle} control={<Checkbox size="small" />} label="Not Available (1)" />
          </div>
        </Collapse>
     </div>

     <div className='box'>
        <h3 className='w-full my-3 text-[14px] font-[600] flex items-center pr-5'>
          Size
          <Button onClick={()=>setIsOpenSizeFilter(!isOpenSizeFilter)} className='!h-[30px] !w-[30px] !min-w-[30px] !rounded-full !ml-auto'>
            {
              isOpenSizeFilter === true ? <FaAngleUp /> : <FaAngleDown />
            }
          </Button>
        </h3>
        <Collapse isOpened={isOpenSizeFilter}>
          <div className="scroll px-3 relative -left-[10px]">
            <FormControlLabel className='w-full' sx={checkBoxCustomStyle} control={<Checkbox size="small" />} label="Small" />
            <FormControlLabel className='w-full' sx={checkBoxCustomStyle} control={<Checkbox size="small" />} label="Medium" />
            <FormControlLabel className='w-full' sx={checkBoxCustomStyle} control={<Checkbox size="small" />} label="Large" />
            <FormControlLabel className='w-full' sx={checkBoxCustomStyle} control={<Checkbox size="small" />} label="XL" />
            <FormControlLabel className='w-full' sx={checkBoxCustomStyle} control={<Checkbox size="small" />} label="XXL" />
          </div>
        </Collapse>
     </div>

     <div className='box mt-4'>
        <h3 className='w-full my-3 text-[14px] font-[600] flex items-center pr-5'>Filter By Price</h3>
        <RangeSlider />

            <div className="priceRange flex pt-4 pb-2">
                <span className='text-[13px]'>
                  From : <strong>Rs:{10}</strong>
                </span>
                <span className='ml-auto text-[13px]'>
                  From : <strong>Rs:{5000}</strong>
                </span>
            </div>
     </div>


     <div className='box mt-4'>
        <h3 className='w-full my-3 text-[14px] font-[600] flex items-center pr-5'>Filter By Rating</h3>
        <Rating defaultValue={5} readOnly className='!w-full' />
        <Rating defaultValue={4} readOnly className='!w-full' />
        <Rating defaultValue={3} readOnly className='!w-full' />
        <Rating defaultValue={2} readOnly className='!w-full' />
        <Rating defaultValue={1} readOnly className='!w-full' />
     </div>



   </aside>
  )
}

export default Sidebar;