import React from 'react'
import { GiBackwardTime } from "react-icons/gi";
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { BsGlobe } from 'react-icons/bs';

const data = [
    { date: '4/10/2025 13:36:43 PM', ip: '2401:4900:1c2c:b6b6:6a00:6d9:5331:af94', location: 'Noida, UP, India' },
    { date: '4/10/2025 5:13:36 PM', ip: '2401:4900:1c2c:b6b6:6a00:6d9:5331:af4a', location: 'Noida, UP, India' },
    { date: '4/10/2025 4:53:38 PM', ip: '3.96.110.240', location: 'Noida, UP, India' },
    { date: '4/10/2025 4:53:39 PM', ip: '103.251.90.2', location: 'Noida, UP, India' },
    { date: '4/10/2025 8:48:39 AM', ip: '112.134.186.12', location: 'Noida, UP, India' },
];
function Security() {
    return (
        <div className="pl-6 py-2 w-full " >


            <div className='flex items-center gap-2'>
                <GiBackwardTime className='text-secondary' size={25} />
                <span className='text-lg font-semibold  gap-2 text-black'>Security</span>
            </div>
            <div className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-3 mb-4 text-gray-700 font-semibold text-sm">
                    <div className="flex items-center gap-2">
                        <FaCalendarAlt />
                        <span>Date</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <BsGlobe />
                        <span>IP Address</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaMapMarkerAlt />
                        <span>Location</span>
                    </div>
                </div>

                {/* Rows */}
                <div className="space-y-4">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start md:items-center text-gray-600 text-sm pb-2"
                        >
                            <div className="break-words">{item.date}</div>
                            <div className="break-words">{item.ip}</div>
                            <div className="break-words">{item.location}</div>
                        </div>
                    ))}
                </div>
            </div>



        </div>
    )
}

export default Security
