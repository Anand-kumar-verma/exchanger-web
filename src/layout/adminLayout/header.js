// import React from 'react'
import { FaBell } from "react-icons/fa";
import { FaUserNurse } from "react-icons/fa6";
import Skeleton from '@mui/material/Skeleton';
import { FaWallet } from 'react-icons/fa';
const stepsss = [
  'Pending Users List',
  'Users List',
  'KYC List',
  'Blocked Users',
  'Account Close List',
  'Secret Pin List',
  'Upper Bank List'
];


const SkeletonCard = () => {
  return (
    <div className="flex items-center gap-4 px-4 py-2">
      {/* Avatar Skeleton */}
      <Skeleton variant="circular" width={36} height={36} />

      {/* Text Skeletons */}
      <div className="flex flex-col space-y-2">
        <Skeleton variant="rectangular" color='black' width={60} height={8} />
        <Skeleton variant="rectangular" width={80} height={8} />
      </div>
    </div>
  );
};
function Header() {
  const activeStep = 3;
  return (
    <div className='flex flex-col gap-2'>
      <div className='bg-gradient-to-r flex items-center justify-between from-blue-500 to-blue100 h-12 w-full'>


        <div className='flex items-center justify-center w-96 mx-auto'>
          <div className="flex items-center justify-center rounded-md">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <SkeletonCard />
                {/* Divider */}
                {i < 2 && <div className="w-px h-6 bg-white opacity-30 mx-4" />}
              </div>
            ))}
          </div>
        </div>
        <div className='w-28 pl-1 pr-3 flex flex-row justify-between'>
          <div className='h-10 relative w-10 rounded-full flex items-center justify-center bg-white'>
            {
              true ? <div className=' rounded-full absolute text-white -right-1 bg-secondary min-w-5 h-5 text-xs text-center flex items-center justify-center -top-0.5'>3</div> :
                <div className=' rounded-full absolute text-white right-2 bg-secondary p-1 top-2'></div>
            }
            <FaBell size={25} />
          </div>
          <div className='h-10 w-10 rounded-full flex items-center justify-center bg-white'>
            <FaUserNurse size={25} className='text-red-500' />
          </div>
        </div>
      </div>
      <button className="flex items-center mx-2 w-fit gap-2 px-3 py-2 bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-md shadow hover:brightness-110 transition-all">

        <FaWallet className="text-secondary text-lg" />

        <span className="font-medium text-sm">Debit Wallet</span>
      </button>
      <div className="flex mx-2 w-full overflow-x-auto">
        {stepsss.map((step, index) => {
          const isLast = index === stepsss.length;
          const isActive = index === activeStep;

          return (
            <div
              key={index}
              className={`relative text-white px-4 py-1.5 text-xs font-semibold flex items-center ${isActive ? 'bg-gradient-to-r from-blue-900 to-blue-800' : 'bg-gradient-to-r from-blue-700 to-blue-500'
                } ${!isLast && 'mr-1'} `}
              style={{
                clipPath: isLast
                  ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
                  : 'polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%)',
                padding: '0.5rem 1rem',
                marginRight: isLast ? '0' : '-20px', // overlap with next
                zIndex: stepsss.length - index, // keep correct stacking
                minWidth: '155px',
                justifyContent: 'center'
              }}
            >
              {step}
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Header
