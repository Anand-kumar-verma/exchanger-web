import React from 'react'
import { FaMoneyBillWave, FaRegListAlt, FaUser } from 'react-icons/fa';
import { FaMoneyBillWheat, FaTicket } from 'react-icons/fa6';
import { FaEthereum } from "react-icons/fa";
import { SiBinance } from "react-icons/si";
import { IoDiamondSharp } from "react-icons/io5";

const GasCard = ({ icon, token, balance, address }) => {
  return (
    <div className="flex items-center justify-between bg-white shadow rounded p-4 mb-4 border relative">
      <div className="flex items-center gap-4">
        <div className="bg-blue-500 p-3 rounded-md text-xl">
          <FaMoneyBillWheat className='!text-white' />
        </div>
        <div>
          <p className="text-gray-500 font-normal">Balance: {balance}</p>
          <p className="text-sm text-gray-400">{token} GAS MANAGER</p>
          <p className="text-[12px] text-gray-400">
            GAS MANAGER Address: <span className="break-all">{address}</span>
          </p>
        </div>
      </div>
      <div className=" text-3xl text-yellow-400">
        {icon}
      </div>
    </div>
  );
};

function Dashboard() {
  return (
    <div className='pb-12'>
      <div className='grid gap-4 md:grid-cols-2 grid-cols-1 lg:grid-cols-4'>
        <div className="max-w-xs rounded-xl shadow  overflow-hidden">
          <div className="bg-gradient-to-r relative h-16 from-[#6BE9F2] via-[#437CED] to-[#7958F5] p-4 flex justify-center">
            <div className="border-2 border-white from-[#6BE9F2] via-[#437CED] to-[#7958F5] bg-gradient-to-r rounded-full absolute top-8 p-3 shadow-md">
              <FaUser className="text-white text-3xl" />
            </div>
          </div>
          <div className="bg-white p-4 mt-4 text-center">
            <div className="text-2xl font-semibold text-gray-600">41</div>
            <div className=" font-semibold text-black">Total Users</div>
          </div>
        </div>
        <div className="max-w-xs rounded-xl shadow  overflow-hidden">
          <div className="bg-gradient-to-r relative h-16 from-[#8425B8] via-[#C13BAE] to-[#FF3B7E] p-4 flex justify-center">
            <div className="border-2 border-white from-[#8425B8] via-[#C13BAE] to-[#FF3B7E] bg-gradient-to-r rounded-full absolute top-8 p-3 shadow-md">
              <FaMoneyBillWave className="text-white text-3xl" />
            </div>
          </div>
          <div className="bg-white p-4 mt-4 text-center">
            <div className="text-2xl font-semibold text-gray-600">41</div>
            <div className=" font-semibold text-black">Total Deposits</div>
          </div>
        </div>
        <div className="max-w-xs rounded-xl shadow  overflow-hidden">
          <div className="bg-gradient-to-r relative h-16 from-[#00D1C1] via-[#3A7DFF] to-[#6D4BFF] p-4 flex justify-center">
            <div className="border-2 border-white from-[#00D1C1] via-[#3A7DFF] to-[#6D4BFF] bg-gradient-to-r rounded-full absolute top-8 p-3 shadow-md">
              <FaTicket className="text-white text-3xl" />
            </div>
          </div>
          <div className="bg-white p-4 mt-4 text-center">
            <div className="text-2xl font-semibold text-gray-600">41</div>
            <div className=" font-semibold text-black">All Tickets</div>
          </div>
        </div>
        <div className="max-w-xs rounded-xl shadow  overflow-hidden">
          <div className="bg-gradient-to-r relative h-16 from-[#3A9D32] to-[#A8E633] p-4 flex justify-center">
            <div className="border-2 border-white from-[#3A9D32] to-[#A8E633] bg-gradient-to-r rounded-full absolute top-8 p-3 shadow-md">
              <FaRegListAlt className="text-white text-3xl" />
            </div>
          </div>
          <div className="bg-white p-4 mt-4 text-center">
            <div className="text-2xl font-semibold text-gray-600">41</div>
            <div className=" font-semibold text-black">Kyc List</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5 mt-4">
        <div className='col-span-3'>
          <p className='mb-1 font-semibold text-lg text-gray-500'>Gas Station Information</p>
          <GasCard
            icon={<SiBinance />}
            token="BNB"
            balance="0.007258470000000000"
            address="0xd7c7DC070B3e4F3454a4e40404a44f1bB8Dd4f30"
          />
          <GasCard
            icon={<IoDiamondSharp className='!text-pink-400' />}
            token="TRON"
            balance="0"
            address="TCoUjLujJg9sUnTnwws41xMxDBgTZscpiLWrm"
          />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
