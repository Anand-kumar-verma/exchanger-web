import React from 'react'
import CustomButton from '../../../components/customButton'
import { FaBitcoin, FaChevronDown, FaMoneyBillWave } from 'react-icons/fa'
import { Stepper } from 'react-form-stepper';
import Label from '../../../components/label';
import CustomAutoComplete from '../../../components/customAutoComplete';
import CustomChips from '../../../components/customChips';
import { FaEthereum } from 'react-icons/fa';
import { SiLitecoin, SiRipple } from 'react-icons/si';
import { FaInfoCircle } from 'react-icons/fa';
const steps = [
    { label: "Choose token and network. Copy the deposit address." },
    { label: "Withdrawal from other wallets or exchanges to the deposit address." },
    { label: "Wait for the original confirmation." },
    { label: "Wait for the required confirmations." },
];

const tokenDepositArr = [
    { name: 'BTC', icon: <FaBitcoin className="text-orange-500" /> },
    { name: 'ETH', icon: <FaEthereum className="text-black" /> },
    { name: 'USDT', icon: <SiRipple className="text-black" /> },
    { name: 'LTC', icon: <SiLitecoin className="text-blue-500" /> },
    { name: 'XRP', icon: <SiRipple className="text-black" /> },
];

export default function Deposit() {

    return (
        <div className="py-2 w-full  h-screen overflow-y-auto hide-scrollbar" >
            <div className='flex px-6  flex-row items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <FaMoneyBillWave className='text-secondary' size={25} />
                    <span className='text-lg font-semibold  gap-2 text-black'>Deposit</span>
                </div>
                <CustomButton title='Deposit Code' variant='outlined' className='!bg-transparent !border !border-gray-300 !shadow-none !text-black   !text-sm ' />
            </div>
            <div className="w-full overflow-x-auto text-start float-start  md:px-4 py-6">

                <Stepper
                    steps={steps}
                    activeStep={2}
                    orientation="verticle"
                    connectorStateColors={true}
                    styleConfig={{
                        activeBgColor: '#6BA539', // green background for active step
                        activeTextColor: '#ffffff', // white text
                        completedBgColor: '#6BA539', // green box for completed step
                        completedTextColor: '#ffffff', // white text for completed step
                        inactiveBgColor: '#ccc', // grey background for inactive step
                        inactiveTextColor: '#ffffff', // white text for inactive step
                        size: '1.5em',
                        circleFontSize: '1em',
                        labelFontSize: '0.9em',

                        borderRadius: '50%',
                    
                    }}
                    connectorStyleConfig={{
                        completedColor: '#6BA539',
                        activeColor: '#6BA539',
                        disabledColor: '#ccc',
                        size: 3,
                        style: 'dotted',
                    

                    }}
                    color='#6BA539'
                    width={300}

                />
            </div>
            <div className="w-full px-6 text-start grid grid-cols-1 md:grid-cols-7 gap-4  py-1">
                <div className='md:col-span-4 '>
                    <div className='flex flex-row '>
                        <div className="flex flex-row">
                            <div className='border-l-2 border-dotted relative h-80  left-[15px]  z-10 border-secondary ' />
                            <div className='flex flex-col z-30 gap-20'>
                                {[1, 2, 3].map((step, index) => {


                                    return (
                                        <div key={index} className={`flex items-start ${index === 0 ? "!h-24 relative " : "!h-12 relative "} `}>
                                            <div
                                                style={{ boxSizing: "border-box" }}
                                                className={`w-7 h-7 border-2  border-gray-50 rounded-full flex items-center justify-center font-normal text-sm mr-3 bg-secondary text-white`}
                                            >
                                                {index + 1}
                                            </div>

                                        </div>
                                    );
                                })}
                            </div>

                        </div>
                        <div className=' flex flex-col gap-4 w-full h-full'>
                            <div className='flex flex-col'>
                                <div>
                                    <Label className='!text-lg' title='Choose token to deposit' />
                                    <Label title='toekn' />
                                </div>
                                <CustomAutoComplete className='sm:!w-full !w-[100] ' />

                                {/* <div className='flex flex-row items-center gap-3 mt-3'>
                                    {
                                        tokenDepositArr?.map((item, index) =>
                                            <CustomChips className='!border-none !bg-gray-200' label={item.name} key={index} icon={item?.icon} />
                                        )
                                    }
                                </div> */}
                            </div>


                            <div className='flex flex-col mt-5'>
                                <div>
                                    <Label className='!text-lg' title='Choose a network' />
                                    <Label title='network' />
                                </div>
                                <CustomAutoComplete className='sm:!w-full !w-[100] ' />
                            </div>
                            {/* <div className='flex flex-col mt-4'>
                                <Label className='!text-lg' title='Confirm deposit details' />
                                <div>
                                    <div className="space-y-6">
                                       
                                        <div className="bg-gray-100 p-4 rounded-md text-xs text-gray-700">
                                            <p>
                                                Please note: Deposits will be auto channeled to and can be viewed under the{' '}
                                                <span className="text-secondary font-medium">Spot Assets</span>. Your deposit history can be
                                                viewed under "Deposit History" in{' '}
                                                <span className="text-secondary font-medium">Spot Assets &gt; Assets Record</span>.
                                            </p>
                                            <CustomButton title='Acknowledge' className={"!w-full !mt-2"} />
                                        </div>

                                      
                                        <div className="bg-transparent p-4 border rounded-md">
                                            <div className="grid grid-cols-2 gap-4 text-xs text-gray-700">
                                                <div className="flex items-center gap-1">
                                                    <FaInfoCircle className="text-gray-500" />
                                                    <span>Minimum deposit amount</span>
                                                </div>
                                                <div className="text-right font-medium">1 USDT</div>

                                                <div className="flex items-center gap-1">
                                                    <FaInfoCircle className="text-gray-500" />
                                                    <span>Deposits auto transfer to</span>
                                                </div>
                                                <div className="text-right font-medium">Spot Assets</div>

                                                <div className="flex items-center gap-1">
                                                    <FaInfoCircle className="text-gray-500" />
                                                    <span>Withdrawal unlocked</span>
                                                </div>
                                                <div className="text-right font-medium">3 network confirmations</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div> */}
                        </div>

                    </div>
                </div>
                <div className='md:col-span-3 '>
                    <div className=" p-6 space-y-6">
                        <div>
                            <h2 className="text-xl font-semibold flex items-center gap-2 text-gray-800">

                                Tips
                            </h2>
                            <ul className="list-disc list-inside text-xs mt-2 text-gray-700 space-y-1">
                                <li>
                                    The minimum deposit amount is 1 USDT-TRC20. Any deposit less than 1 USDT-TRC20 will not be credited to your account.
                                </li>
                                <li>
                                    USDT-TRC20 (TRON/TRC20) addresses only accept USDT-TRC20 deposits. Any other assets deposited to USDT-TRC20 addresses cannot be retrieved.
                                </li>
                                <li>
                                    Contract transfer is not allowed at present.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold flex items-center gap-2 text-gray-800">

                                FAQs
                            </h2>
                            <ul className="mt-2 shadow p-4 rounded-md text-blue-600 space-y-2">
                                <li className="hover:underline text-xs text-gray-500 flex gap-2 items-center text-nowrap cursor-pointer"><FaInfoCircle size={13} className="text-gray-700" /> How to Deposit on GlobalX?</li>
                                <li className="hover:underline text-xs text-gray-500 flex gap-2 items-center text-nowrap cursor-pointer"> <FaInfoCircle size={13} className="text-gray-700" /> How to Deal with Missing Deposit?</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            {/* <div className="max-w-5xl mx-auto p-6  rounded-lg shadow space-y-4">
               
                <div className="flex gap-4 border-b">
                    <button className="pb-2 border-b-2 border-black font-semibold text-gray-900">
                        Past USDT Deposits
                    </button>
                    <button className="pb-2 text-gray-500 hover:text-black">Deposit History</button>
                </div>

               
                <div className="grid grid-cols-6 gap-4 items-end">
                   
                    <div className="relative">
                        <label className="text-sm text-gray-700">Type</label>
                        <select className="w-full border rounded px-2 py-1 text-sm appearance-none pr-6">
                            <option>All</option>
                            <option>Deposit</option>
                            <option>Withdrawal</option>
                        </select>
                        <FaChevronDown className="absolute right-2 bottom-3 text-xs text-gray-500 pointer-events-none" />
                    </div>

                   
                    <div className="relative">
                        <label className="text-sm text-gray-700">Wallet</label>
                        <select className="w-full border rounded px-2 py-1 text-sm appearance-none pr-6">
                            <option>All</option>
                            <option>Main</option>
                            <option>Spot</option>
                        </select>
                        <FaChevronDown className="absolute right-2 bottom-3 text-xs text-gray-500 pointer-events-none" />
                    </div>

                   
                    <div className="relative">
                        <label className="text-sm text-gray-700">Status</label>
                        <select className="w-full border rounded px-2 py-1 text-sm appearance-none pr-6">
                            <option>All</option>
                            <option>Completed</option>
                            <option>Pending</option>
                        </select>
                        <FaChevronDown className="absolute right-2 bottom-3 text-xs text-gray-500 pointer-events-none" />
                    </div>

                   
                    <div>
                        <label className="text-sm text-gray-700">From Date</label>
                        <input
                            type="date"
                            className="w-full border rounded px-2 py-1 text-sm"
                        />
                    </div>

                    
                    <div>
                        <label className="text-sm text-gray-700">To Date</label>
                        <input
                            type="date"
                            className="w-full border rounded px-2 py-1 text-sm"
                        />
                    </div>

                  
                    <div>
                        <CustomButton title='Search' />
                    </div>
                </div>
            </div> */}
        </div>
    )
}
