import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { backend_url } from "../../../server";

const DashboardHeader = () => {
  const { seller } = useSelector((state) => state.seller);
  const [showDropdown, setShowDropdown] = useState(false); // State to handle dropdown visibility

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="w-full h-[80px] bg-white shadow sticky top-0 left-0 z-30 flex items-center justify-between px-4">
      <div>
        <Link to="/dashboard">
          <img
            src="../../../ishopper.png"
            alt=""
            className="w-34 h-14"
          />
        </Link>
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-4 relative"> {/* relative class for positioning dropdown */}
          <Link to={`/shop/${seller._id}`} className="flex items-center" onClick={toggleDropdown}>
            <img
              src={`${backend_url}${seller.avatar}`}
              alt={`${seller.name}'s Avatar`}
              className="w-[50px] h-[50px] rounded-full object-cover mr-2"
            />
            <div>
              <span className="hidden 800px:block text-[18px] font-[400] text-[#555]">{seller.name}</span>
              <span className="hidden 800px:block text-[14px] font-[400] text-[#555] ml-2">({seller.role})</span>
            </div>
          </Link>
          {/* Dropdown Menu (initially hidden) */}
          {showDropdown && (
            <div className="absolute top-full right-0 bg-white border mt-1 py-2 w-48">
              <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">View Profile</Link>
              {/* Add more dropdown items here */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
