import React from 'react';
// import './profile.scss'
import { Button, TextField } from '@mui/material';
import AccountSidebar from '../AccountSidebar'
import MyListItem from '../MyListItem'




const MyList = () => {
    return (
        <div className='py-10 w-full'>
            <div className="container flex gap-5">

                <div className="col1 w-[20%]">
                    <AccountSidebar />
                </div>

                <div className="col1 w-[80%]">
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