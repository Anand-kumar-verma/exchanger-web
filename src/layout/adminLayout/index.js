import React from 'react'
// import Footer from './footer'
import { MdKeyboardArrowDown } from "react-icons/md";
import SidebarTabs from './sidebarTabs';
import Header from './header';
// import { SidebarMenu } from './sidebarMenu';
// import BottomTab from './bottomTab';
const AdminLayout = ({ isHeader, navLink, component }) => {

  return (
    <div className='flex flex-row w-full  '>
      <div className='bg-red-500  w-60'>
        <SidebarTabs />
      </div>
      <div className='flex  w-full flex-col'>
      
          <Header />
       
        <div>
          {component}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout
