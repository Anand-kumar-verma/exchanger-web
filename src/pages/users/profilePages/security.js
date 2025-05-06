import React from 'react'
import { GiBackwardTime } from "react-icons/gi";
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { BsGlobe } from 'react-icons/bs';

const data = [
    {
        dateTitle: "Date",
        ipTitle: "IP Address",
        locationTitle: "Location"

    },
    { date: '4/10/2025 13:36:43 PM', ip: '2401:4900:1c2c:b6b6:6a00:6d9:5331:af94', location: 'Noida, UP, India' },
    { date: '4/10/2025 5:13:36 PM', ip: '2401:4900:1c2c:b6b6:6a00:6d9:5331:af4a', location: 'Noida, UP, India' },
    { date: '4/10/2025 4:53:38 PM', ip: '3.96.110.240', location: 'Noida, UP, India' },
    { date: '4/10/2025 4:53:39 PM', ip: '103.251.90.2', location: 'Noida, UP, India' },
    { date: '4/10/2025 8:48:39 AM', ip: '112.134.186.12', location: 'Noida, UP, India' },
];
function Security() {
    return (
        <div className=" py-2 w-full " >


            <div className='flex pl-6 items-center gap-2'>
                <GiBackwardTime className='text-secondary' size={25} />
                <span className='text-lg font-semibold  gap-2 text-black'>Security</span>
            </div>
            <div className="mt-6 sm:px-6 px-0">

                {/* Rows */}
                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm text-left text-gray-600">
                        <thead className="text-gray-700 font-semibold bg-gray-100">
                            <tr>
                                <th className="px-4 py-3 whitespace-nowrap">
                                    <div className="flex items-center gap-2">
                                        <FaCalendarAlt />
                                        <span>{data[0]?.dateTitle || "Date"}</span>
                                    </div>
                                </th>
                                <th className="px-4 py-3 whitespace-nowrap">
                                    <div className="flex items-center gap-2">
                                        <BsGlobe />
                                        <span>{data[0]?.ipTitle || "IP Address"}</span>
                                    </div>
                                </th>
                                <th className="px-4 py-3 whitespace-nowrap">
                                    <div className="flex items-center gap-2">
                                        <FaMapMarkerAlt />
                                        <span>{data[0]?.locationTitle || "Location"}</span>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.slice(1).map((item, index) => (
                                <tr key={index} className="border-b hover:bg-gray-50">
                                    <td className="px-4 py-2 text-nowrap break-words">{item.date}</td>
                                    <td className="px-4 py-2 break-words">{item.ip}</td>
                                    <td className="px-4 py-2 break-words">{item.location}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>



        </div>
    )
}

export default Security
