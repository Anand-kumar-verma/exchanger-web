import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { TbSettingsCog } from "react-icons/tb";
import { FaUsers } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";
import { useNavigate } from 'react-router';


const tabs = [
  {
    title: "Home",
    icons: AiFillHome,
    nav: "/"
  },
  {
    title: "Deposit",
    icons: BsBank2,
    nav: "/deposit"
  },
  {
    title: "User",
    icons: FaUsers,
    nav: "/profile-information"
  },
  {
    title: "Setting",
    icons: TbSettingsCog,
    nav: "/settings"
  }
]


function BottomTab() {
  const navigate = useNavigate()
  const location = window.location.pathname
  return (
    <div className='fixed bottom-0 z-30 w-full sm:hidden block rounded-t-2xl bg-white  px-2 py-2'>
      <div className='grid grid-cols-4 items-center justify-center'>
        {
          tabs?.map((item, index) =>
            <div key={index} className='flex flex-col cursor-pointer items-center justify-center' onClick={() => navigate(item.nav)}>
              <span><item.icons size={22} className={item?.nav === location ? " text-secondary" : "text-gray-500"} /></span>
              <span className={`text-sm ${item?.nav === location ? " text-secondary" : "text-gray-500"}`}>{item.title}</span>

            </div>
          )
        }
      </div>
    </div>
  )
}

export default BottomTab
