import { useState } from 'react';
import { useNavigate } from 'react-router';
import { MdMenu } from 'react-icons/md';
import { List, ListItemButton, Collapse } from '@mui/material';
import {
  FaCircle,
  FaUsers,
} from 'react-icons/fa';
import { HiMiniArrowTrendingDown } from 'react-icons/hi2';
import { HiArrowTrendingUp } from 'react-icons/hi2';
import { useDispatch, useSelector } from 'react-redux';
import { currentSidebar } from '../../store/slice/adminSidebarSlice';

function SidebarTabs({
  sidebarList = [],
  updateInnerTab = () => null
}) {
  const navigate = useNavigate();
  const [openSections, setOpenSections] = useState({});
  const [currentIndex, setCurrentIndex] = useState(1);
  const dispatch = useDispatch()
  const toggleSection = (title) => {
    setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }));
  };
  const changeRoute = (item) => {
    dispatch(currentSidebar(item?.route));
    if (item?.children) {
      toggleSection(item?.title)
      setCurrentIndex(item?.id)
      navigate(item?.route)
    }
    else {
      navigate(item?.route)
      setCurrentIndex(item?.id)
    }
  }

  return (
    <div className="flex flex-col bg-blue100 z-40 w-56">
      <div className="flex relative items-center border-b border-white justify-center h-12">
        <img
          onClick={() => navigate('/admin/dashboard')}
          src="https://bscscan.com/assets/bsc/images/svg/logos/logo-light.svg?v=25.4.3.0"
          alt="logo"
          className="h-8 cursor-pointer"
        />
        <div className="h-8 w-8 bg-blue100 flex items-center justify-center absolute -right-4 rotate-45">
          <MdMenu className="text-white -rotate-45 cursor-pointer" />
        </div>
      </div>
      <div className="h-screen overflow-y-auto">
        <List className="pt-2 text-white">
          {sidebarList.map((item, idx) => (
            <div key={idx}>
              <ListItemButton
                className={`hover:bg-blue-700   !flex !justify-between !transition-all !duration-300 !ease-in-out  !flex-row !px-2 ${item.id === currentIndex ? "!text-blue100 !bg-white  !rounded-l-full !py-2 !ml-2" : "!py-1 "}`}
                onClick={() => {
                  changeRoute(item)



                }}
              >
                <div className="flex flex-row items-center gap-2">
                  <div className={item?.id === currentIndex ? '' : 'border-l-2 border-gray-500 h-8'}></div>
                  {item?.icons && <div><FaUsers /></div>}
                  <span className="text-sm">{item?.title}</span>
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
                        onClick={() =>
                          updateInnerTab(child)
                        }
                        className={`!ml-6 !px-0 !h-8 !mt-2 !py-0 rounded-r-full ${child?.isActive
                          ? ' text- font-semibold'
                          : 'hover:text-white'
                          }`}
                      >
                        <div className="relative">
                          <FaCircle
                            className={`text-[8px] ${child?.isActive ? 'text-white' : 'text-white'
                              }`}
                          />
                          {cIdx < item.children.length - 1 && (
                            <div className="border-l border-white h-12 absolute left-1 -bottom-8" />
                          )}
                        </div>
                        <div

                          className={`text-[12px] ${child?.isActive ? "bg-white text-blue100" : "text-white"}  h-full font-semibold !flex w-full rounded-l-full pl-2 !items-center`}
                        >
                          {child.title}
                        </div>
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
  );
}

export default SidebarTabs;
