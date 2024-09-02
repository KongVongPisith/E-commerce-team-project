import React from 'react';
import { AiOutlineFolderAdd, AiOutlineGift, AiOutlineSetting } from 'react-icons/ai';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { CiMoneyBill } from 'react-icons/ci';
import { FiPackage, FiShoppingBag } from 'react-icons/fi';
import { HiOutlineReceiptRefund } from 'react-icons/hi';
import { MdOutlineLocalOffer } from 'react-icons/md';
import { RxDashboard } from 'react-icons/rx';
import { VscNewFile } from 'react-icons/vsc';
import { Link, useLocation } from 'react-router-dom';

const DashboardSideBar = () => {
    const location = useLocation();
    const navItems = [
        { name: 'Dashboard', icon: <RxDashboard size={30} />, href: '/dashboard' },
        { name: 'All Orders', icon: <FiShoppingBag size={30} />, href: '/dashboard-orders' },
        { name: 'All Products', icon: <FiPackage size={30} />, href: '/dashboard-products' },
        { name: 'Create Product', icon: <AiOutlineFolderAdd size={30} />, href: '/dashboard-create-product' },
        { name: 'All Events', icon: <MdOutlineLocalOffer size={30} />, href: '/dashboard-events' },
        { name: 'Create Event', icon: <VscNewFile size={30} />, href: '/dashboard-create-event' },
        { name: 'Withdraw Money', icon: <CiMoneyBill size={30} />, href: '/dashboard-withdraw-money' },
        { name: 'Shop Inbox', icon: <BiMessageSquareDetail size={30} />, href: '/dashboard-messages' },
        { name: 'Discount Codes', icon: <AiOutlineGift size={30} />, href: '/dashboard-coupouns' },
        { name: 'Refunds', icon: <HiOutlineReceiptRefund size={30} />, href: '/dashboard-refunds' },
        { name: 'Settings', icon: <AiOutlineSetting size={30} />, href: '/settings' },
        // ... add more items here
    ];

    return (
        <div className="w-full h-screen bg-orange-500 shadow overflow-y-auto sticky top-0 left-0 z-10">
            {navItems.map((item, index) => (
                <SidebarLink
                    key={index}
                    to={item.href}
                    icon={item.icon}
                    text={item.name}
                    active={location.pathname === item.href}
                />
            ))}
        </div>
    );
};

const SidebarLink = ({ to, icon, text, active }) => {
    return (
        <Link to={to} className={`block`}>
            <div
                className={`flex items-center p-4 relative text-white hover:text-orange-500 transition-all duration-300 ${
                    active ? 'bg-white rounded-r-full shadow-lg' : 'hover:bg-white/20'
                }`}
            >
                <div className={`text-3xl mr-2 ${active ? 'text-orange-500' : 'text-white'}`}>
                    {icon}
                </div>
                <h5 className={`text-xl font-medium hidden md:block ${active ? 'text-orange-500' : 'text-white'}`}>
                    {text}
                </h5>
                {active && <div className="absolute inset-y-0 left-0 w-1 bg-white rounded-r-full"></div>}
            </div>
        </Link>
    );
};

export default DashboardSideBar;
