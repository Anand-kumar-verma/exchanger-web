import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import SidebarTabs from './sidebarTabs';
import Header from './header';
const AdminLayout = ({ isHeader, navLink, component }) => {

  return (
    <div className='flex flex-row w-full  '>
   
        <SidebarTabs />
      
      <div className='flex  w-full flex-col'>
      
      <Header />
       
        <div className='px-2 mt-2'>
          {component}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout
