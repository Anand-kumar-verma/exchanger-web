import { FaEnvelope, FaUniversity, FaUserShield, FaUserCircle, FaCheckCircle } from 'react-icons/fa';
import { TbEdit } from "react-icons/tb";
import { MdEdit, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { SlSocialGoogle } from "react-icons/sl";
import { HiOutlineIdentification } from "react-icons/hi";
import { TfiSearch } from "react-icons/tfi";
import CustomButton from '../../../components/customButton';
import { MdRoomPreferences } from "react-icons/md";
import { FaRegCopy } from "react-icons/fa";
import toast from 'react-hot-toast';
import { FaUser, FaUserFriends, FaIdCard } from "react-icons/fa";
import { FaCloudUploadAlt } from "react-icons/fa";

const verifications = [
    { icon: <FaEnvelope size={24} />, label: "Email Verification" },
    { icon: <FaUser size={24} />, label: "Personal Data Verification" },
    { icon: <FaUserFriends size={24} />, label: "Nominee Details" },
    { icon: <FaUniversity size={24} />, label: "Bank Account" },
    { icon: <FaIdCard size={24} />, label: "KYC Verification" },
];

const ProfileInformation = () => {
    const user = {
        name: "Shourya V Sengar",
        userId: "4573626",
        email: "konsexyz99@gmail.com",
        membership: "Membership",
        kycTime: "2023/11/12 5:09:46",
        lastLogin: "2023/11/20 17:44:20",
        referralCode: "4UAWNIEG1D",
    };
    const userArr = [
        {
            title: "User ID",
            value: "28346283",
        },
        {
            title: "parrel",
            value: "Keybordtypeof",
        },
        {
            title: "Membership",
            value: "Containers",
        },
        {
            title: "Sign Up Time ",
            value: "2023/11/12 5:09:46",
        },
        {
            title: "Langauge",
            value: "tr|oasf8u3hlksdf",
        }
    ]

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        toast(`Copied to ${text}`)
    };

    return (
        <div className=" py-2 w-full  md:h-screen overflow-y-auto hide-scrollbar" >

            <div className='flex px-6  items-center gap-2'> <FaUserShield className='text-secondary' size={25} />
                <span className='text-lg font-semibold  gap-2 text-black'>Profile Information</span>
            </div>

            <div className='mt-4 px-6 flex flex-col gap-1'>
                <div className='flex flex-row items-center   gap-2'>
                    <div className='text-2xl font-bold   gap-2 text-primary'>Hello, Ashish V Senger</div>
                    <div className='border-r-[1.5px] h-5 border-primary' />
                    <TbEdit size={22} className='cursor-pointer' />
                </div>
                <div className='flex flex-row items-center gap-2'>
                    <div className="bg-gray-200 text-gray-500 text-[9px] py-0.5 rounded-full px-2">
                        Make Awards
                    </div>
                    <div className="bg-sky-100 font-medium text-blue-500 text-[9px] py-0.5 rounded-full px-2">
                        Transactions KYC
                    </div>
                </div>
            </div>
            <div className='bg-slate-100 px-6 p-3 flex flex-row gap-5 items-center overflow-x-auto rounded shadow my-3'>
                {
                    userArr?.map((item, index) =>
                        <div key={index}>
                            <p className='text-sm text-nowrap flex items-center text-gray-400 font-serif'>
                                {item.title}
                                {index === 2 && <MdOutlineKeyboardArrowRight />}
                                {index === 4 && <MdOutlineKeyboardArrowRight />}
                            </p>
                            <p className='text-sm text-nowrap text-primary font-medium'>{item.value}</p>
                        </div>
                    )
                }
            </div>


            <div className="grid px-6 grid-cols-1 md:grid-cols-2 gap-6">
                <div className="">
                    <h3 className="text-md font-bold mb-2 flex items-center gap-2 text-black"> Security</h3>
                    <div className="bg-gray-100 flex flex-row items-center gap-2 p-4 rounded-md">
                        <SlSocialGoogle size={23} className='text-secondary' />
                        <div><p className='text-sm flex items-center text-gray-500 '>Verification</p>
                            <p className='text-sm flex items-center text-gray-800 '>Google Authentication</p>
                        </div>
                    </div>
                </div>

                <div className="">
                    <h3 className="text-md font-bold mb-2 flex items-center gap-2 text-black"><FaUniversity /> Identification</h3>
                    <div className="bg-blue-100 p-4 rounded-md flex gap-2 items-center">
                        <HiOutlineIdentification size={24} className="text-secondary" />
                        <div>
                            <p className='text-sm flex items-center text-black '>Deposit Withdrawal Trading Authority</p>
                            <p className="text-xs text-gray-600">3,000,000 UP IP Daily Withdrawal Limit</p>
                        </div>

                    </div>
                </div>
            </div>


            <div className="grid px-6 grid-cols-1  md:grid-cols-5 gap-4  py-6">

                <div className=" w-full md:col-span-3 ">
                    <div className='flex items-center gap-2 justify-between'>
                        <h3 className="text-md font-bold text-gray-500">Assets</h3>
                        <div className='text-gray-400 text-sm font-medium'>Assets Review | Orders</div>
                    </div>
                    <div className="flex flex-col mt-8 items-center  text-gray-500">
                        <div className='flex flex-col items-center justify-center'>
                            <TfiSearch size={33} className='text-gray-300' />
                            <p className="text-xs mt-1 mb-2">You don’t currently have assets. Deposit to enjoy crypto service benefits.</p>
                        </div>
                        <div className="flex flex-row w-full  items-center justify-between gap-4">

                            <CustomButton title='Deposit' className={"!w-full"} />
                            <CustomButton title='Deposit' className={"!w-full !border-none !text-gray-800 !bg-gray-300"} variant='outlined' />
                        </div>
                    </div>
                </div>
                <div className="  md:col-span-2">
                    <div className='flex items-center gap-2 justify-between'>
                        <h3 className="text-md font-bold  text-gray-500">Referral Program</h3>
                        <div className='text-gray-400 text-sm font-medium'>Inside Now</div>
                    </div>
                    <div className="flex flex-col gap-2 mt-2">
                        <p className="text-gray-400 text-sm font-serif">Invite friends and earn up to 3,000 USD!</p>
                        <div className="flex justify-between mt-2 bg-gray-200 px-3 py-2 rounded-md items-center gap-2">
                            <div className="flex flex-col ">
                                <span className=" text-sm  text-gray-500">Referred Code</span>
                                <span className=" text-sm flex flex-row gap-1 items-center  text-gray-500">{user.referralCode}  <FaRegCopy size={15} className='cursor-pointer' onClick={() => handleCopy(user.referralCode)} /></span>
                            </div>
                            <button
                                className="text-green-600 hover:text-green-800"

                            >

                                <MdRoomPreferences size={20} />
                            </button>
                        </div>
                    </div>
                </div>

            </div>



            <div className="flex flex-col items-center">
                <div className="flex flex-col p-8 items-center space-y-1 mb-8">
                    <FaUserCircle size={90} className='text-gray-400' />
                    <h2 className="text-xl text-gray-400 font-bold ">Shourya V Sengar</h2>
                    <span className="text-white text-[9px] font-medium bg-green-500 px-3 py-0.5 rounded">
                        Verified
                    </span>
                    <div className='flex flex-col items-center justify-center'>
                        <FaCloudUploadAlt size={34} />
                        <button className="text-xs text-gray-300 underline hover:text-gray-400">
                            Upload Picture
                        </button>
                    </div>
                </div>
                <div className="relative overflow-x-auto w-full flex items-center justify-between">

                    <div className="absolute top-8 left-6 right-0 h-0.5 w-[130%] sm:w-[88%] mx-auto bg-secondary z-0" />
                    {verifications.map((item, index) => (
                        <div key={index} className={`flex flex-col items-center  z-10  `}>
                            <div className={`flex items-center w-28 !pl-6`}>
                                <div className="relative  flex items-center justify-center bg-secondary text-white rounded-full w-16 h-16 md:mb-2">
                                    {item.icon}
                                    <div className="absolute !z-50 top-0 right-0">

                                        <FaCheckCircle size={22} className='text-secondary bg-white rounded-full p-0.5 !z-50' />
                                    </div>
                                </div>
                            </div>
                            <div className="text-center h-20 items-center text-secondary text-sm font-semibold">
                                <span className='hover:text-green-400 text-xs md:text-sm cursor-pointer'>{item.label}</span>
                                <div className='text-xs md:text-sm'>
                                    Verified <MdEdit className="text-blue-500 mb-2 inline-flex text-xs mt-1 cursor-pointer" />
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default ProfileInformation;
