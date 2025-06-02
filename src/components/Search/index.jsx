import React from 'react';
import './search.scss';
import { IoSearch } from "react-icons/io5";
import { Button } from '@mui/material';



const Search = () => {
  return (
    <div className='searchBox w-[100%] h-[50px] p-2 rounded-[5px] bg-[#e5e5e5] relative'>
        <input 
          type="text" 
          placeholder='search for products ...'
          className='w-full h-[35px] focus:outline-none bg-inherit p-2 text-[14px]'
        />
        <Button 
           className='!absolute !text-black top-[8px] right-[5px] z-50 !w-[37px] !min-w-[37px] !h-[37px] !rounded-full'
        > 
          <IoSearch className='text-[#4e4e4e] text-[20px]' /> 
        </Button>
    </div>
  )
}

export default Search;