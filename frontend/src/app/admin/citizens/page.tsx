"use client"
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Citizens = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();
  // Mock data for citizens
  const citizens = [
    { id: 1, fullName: "John Doe", age: 25, category: "Youth", address: "123 Main St", contactNo: "123-456-7890", email: "john@example.com", status: "Active" },
    { id: 2, fullName: "Jane Smith", age: 40, category: "Adult", address: "456 Elm St", contactNo: "987-654-3210", email: "jane@example.com", status: "Inactive" },
    // Add more mock data as needed
  ];

  function handleAddCitizens(event: React.MouseEvent<HTMLButtonElement>): void {
    router.push('/admin/citizens/addCitizens');
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Manage Citizens</h1>
      <div className='flex flex-col md:flex-row gap-2 mb-4 pt-[2rem]'>
        <button 
          className='bg-green-700 text-white px-4 py-2 rounded-md w-full md:w-[10rem]'
          onClick={handleAddCitizens}
        >
          Add Citizens
        </button>
        <input
          type="text"
          placeholder="Search citizens..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:flex-grow border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
        />
      </div>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-green-800 text-white">
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Full Name</th>
            <th className="border border-gray-300 p-2">Age</th>
            <th className="border border-gray-300 p-2">Category</th>
            <th className="border border-gray-300 p-2">Address</th>
            <th className="border border-gray-300 p-2">Contact No.</th>
            <th className="border border-gray-300 p-2">Email</th>
            <th className="border border-gray-300 p-2">Status</th>
            <th className="border border-gray-300 p-2">Options</th>
          </tr>
        </thead>
        <tbody>
          {citizens.map((citizen) => (
            <tr key={citizen.id}>
              <td className="border border-gray-300 p-2">{citizen.id}</td>
              <td className="border border-gray-300 p-2">{citizen.fullName}</td>
              <td className="border border-gray-300 p-2">{citizen.age}</td>
              <td className="border border-gray-300 p-2">{citizen.category}</td>
              <td className="border border-gray-300 p-2">{citizen.address}</td>
              <td className="border border-gray-300 p-2">{citizen.contactNo}</td>
              <td className="border border-gray-300 p-2">{citizen.email}</td>
              <td className="border border-gray-300 p-2">{citizen.status}</td>
              <td className="border border-gray-300 p-2">
                <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Citizens;