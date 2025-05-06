import React from 'react'
import { FaShieldAlt } from "react-icons/fa";
import { SlLock, SlSocialGoogle } from "react-icons/sl";
import CustomButton from '../../../components/customButton';
import CustomSwitch from '../../../components/customSwitch';
import { IoMdLock } from "react-icons/io";
import { HiUsers } from "react-icons/hi2";
function SaferyAndSecurity() {
    return (
        <div className="px-6 py-2 w-full  min-h-lvh md:min-h-screen overflow-y-auto hide-scrollbar" >
            <div className=" ">

                <div className='flex items-center gap-2'>
                    <FaShieldAlt className='text-secondary' size={25} />
                    <span className='text-lg font-semibold  gap-2 text-black'>Safety & Security</span>
                </div>
                <div className="space-y-8 sm:pl-5 mt-5">
                    <div className="flex justify-between  items-center">
                        <div className="flex items-center">
                            <SlSocialGoogle className="text-secondary mr-4 mt-1" size={25} />
                            <div>
                                <h3 className="text-sm font-normal text-black">Google Authentication</h3>
                                <p className="text-gray-500 text-xs">Used for withdrawals and security modifications.</p>
                            </div>
                        </div>
                        <CustomSwitch />
                    </div>
                    <div className="flex justify-between items-start">
                        <div className="flex items-start">
                            <SlLock className="text-secondary mr-4 mt-1" size={25} />
                            <div>
                                <h3 className="text-sm font-normal text-black">Change Password</h3>
                                <p className="text-gray-500 text-xs">
                                    If you notice any suspicious activity, we recommend changing your password.
                                </p>
                                <CustomButton title='Change Password' startIcon={<IoMdLock />} className={"!mt-2"} />
                            </div>

                        </div>

                    </div>

                    <div className="flex justify-between items-start">
                        <div className="flex items-start">
                            <SlLock className="text-secondary mr-4 mt-1" size={25} />
                            <div>
                                <h3 className="text-sm font-normal text-black">Secret Pin</h3>
                                <p className="text-gray-500 text-xs">
                                    If you notice any suspicious activity, we recommend changing your password.
                                </p>
                                <CustomButton title='Set Your Secret Pin' startIcon={<HiUsers />} className={"!mt-2"} />
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default SaferyAndSecurity
