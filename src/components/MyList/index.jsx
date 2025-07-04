import React from 'react';
// import './profile.scss'
import { Button, TextField } from '@mui/material';
import AccountSidebar from '../AccountSidebar'
import MyListItem from '../MyListItem'
import { useSelector } from 'react-redux';




const MyList = () => {
    const windowWidth = useSelector((state)=>state.window.width)
    return (
        <div className='py-4 lg:py-10 w-full'>
            <div className="container flex flex-col lg:flex-row  gap-5">
                {
                    windowWidth > 992 && (
                        <div className="col1 w-full lg:w-[20%]">
                            <AccountSidebar />
                        </div>
                    )
                }
                

                <div className="col1 w-full lg:w-[80%]">
                   <div className="bg-white shadow-md rounded-md">
                     <div className="py-5 px-3 border-b border-[#ccc]">
                        <h2>Your List</h2>
                        <p className='!mt-0 !mb-0'>There are <span className='font-bold text-[var(--primary)]'>3 products </span> in you cart</p>
                     </div>
                       <MyListItem />
                       <MyListItem />
                       <MyListItem />
                       <MyListItem />
                       <MyListItem />
                       <MyListItem />
                   </div>
                </div>



            </div>
        </div>
    )
}

export default MyList;