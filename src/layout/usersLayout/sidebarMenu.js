import * as React from 'react';
import classNames from 'classnames';
import { FaUserShield, FaIdCard, FaUniversity, FaUserFriends, FaCog, FaLock, FaNewspaper } from 'react-icons/fa';
import { MdOutlineManageAccounts } from 'react-icons/md';
import { useNavigate } from 'react-router';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
export const SidebarMenu = () => {
    const navigate = useNavigate()
    const location = window.location.pathname
    const menuItems = [
        { id: 0, name: 'Profile Information', icon: <FaUserShield size={20} />, nav: "/profile-information" },
        { id: 1, name: 'Safety & Security', icon: <FaLock size={20} />, nav: "/safety-security" },
        { id: 2, name: 'Online KYC', icon: <FaIdCard size={20} />, nav: "/online-kyc" },
        { id: 3, name: 'Offline/Manual KYC', icon: <MdOutlineManageAccounts size={20} />, nav: "/offline-manual-kyc" },
        { id: 4, name: 'Manage Bank', icon: <FaUniversity size={20} />, nav: "/manage-bank" },
        { id: 5, name: 'Nominee Details', icon: <FaUserFriends size={20} />, nav: "/nominee-details" },
        { id: 6, name: 'Settings', icon: <FaCog size={20} />, nav: "/settings" },
        { id: 7, name: 'Security', icon: <FaLock size={20} />, nav: "/security" },
        { id: 8, name: 'News and Updates', icon: <FaNewspaper size={20} />, nav: "/news-and-update" },
    ];
    const handleNavigation = (nav) => {
        navigate(nav);
    };
    return (
        <div className="w-56 mb-6">
            <ul className="space-y-4">
                {menuItems.map((item, index) => (
                    <li key={index} onClick={() => handleNavigation(item.nav)}
                        style={{ boxSizing: "border-box" }}
                        className={classNames("flex pl-4 items-center gap-3 border-l-[3px]  border-transparent font-medium hover:bg-green-100 p-2  cursor-pointer transition", location === item.nav ? " !border-secondary" : "")}>
                        <span className="text-secondary">{item.icon}</span>
                        <span className="text-sm text-primary">{item.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};





const menuItems = [
    { id: 0, name: 'Assets Overview', icon: <FaUserShield size={20} />, nav: "/asset-overview" },
    { id: 1, name: 'Sport Trade', icon: <FaLock size={20} />, nav: "/pending" },
    { id: 2, name: 'Pending', icon: <FaIdCard size={20} />, nav: "/pending" },
    { id: 3, name: 'Deposit', icon: <MdOutlineManageAccounts size={20} />, nav: "/deposit" },
    { id: 4, name: 'Withdraw', icon: <MdOutlineManageAccounts size={20} />, nav: "/pending" },
    { id: 5, name: 'Transactions History', icon: <MdOutlineManageAccounts size={20} />, nav: "/pending" },

];
export const WalletSidebar = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        console.log(menuItems?.[newValue]?.nav,"newValue");
        setValue(newValue);
        navigate(menuItems?.[newValue]?.nav);
    };
    const navigate = useNavigate()
    const location = window.location.pathname
   
    const handleNavigation = (nav) => {
        navigate(nav);
    };
    return (
        <div className="md:w-56 mb-6">
            <ul className="space-y-4 hidden md:block ">
                {menuItems.map((item, index) => (
                    <li key={index} onClick={() => handleNavigation(item.nav)}
                        style={{ boxSizing: "border-box" }}
                        className={classNames("flex pl-4 items-center gap-3 border-l-[3px]  border-transparent font-medium hover:bg-green-100 p-2  cursor-pointer transition", location === item.nav ? " !border-secondary" : "")}>
                        <span className="text-secondary">{item.icon}</span>
                        <span className="text-sm text-primary">{item.name}</span>
                    </li>
                ))}
            </ul>

            <div className={`bg-white   mt-8 md:hidden block`}>
                <div className=" px-4 w-full overflow-hidden">
                    <div className="max-w-screen-lg mx-auto">
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            variant="scrollable"
                            scrollButtons="auto"
                            aria-label="scrollable auto tabs example"
                        >
                            {
                                menuItems?.map((item, index) =>
                                    <Tab label={item.name} />
                                 )
                            }
                            
                            
                        </Tabs>
                    </div>
                </div>
            </div>

        </div>
    );
};

