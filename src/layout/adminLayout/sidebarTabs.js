import React from 'react'
import { useNavigate } from 'react-router'

function SidebarTabs() {
    const navigate=useNavigate()
  return (
    <div className='flex flex-col bg-blue100'>
        <div className='flex items-center border-b border-white justify-center h-12 '>
        <img
              onClick={() => navigate("/admin/dashboard")}
              src='https://bscscan.com/assets/bsc/images/svg/logos/logo-light.svg?v=25.4.3.0'
              alt='logo'
              className='h-8' />

        </div>
        <div className='h-lvh'>
sdfsd
        </div>
      
    </div>
  )
}

export default SidebarTabs
