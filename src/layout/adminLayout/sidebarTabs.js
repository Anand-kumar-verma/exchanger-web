import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { MdMenu } from "react-icons/md";
import { List, ListItemButton, Collapse } from '@mui/material';
import {
  FaCircle,
  FaUserAlt,
  FaUsersCog,
  FaWallet,
  FaLock
} from 'react-icons/fa';
import { HiMiniArrowTrendingDown } from "react-icons/hi2";
import { HiArrowTrendingUp } from "react-icons/hi2";

const menuData = [
  {
    title: 'Dashboard',
    icon: <FaUserAlt />,
    route: '/admin/dashboard',
  },
  {
    title: 'Users Manager',
    icon: <FaUsersCog className="text-yellow-300" />,
    children: [
      'Pending Users List',
      'Users List',
      'KYC List',
      'Blocked Users',
      'Account Close List',
      'Secret Pin List',
      'Upper Bank List'
    ],
  },
  {
    title: 'Coin Wallet',
    icon: <FaWallet />,
    children: ['Deposit Wallet', 'Withdraw Wallet'],
  },
  {
    title: 'Security',
    icon: <FaLock />,
    children: ['Change Password', 'Two-Factor Auth'],
  },
];



function SidebarTabs() {
  const navigate = useNavigate()
  const [openSections, setOpenSections] = useState({
    'Users Manager': true,
    'Coin Wallet': false,
    'Security': false,
  });
  const location = window.location.pathname

  console.log(location, "location");


  const activeItem = 'Dr Cr Log';

  const toggleSection = (title) => {
    setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }));
  };
  return (
    <div className='flex flex-col bg-blue100 z-40' >
      <div className='flex relative items-center border-b border-white justify-center h-12 '>
        <img
          onClick={() => navigate("/admin/dashboard")}
          src='https://bscscan.com/assets/bsc/images/svg/logos/logo-light.svg?v=25.4.3.0'
          alt='logo'
          className='h-8' />
        <div className=' h-8 w-8 bg-blue100 flex items-center justify-center absolute -right-4 rotate-45'>
          <MdMenu className='text-white -rotate-45 cursor-pointer' />
        </div>

      </div>
      <div className='h-lvh'>
        <div className=" h-screen text-white">
          <List className="pt-2 ">
            {menuData.map((item, idx) => (
              <div key={idx}>
                <ListItemButton
                  className={`hover:bg-blue-700   !flex !justify-between !transition-all !duration-300 !ease-in-out  !flex-row !px-2 ${location === item.route ? "!text-blue100 !bg-white  !rounded-l-full !py-2 !ml-2" : "!py-1 "}`}
                  onClick={() => item.children && toggleSection(item.title)}
                >

                  <div className='flex flex-row items-center gap-2'>
                    <div className={location === item.route ? "" : 'border-l-2 border-gray-500 h-8'}></div>
                    <div>
                      {item.icon}
                    </div>
                    <span className='text-sm'>{item.title}</span>
                  </div>
                  {item.children && (
                    openSections[item.title] ? (
                      <HiArrowTrendingUp className="text-blue100" />
                    ) : (
                      <HiMiniArrowTrendingDown className="text-white" />
                    )
                  )}
                </ListItemButton>

                {item.children && (
                  <Collapse in={openSections[item.title]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {item.children.map((child, cIdx) => (
                        <ListItemButton
                          key={cIdx}
                          className={`!ml-6 !px-0 !h-8 !mt-2 !py-0 rounded-r-full ${child === activeItem
                            ? ' text- font-semibold'
                            : 'hover:text-white'
                            }`}
                        >
                          <div className=" !px-0 !mx-0  relative">
                            <FaCircle className={`text-[8px] ${child === activeItem ? 'text-blue-900' : 'text-white'}`} />
                            <div className={cIdx <= item.children.length - 2 ? 'border-[1px]  -bottom-8 left-1 border-white h-12 absolute' : ""} />
                          </div>
                          <div className={`text-sm ${cIdx === 2 ? "bg-white text-blue100" : "text-white"}  h-full font-semibold !flex w-full rounded-l-full pl-2 !items-center`}>{child}</div>
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                )}
              </div>
            ))}
          </List>
        </div>
      </div>

    </div>
  )
}

export default SidebarTabs
