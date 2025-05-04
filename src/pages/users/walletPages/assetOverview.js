import React from 'react'
import { FaCoins, FaPlus } from 'react-icons/fa';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { RiCheckboxMultipleBlankFill } from 'react-icons/ri';
import CustomButton from '../../../components/customButton';
import CustomMenu from '../../../components/customMenu';
import { IoIosArrowDown } from 'react-icons/io';
const tab = [{ label: "Deposit" }, { label: "Withdraw" }, { label: "Transfer" }]
function AssetOverview() {
    const [activeTab, setActiveTab] = React.useState(tab[0].label)
    const handleTabClick = (tab) => {
        setActiveTab(tab.label)
    }
    const isActive = (tab) => {
        return activeTab === tab ? "text-secondary bg-secondary text-white px-3 py-1 shadow roiunded" : "text-primary"
    }





    return (
        <div className="px-6 py-2 w-full  h-screen overflow-y-auto hide-scrollbar" >
            <div className='flex flex-row items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <RiCheckboxMultipleBlankFill className='text-secondary' size={25} />
                    <span className='text-lg font-semibold  gap-2 text-black'>Manage Bank</span>
                </div>
                <div className='hidden md:block'>
                    <div className='flex flex-row items-center  gap-4 '>
                        {
                            tab.map((item, index) => (
                                <div key={index} className={`text-sm font-medium cursor-pointer ${isActive(item.label)}`} onClick={() => handleTabClick(item)}>{item.label}</div>
                            ))

                        }
                    </div>
                </div>
                <div className='block md:hidden '>
                    <CustomMenu menuItems={tab} avatarText={<div className='text-gray-500 border p-1 px-3 rounded-md bg-white font-medium gap-1 flex items-center text-sm text-nowrap'>View <IoIosArrowDown size={15} /> </div>} />
                </div>

            </div>
            <div className="flex flex-col w-full mt-8 ">
                <div className="flex-1">
                    <h2 className="text-gray-500 font-medium text-sm mb-1">Total assets</h2>
                    <div className="text-2xl font-bold text-gray-600">251 <span className="text-sm">USDT</span></div>
                    <div className="text-sm text-gray-500 mt-1">≈ $251</div>


                </div>


                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-8'>
                    <div className="">
                        <h3 className="text-gray-600 font-semibold mb-2">Asset Allocation</h3>
                        <div className='flex flex-row mt-5  items-center justify-between'>
                            <div className="flex flex-col  gap-1">
                                <p className="text-sm font-normal text-gray-400">Spot Trade</p>
                                <span className="text-sm text-gray-700 font-semibold">
                                    251 USDT = gm1
                                </span>
                            </div>
                            <MdOutlineKeyboardArrowRight />
                        </div>
                    </div>
                    <div className="w-full mx-0   md:px-4">
                        <h3 className="text-gray-600 font-semibold mb-2">Fund your wallet</h3>

                        <div className="mb-4 md:ml-8 mt-7">
                            <CustomButton title="I don't have crypto" className="text-nowrap !rounded-tl-2xl !rounded-br-2xl" startIcon={<FaPlus />} />
                            <div className="text-xs text-gray-600 mt-1 ml-1">
                                Deposit your existing assets via blockchain
                            </div>
                        </div>

                        <div className="mb-4 mt-9 md:ml-8">
                            <CustomButton title="I don't have crypto" className="text-nowrap !rounded-tl-2xl !rounded-br-2xl" startIcon={<FaCoins />} />
                            <div className="text-xs text-gray-600 mt-1 ml-1">
                                Buy crypto including USDT directly with ease.
                            </div>
                        </div>

                    </div>
                </div>



            </div>
        </div>
    )
}

export default AssetOverview
