import React, { useEffect } from 'react'
import Header from './header'
import Footer from './footer'
import { MdKeyboardArrowDown } from "react-icons/md";
import { SidebarMenu } from './sidebarMenu';
import BottomTab from './bottomTab';
import { useLocation } from 'react-router';
const UsersLayout = ({ isHeader, navLink, component }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className={isHeader ? "" : 'bg-gray-50'}>
      <div className="font-bold text-green-300 ">
        <Header isHeader={isHeader} />
      </div>
      {isHeader ?
        <div className={`r-5 pt-2  ${navLink === "/profile-information" ? "" : "pt-6"} `}>
          <div className="flex pl-5 pr-5 flex-col gap-2">
            <h1 className="text-xl font-bold text-gray-400 ">My Account</h1>
            <div className="bg-secondary overflow-hidden rounded-lg text-justify md:text-start p-2 md:p-4 flex items-center justify-between gap-3 relative">
              {/* Mobile marquee scrolling text */}
              <div className="md:hidden overflow-hidden whitespace-nowrap">
                <p className="animate-marquee text-gray-200 text-sm leading-relaxed inline-block">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
                </p>
              </div>

              {/* Static text for md+ */}
              <p className="hidden md:block text-gray-200 text-sm leading-relaxed flex-1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
              </p>

              {/* Right arrow icon - always visible */}
              <MdKeyboardArrowDown className="text-white text-2xl shrink-0" />
            </div>


          </div>
          <div className="flex w-full flex-row gap-2 mt-5">
            <div className='w-56 hidden lg:block'>
              <SidebarMenu />
            </div>
            <div className='w-full'>{component}</div>
          </div>
        </div> :
        <div className={navLink === "/sport-trade" ? "w-full" : 'w-full pt-5'}>{component}</div>
      }
      <div className='sm:pb-0 pb-20 bg-white'>
        <Footer />
        <BottomTab />
      </div>
    </div>
  );
};

export default UsersLayout
