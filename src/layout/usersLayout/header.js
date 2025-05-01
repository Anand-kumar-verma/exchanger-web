import React, { useState } from 'react'
import CustomButton from '../../components/customButton'
import { LuWallet } from "react-icons/lu";
import { FaIdCard, FaNewspaper, FaRegCircleUser } from "react-icons/fa6";
import { IoNotificationsOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { RiBankCard2Line } from "react-icons/ri";
import { Badge } from '@mui/material';
import CustomDrawer from '../../components/customDrawer';
import { PiUserCircleLight } from "react-icons/pi";
import { BiSolidCloudUpload } from "react-icons/bi";
import { GrShieldSecurity } from "react-icons/gr";
import { useNavigate } from 'react-router';
import { MdOutlineManageAccounts, MdOutlineSettingsSuggest } from "react-icons/md";
import CustomMenu from '../../components/customMenu';
import { FaMoneyBillWave, FaWallet, FaClipboardList, FaUniversity, FaUserFriends } from "react-icons/fa";
import RightSidebarDrawer from './rightSidebarDrawer';
import classNames from 'classnames';
const tabArr = [
  {
    title: "About",
    nav: "/",
  },
  {
    title: "Sport Trade",
    nav: "/sport-trade",
  },
  {
    title: "Margin Trade",
    nav: "/margin-trade",
  },
  {
    title: "Future Trade",
    nav: "/future-trade",
  },
  {
    title: "Forex",
    nav: "/forex",
  },
  {
    title: "Market",
    nav: "/market",
  },
  {
    title: "Order",
    nav: "/order",
  },

  {
    title: "Transactions",
    nav: "/transactions",
  },

  {
    title: "Assets",
    nav: "/assets",
  },

]

const menuItems = [
  { id: 0, name: 'Profile', icon: <PiUserCircleLight size={25} />, nav: "/profile-information" },
  { id: 1, name: 'Security', icon: <GrShieldSecurity size={20} />, nav: "/safety-security" },
  { id: 2, name: 'Identification', icon: <FaIdCard size={20} />, nav: "/online-kyc" },
  { id: 3, name: 'Settings', icon: <MdOutlineSettingsSuggest size={20} />, nav: "/settings" },
  { id: 4, name: 'Online KYC', icon: <FaIdCard size={20} />, nav: "/online-kyc" },
  { id: 5, name: 'Offline/Manual KYC', icon: <MdOutlineManageAccounts size={20} />, nav: "/offline-manual-kyc" },
  { id: 6, name: 'Manage Bank', icon: <FaUniversity size={20} />, nav: "/manage-bank" },
  { id: 7, name: 'Nominee Details', icon: <FaUserFriends size={20} />, nav: "/nominee-details" },
  { id: 8, name: 'News and Updates', icon: <FaNewspaper size={20} />, nav: "/news-and-update" },
]


function Header({ isHeader }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate()
  const location = window.location.pathname
  const handleNavigation = (nav) => {
    navigate(nav);
    setDrawerOpen(false)
  };
  const handleNavigationTab = (nav) => {
    navigate(nav);
  }
  return (
    <>
      <div className='border-b shadow fixed w-full z-50 bg-white border-gray-300 mx-auto'>
        <div className='px-5 md:px-10 mx-auto flex flex-row items-center justify-between'>
          <div className='flex flex-row items-center py-3 gap-3'>
            <img src='https://bscscan.com/assets/bsc/images/svg/logos/logo-light.svg?v=25.4.3.0'
              alt='logo'
              className='h-8' />
            <div className='hidden lg:block lg:flex flex-row items-center gap-3'>
              {
                tabArr?.map((item, index) =>
                  <span onClick={() => handleNavigationTab(item.nav)} key={index}
                    className={`text-sm  cursor-pointer font-medium 
                ${location === item.nav ? "text-secondary" : "text-primary"}`}>{item.title}</span>)
              }
            </div>
          </div>
          <div className='flex flex-row items-center py-3 gap-3'>
            <CustomButton title='Deposit' className={"!hidden sm:!block"} />
            <CustomMenu
              avatarText={<LuWallet size={18} color='black' />}
              avatarUrl=''
              className='!px-3 pb-3'
              tooltipTitle='Wallet Details'
            >
              <div className='flex flex-col gap-1'>
                <div className="w-64 flex flex-col">
                  <div className="mb-6">
                    <div className="text-gray-600 font-semibold text-xs">Assets (USDT)</div>
                    <p className="text-gray-500 font-normal text-sm">0.00000000 USDT</p>
                    <p className="text-secondary text-sm">-$0.00</p>

                    <div className="flex w-full gap-2 mt-4">
                      <CustomButton onClick={() => navigate("/asset-overview")} title="Deposit" className="w-full" />
                      <CustomButton title="Withdraw" className="w-full !bg-white !font-semibold !border !text-secondary  !border-secondary" variant='outlined' />

                    </div>
                  </div>
                  <nav className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 text-gray-700 hover:!text-green-600 cursor-pointer">
                      <FaMoneyBillWave className='text-secondary' size={20} />

                      <span className="text-sm text-gray-600 font-medium">Overview</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700 hover:!text-green-600 cursor-pointer">
                      <FaWallet className='text-secondary' size={20} />

                      <span className="text-sm text-gray-600 font-medium">Spot Assets</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700 hover:text-green-600 cursor-pointer">
                      <FaClipboardList className='text-secondary' size={20} />

                      <span className="text-sm text-gray-600 font-medium">Orders</span>
                    </div>
                  </nav>
                </div>
              </div>
            </CustomMenu>
            <FaRegCircleUser size={25} onClick={() => setDrawerOpen(true)} className='text-secondary cursor-pointer' />
            <div className='border-r h-8 border-secondary' />

            <Badge badgeContent={4} color='error'>
              <IoNotificationsOutline color='black' size={22} />
            </Badge>
            <RiBankCard2Line color='black' className='hidden lg:block' size={22} />
            <TbWorld color='black' className='hidden lg:block' size={22} />
            <RightSidebarDrawer itemTabArr={tabArr} />


          </div>

        </div>
      </div>
      <div className={isHeader ? 'pb-14' : 'pb-14 bg-gray-700'} />
      <CustomDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        title=""
        width={280}
        anchor="right" // or "left", "top", "bottom"
        boxClassName="!pt-16"
        className='!z-10'
      >
        <div className='flex flex-col gap-2'>
          <div className='flex flex-row items-center gap-2'>
            <PiUserCircleLight size={45} className='text-secondary' />
            <div className='flex flex-col items-center'>
              <div className='text-xs text-slate-500 font-medium'>Yadav V kumar</div>
              <div className='text-xs'><span>UID:</span><span>29384729</span></div>
            </div>
          </div>
          <div className='flex flex-row gap-2'>
            <div className="bg-gray-100 rounded-full px-2 p-0.5 text-[10px] text-gray-500">MUKESH ACCOUND</div>
            <div className="bg-red-100 rounded-full gap-1 flex items-center px-2 p-0.5 text-[10px] text-red-500"><BiSolidCloudUpload /> <span>Upload</span></div>
          </div>
          <div className='bg-gray-100 p-2 flex flex-col  text-xs px-4 text-gray-600 rounded-md'>
            <span className='text-nowrap'>Invite Friends and earn up to 5,000 USDT!</span>
            <span>4V4NATG1</span>

          </div>
          <ul className="space-y-1">
            {menuItems.map((item, index) => (
              <li
                key={item.id}
                onClick={() => handleNavigation(item.nav)}
                className={classNames(
                  `flex items-center gap-2  font-medium hover:bg-green-100 p-2 rounded-md cursor-pointer transition ${location === item.nav ? "!text-gray-50 !bg-secondary" : ""}`,
                  {
                    'lg:hidden': index > 3,
                  }
                )}
              >
                <span className={` ${location === item.nav ? "text-white" : "text-secondary"}`}>{item.icon}</span>
                <span className={`text-sm ${location === item.nav ? "text-white" : "text-primary"}`}>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </CustomDrawer>
    </>
  )
}

export default Header
