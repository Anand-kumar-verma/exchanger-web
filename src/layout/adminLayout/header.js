import { FaBell } from "react-icons/fa";
import { FaUserNurse } from "react-icons/fa6";
import Skeleton from '@mui/material/Skeleton';
import { FaWallet } from 'react-icons/fa';
const SkeletonCard = () => {
  return (
    <div className="flex items-center gap-4 px-4 py-2">
      <Skeleton variant="circular" width={36} height={36} />
      <div className="flex flex-col space-y-2">
        <Skeleton variant="rectangular" color='black' width={60} height={8} />
        <Skeleton variant="rectangular" width={80} height={8} />
      </div>
    </div>
  );
};
function Header({
  breadcrums = {},
  updateInnerTab = () => null
}) {
  return (
    <div className='flex flex-col gap-2'>
      <div className="fixed z-30" style={{ width: 'calc(100% - 220px)' }}>
        <div className='bg-gradient-to-r flex px-3 items-center justify-between from-blue-500 to-blue100 h-12 w-full'>
          <div>
            <div className=' md:block hidden lg:w-full  mx-auto'>
              <div className="md:grid grid-cols-3 gap-5  items-center   rounded-md">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <SkeletonCard />
                    {i < 2 && <div className="w-px h-6 bg-white opacity-30 mx-4" />}
                  </div>
                ))}
              </div>
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
      </div>
      <div className="px-2 mt-14">
        <button className="flex items-center w-fit gap-2 px-3 py-2 bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-md shadow hover:brightness-110 transition-all">
          <FaWallet className="text-secondary text-lg" />
          <span className="font-medium text-sm">{breadcrums?.title}</span>
        </button>
      </div>
      <div className="flex px-2  w-full overflow-x-auto">
        {breadcrums?.children !== undefined && breadcrums?.children.map((step, index) => {
          const isLast = index === breadcrums?.children.length;
          const isActive = step?.isActive;
          return (
            <div
              key={index}
              className={`relative text-white text-nowrap  cursor-pointer !px-8 py-1.5 text-xs font-semibold flex items-center ${isActive ? 'bg-gradient-to-r from-blue-900 to-blue-800' : 'bg-gradient-to-r from-blue-700 to-blue-500'
                } ${!isLast && 'mr-1'} `}
              style={{
                clipPath: isLast
                  ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
                  : 'polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%)',
                padding: '0.5rem 1rem',
                marginRight: isLast ? '0' : '-20px',
                zIndex: breadcrums?.children.length - index,
                // minWidth: '125px',
                // maxWidth:"100%",
                justifyContent: 'center'
              }}
              onClick={() => updateInnerTab(step)}
            >
              {step?.title}
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Header
