import React from 'react';
import './profile.scss'
import { Button, TextField } from '@mui/material';
import AccountSidebar from '../AccountSidebar'




const Profile = () => {
    return (
        <div className='py-10 w-full'>
            <div className="container flex gap-5">

                <div className="col1 w-[20%]">
                    <AccountSidebar />
                </div>

                <div className="col1 w-[50%]">
                    <div className="card bg-white p-5 shadow-md rounded-md">
                        <h2 className='pb-3'>My Profile</h2>
                        <hr />
                        <form className='mt-5'>
                            <div className="flex item-center gap-3">
                                <div className="w-[50%]">
                                    <TextField
                                        label="Full Name"
                                        variant='outlined'
                                        size='small'
                                        className='w-full'
                                    />
                                </div>
                                <div className="w-[50%]">
                                    <TextField
                                        label="Email"
                                        variant='outlined'
                                        size='small'
                                        className='w-full'
                                    />
                                </div>
                            </div>
                            <div className="flex item-center gap-3 mt-4">
                                <div className="w-[50%]">
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
                </div>
            </div>
        </div>
    )
}

export default Profile;