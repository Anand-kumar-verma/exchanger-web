import SidebarTabs from './sidebarTabs';
import Header from './header';
import { useDispatch, useSelector } from 'react-redux';
import { currentSidebar } from '../../store/slice/adminSidebarSlice';
import { useNavigate } from 'react-router';
const AdminLayout = ({ isHeader, navLink, component }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { adminSidebar } = useSelector((state) => state?.adminSidebarList)
  const activeSidebar = adminSidebar.filter(item => item.isActive);
  const updateInnerTab = (child) => {
    navigate(child.route)
    dispatch(currentSidebar(child?.route));
  }
  return (
    <div className='flex flex-row w-full  '>

      <SidebarTabs breadcrums={activeSidebar?.[0]} updateInnerTab={updateInnerTab} sidebarList={adminSidebar} />

      <div className='flex  w-full overflow-auto mb-12  ml-[220px] flex-col'>

        <Header breadcrums={activeSidebar?.[0]} updateInnerTab={updateInnerTab} />

        <div className='px-2 mt-2'>
          {component}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout
