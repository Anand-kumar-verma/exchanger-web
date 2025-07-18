import SidebarTabs from './sidebarTabs';
import Header from './header';
import { useDispatch, useSelector } from 'react-redux';
import { currentSidebar } from '../../store/slice/adminSidebarSlice';
import { useLocation, useNavigate } from 'react-router';
import { useEffect } from 'react';
const AdminLayout = ({ isHeader, navLink, component }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { pathname } = useLocation();
  const { adminSidebar } = useSelector((state) => state?.adminSidebarList)
  const activeSidebar = adminSidebar.filter(item => item.isActive);
  const updateInnerTab = (child) => {
    navigate(child.route)
    dispatch(currentSidebar(child?.route));
  }



  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className='flex flex-row w-full  '>

      <SidebarTabs breadcrums={activeSidebar?.[0]} updateInnerTab={updateInnerTab} sidebarList={adminSidebar} />

      <div className='flex  w-full overflow-auto mb-12 ml-0 md:ml-[220px] flex-col'>

        <Header adminSidebar={adminSidebar} breadcrums={activeSidebar?.[0]} updateInnerTab={updateInnerTab} />

        <div className='px-2 mt-2'>
          {component}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout
