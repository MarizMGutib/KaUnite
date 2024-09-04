"use client";
import React, { useState } from 'react';

const AdminHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-gray-200 p-4">
      <div className=" ">
        <div className="relative left-[97rem]">
          <button
            onClick={toggleDropdown}
            className="px-4 py-2 rounded  gap-2 "
          >
            Profile
          </button>
          {isDropdownOpen && (
            <ul className="absolute mt-2 w-38 left-[-6.5rem] bg-white text-gray-800 rounded shadow-lg">
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Edit</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Change Password</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Logout</a></li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;