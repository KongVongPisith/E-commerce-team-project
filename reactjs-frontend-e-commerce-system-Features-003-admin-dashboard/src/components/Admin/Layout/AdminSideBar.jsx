import React from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { CiMoneyBill } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import { GrWorkshop } from "react-icons/gr";
import { HiOutlineUserGroup } from "react-icons/hi";
import { MdOutlineLocalOffer } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";

const AdminSideBar = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', icon: <RxDashboard size={30} />, href: '/admin/dashboard' },
    { name: 'All Orders', icon: <FiShoppingBag size={30} />, href: '/admin-orders' },
    { name: 'All Sellers', icon: <GrWorkshop size={30} />, href: '/admin-sellers' },
    { name: 'All Users', icon: <HiOutlineUserGroup size={30} />, href: '/admin-users' },
    { name: 'All Products', icon: <BsHandbag size={30} />, href: '/admin-products' },
    { name: 'All Events', icon: <MdOutlineLocalOffer size={30} />, href: '/admin-events' },
    { name: 'Withdraw Request', icon: <CiMoneyBill size={30} />, href: '/admin-withdraw-request' },
    { name: 'Settings', icon: <AiOutlineSetting size={30} />, href: '/profile' },
  ];

  return (
    <div className="w-full h-screen bg-sky-600 shadow-md overflow-y-auto sticky top-0 left-0 z-10">
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
    <Link
      to={to}
      className={`flex items-center p-4 relative transition duration-300 ${
        active ? "bg-white text-sky-600" : "text-white hover:text-sky-600"
      } rounded-r-full`}
    >
      <div className={`text-xl mr-3`}>{icon}</div>
      <span className={`flex-1 ${active ? 'font-bold' : 'font-medium'}`}>{text}</span>
      {active && (
        <span className="absolute inset-y-0 right-0 w-4 h-full rounded-r-full"></span>
      )}
    </Link>
  );
};

export default AdminSideBar;
