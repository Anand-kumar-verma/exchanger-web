import React from 'react'
import Header from './header'
import Footer from './footer'
import { MdKeyboardArrowDown } from "react-icons/md";
import { SidebarMenu } from './sidebarMenu';
const UsersLayout = ({ isHeader,navLink, component }) => {
  return (
    <div className={isHeader ? "" : 'bg-gray-100'}>
      <div className="font-bold text-green-300 ">
        <Header isHeader={isHeader} />
      </div>
      {isHeader ? 
      <div className={`r-5  ${navLink==="/profile-information" ? "" : "pt-6"} `}>
        <div className="flex pl-5 flex-col gap-2">
          <h1 className="text-xl font-bold text-gray-400 ">My Account</h1>
          <div className="bg-secondary rounded-lg text-justify md:text-start p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
            <p className="text-gray-200 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
            </p>

            <MdKeyboardArrowDown className="text-white text-2xl hidden md:block md:ml-4" />
          </div>

        </div>
        <div className="flex w-full flex-row gap-2 mt-5">
          <div className='w-56 hidden lg:block'>
            <SidebarMenu />
          </div>
          <div className='w-full'>{component}</div>
        </div>
      </div> :
        <div className='w-full pt-5'>{component}</div>
      }
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default UsersLayout
