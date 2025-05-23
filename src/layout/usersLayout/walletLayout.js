import React from 'react'
import Header from './header'
import Footer from './footer'
import { WalletSidebar } from './sidebarMenu';
import BottomTab from './bottomTab';
const WalletLayout = ({ isHeader, component }) => {
    return (
        <div className={isHeader ? "" : 'bg-gray-100'}>
            <div className="font-bold text-green-300 ">
                <Header isHeader={isHeader} />
            </div>
            <div className="flex flex-col md:flex-row gap-2">
                <div className='w-full md:w-56'>
                    <WalletSidebar />
                </div>
                <div className='w-full mt-3 mr-6'>{component}</div>
            </div>

            <div className='sm:pb-0 pb-20 bg-white'>
                <Footer />
                <BottomTab />
            </div>
        </div>
    );
};

export default WalletLayout
