import React from 'react'
import { FaShieldAlt } from "react-icons/fa";
import { SiYoutube } from "react-icons/si";
import { FaTelegramPlane } from "react-icons/fa";
function NewsAndUpdate() {
    return (
        <div className="px-6 py-2 w-full  bg-gray-50 h-screen overflow-y-auto hide-scrollbar" >
            <div className=" ">

                <div className='flex items-center gap-2'>
                    <FaShieldAlt className='text-secondary' size={25} />
                    <span className='text-lg font-semibold  gap-2 text-black'>News & Update</span>
                </div>
                <div className="space-y-8 sm:pl-5 mt-5">

                    <div className="flex justify-between items-start">
                        <div className="flex items-start">
                            <SiYoutube className="text-red-600 mr-4 mt-1" size={25} />
                            <div>
                                <h3 className="text-sm font-normal text-black">Join Youtube Channel</h3>
                                <p className="text-gray-500 text-xs">
                                    Join Our Channel for every News and Update related to exchange.
                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="flex justify-between items-start">
                        <div className="flex items-start">
                            <FaTelegramPlane className="text-sky-500 mr-4 mt-1" size={25} />
                            <div>
                                <h3 className="text-sm font-normal text-black">Suscribe Our Channel</h3>
                                <p className="text-gray-500 text-xs">
                                    Suscribe Our Channel for every News and Update related to exchange.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default NewsAndUpdate
