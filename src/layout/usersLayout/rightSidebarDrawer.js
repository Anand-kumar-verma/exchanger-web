import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import CustomDrawer from '../../components/customDrawer';
import { HiOutlineBars3CenterLeft } from 'react-icons/hi2';
import CustomButton from '../../components/customButton';

function RightSidebarDrawer({ itemTabArr }) {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const navigate = useNavigate()
    const location = window.location.pathname

    const handleNavigationTab = (nav) => {
        navigate(nav);
    }
    const handleNavigation = (nav) => {
        navigate(nav);
        setDrawerOpen(false)
    };

    return (
        <div>
            <HiOutlineBars3CenterLeft onClick={() => setDrawerOpen(true)} color='black' className='block lg:hidden cursor-pointer' size={22} />
            <CustomDrawer
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                title={<img alt='Logo' src='https://bscscan.com/assets/bsc/images/svg/logos/logo-light.svg?v=25.4.3.0' className='h-8' />}
                width={280}
                anchor="left"
                boxClassName="!pt-2"
                className='!z-50'
                size={25}

            >
                <div className='flex flex-col gap-2 mt-5'>

                    <div className='flex flex-col border-b border-gray-200 pb-5'>
                        <CustomButton title='Deposit' onClick={() => handleNavigationTab("/deposit")} className={"!w-full !shadow-none !block sm:!hidden"} />
                    </div>
                    <ul className="space-y-1">
                        {itemTabArr.map((item, index) => (
                            <li key={index} onClick={() => handleNavigation(item.nav)}
                                className={`flex items-center gap-2 font-medium  p-2 rounded-md text-primary cursor-pointer transition ${location === item.nav ? " w-full !text-secondary" : ""}`}>

                                <span className="text-sm ">{item.title}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </CustomDrawer>
        </div>
    )
}

export default RightSidebarDrawer
