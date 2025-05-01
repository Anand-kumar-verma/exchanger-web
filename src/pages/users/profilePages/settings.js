import React, { useState } from 'react'
import { IoMdSettings } from "react-icons/io";
import { FaArrowUpLong } from "react-icons/fa6";
import CustomSwitch from '../../../components/customSwitch';
import CustomRadio from '../../../components/customRadio';
import { CgArrowsExchangeAltV } from "react-icons/cg";
import { FaLongArrowAltDown } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
const notificationArr = [
    {
        id: 0,
        title: "Mail Notification",
        description: "You will receive all the notifications on your registered email address.",
    },
    {
        id: 1,
        title: "Deposite Successed Prompts",
        description: "You will receive all the notifications on your registered email address.",
    },
    {
        id: 3,
        title: "Deposite Successed Sounds",
        description: "You will receive all the notifications on your registered email address.",
    }
]
function Settings() {
    const [selectedValue, setSelectedValue] = useState('a');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div className="pl-6 py-2 w-full  bg-gray-50" >


            <div className='flex items-center gap-2'>
                <IoMdSettings className='text-secondary' size={25} />
                <span className='text-lg font-semibold  gap-2 text-black'>Settings</span>
            </div>
            <div className="mt-5 w-full">
                <p className='text-lg text-black font-bold'>Notification Settings </p>

                <div className='w-full '>
                    {
                        notificationArr?.map((item, index) =>
                            <div key={index} className='flex border-b border-gray-200 py-2 flex-row items-center justify-betweenn'>
                                <div className='w-full'>
                                    <p className='mb-1 font-normal text-black'>{item.title}</p>
                                    <p className='text-xs text-primary font-serif'>{item.description}</p>
                                </div>
                                <CustomSwitch />
                            </div>
                        )
                    }

                    <div className='flex border-b border-gray-200 py-2 flex-row items-center justify-betweenn'>
                        <div className='w-full flex flex-col'>
                            <p className='text-lg text-black font-bold'>Preference Setting</p>
                            <div className="flex flex-row justify-between items-center">
                                <p className='text-xs text-primary font-serif'>Toggle Setup</p>
                                <div className='flex flex-row gap-1 text-gray-500 items-center'>
                                    <CustomRadio value="a" selectedValue={selectedValue} handleChange={handleChange} />
                                    <div className='flex  gap-1 items-center  font-serif text-xs flex-row'>
                                        <span >Set Up</span>
                                        <FaArrowUpLong />
                                        <span>Sut Down</span>
                                        <FaLongArrowAltDown />
                                    </div>
                                    <CgArrowsExchangeAltV className='mr-2' size={22} />
                                    <CustomRadio value="b" selectedValue={selectedValue} handleChange={handleChange} />
                                    <div className='flex gap-1 items-center  font-serif text-xs flex-row'>
                                        <span >Set Up</span>
                                        <FaArrowUpLong />
                                        <span>Sut Down</span>
                                        <FaLongArrowAltDown />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className='flex border-b border-gray-200 py-2 flex-row items-center justify-betweenn'>
                        <div className='w-full flex flex-col'>
                            <p className='text-lg text-black font-bold'>Language Setting</p>
                            <div className="flex flex-row mt-2 justify-between items-center">
                                <div className=' flex flex-col gap-1 '>
                                    <p className='text-sm text-black  font-sans '>Language</p>
                                    <p className='text-xs text-primary font-serif'>Your language selection to select notification and devices your toggle in to.</p>
                                </div>
                                <div className='flex text-sm font-serif flex-row text-gray-500 items-center'>
                                    English <IoMdArrowDropdown/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>



            </div>


        </div>
    )
}

export default Settings
