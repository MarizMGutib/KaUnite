"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const AdminHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleLogout = () => {
    // Perform any logout logic here (e.g., clearing local storage, cookies, etc.)
    // Then redirect to the root page
    router.push('/');
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
              <li><button onClick={handleLogout} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Logout</button></li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;