import React, { useState } from 'react';
import './profile.scss'
import { Button, TextField } from '@mui/material';
import AccountSidebar from '../AccountSidebar'
import { MdOutlineSecurity } from "react-icons/md";



const Profile = () => {
    const [isShowPasswordDiv,setIsShowPasswordDiv] = useState(false);

    const togglePasswordDiv = () =>{
        setIsShowPasswordDiv(!isShowPasswordDiv);
    }

    return (
        <div className='py-3 lg:py-10 w-full'>
            <div className="container flex flex-col lg:flex-row gap-5">

                <div className="col1 w-full lg:w-[20%]">
                    <AccountSidebar />
                </div>

                <div className="col1 w-full lg:w-[50%]">
                    <div className="card w-full bg-white p-5 shadow-md mb-2 rounded-md">
                        <div className=' flex items-center justify-between'>
                          <h2 className=''>My Profile</h2>
                          <Button onClick={togglePasswordDiv} className=''>Change Password</Button>
                        </div>
                        <hr />
                        <form className='mt-5'>

                            <div className="grid grid-col-1 sm:grid-cols-2 gap-5">
                                <div className="col">
                                    <TextField
                                        label="Full Name"
                                        variant='outlined'
                                        size='small'
                                        className='w-full'
                                    />
                                </div>
                                <div className="col">
                                    <TextField
                                        label="Email"
                                        variant='outlined'
                                        size='small'
                                        className='w-full'
                                    />
                                </div>
                                <div className="col">
                                    <TextField
                                        label="Phone"
                                        variant='outlined'
                                        size='small'
                                        className='w-full'
                                    />
                                </div>
                            </div>

                            <br />
                             <div className="flex items-center gap-5">
                                <Button className='btn-org w-[100px]'>Save</Button>
                                <Button className='btn-border w-[100px]'>Cancel</Button>
                             </div>
                        </form>

                    </div>

                    {
                        isShowPasswordDiv === true && (
                            <div className="card bg-white p-5 shadow-md rounded-md">
                             <h2 className=''>Change Password</h2>
                             <hr />
                                <form className='mt-5'>

                                    <div className="grid grid-col-1 sm:grid-cols-2 gap-5">
                                        <div className="col">
                                            <TextField
                                                label="New Password"
                                                variant='outlined'
                                                size='small'
                                                className='w-full'
                                            />
                                        </div>
                                        <div className="col">
                                            <TextField
                                                label="Conform Password"
                                                variant='outlined'
                                                size='small'
                                                className='w-full'
                                            />
                                        </div>
                                    </div>

                                    <br />
                                    <div>
                                        <Button className='btn-org flex items-center gap-2'>Change password <MdOutlineSecurity /></Button>
                                    </div>
                                </form>

                            </div>
                        )
                    }
                    

                </div>
            </div>
        </div>
    )
}

export default Profile;