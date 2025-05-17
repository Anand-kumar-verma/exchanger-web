import { useState } from 'react'
import { useNavigate } from 'react-router';
import CustomDrawer from '../../components/customDrawer';
import { MdMenu } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';
import { FaChevronRight, FaChevronDown } from 'react-icons/fa';
function LeftSidebarDrawar({ itemTabArr = [] }) {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const navigate = useNavigate()
    const location = window.location.pathname
    const [openMenus, setOpenMenus] = useState([]);
    const handleNavigationTab = (nav) => {
        navigate(nav);
    }
    const handleNavigation = (nav) => {
        navigate(nav);
        setDrawerOpen(false)
    };
    const toggleMenu = (id) => {
        setOpenMenus(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };

    // const handleNavigation = (route) => {
    //   if (route) navigate(route); // Your routing function
    // };

    return (
        <div>
            {drawerOpen ?
                <IoClose onClick={() => setDrawerOpen(false)} color='black' className='block lg:hidden cursor-pointer !text-white -rotate-45 transform transition duration-300 ease-in-out' size={22} />
                :
                <MdMenu onClick={() => setDrawerOpen(true)} color='black' className='block lg:hidden cursor-pointer !text-white -rotate-45 transform  transition duration-300 ease-in-out' size={22} />
            }
            <CustomDrawer
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                title={""}
                width={250}
                anchor="left"
                boxClassName="!pt-2"
                className='!z-20'
                size={25}
                isClose={false}

            >
                <div className='flex flex-col gap-2 mt-12'>
                    <ul className="space-y-1">
                        {itemTabArr?.map((item) => {
                            const isOpen = openMenus.includes(item.id);
                            const hasChildren = Array.isArray(item.children);
                            const Icon = item.icons;

                            return (
                                <li key={item.id}>
                                    <div
                                        onClick={() =>
                                            hasChildren ? toggleMenu(item.id) : handleNavigation(item.route)
                                        }
                                        className={`flex items-center justify-between p-2 rounded-md cursor-pointer transition ${location === item.route ? 'bg-primary text-white' : 'text-primary'
                                            }`}
                                    >
                                        <div className="flex items-center gap-2">
                                            {Icon && <Icon size={16} />}
                                            <span className="text-sm font-medium">{item.title}</span>
                                        </div>
                                        {hasChildren && (
                                            <span>{isOpen ? <FaChevronDown size={12} /> : <FaChevronRight size={12} />}</span>
                                        )}
                                    </div>

                                    {/* Children Items */}
                                    {hasChildren && isOpen && (
                                        <ul className="pl-6 mt-1 space-y-1">
                                            {item.children.map((child) => (
                                                <li
                                                    key={child.id}
                                                    onClick={() => handleNavigation(child.route)}
                                                    className={`p-2 rounded-md cursor-pointer transition text-sm ${location === child.route ? 'bg-secondary text-white' : 'text-gray-700 hover:bg-gray-100'
                                                        }`}
                                                >
                                                    {child.title}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </CustomDrawer>
        </div>
    )
}

export default LeftSidebarDrawar
