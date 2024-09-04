import React, { useState } from 'react'

const ResidentInfo = () => {
  const [residents, setResidents] = useState([
    { id: 1, name: 'John Doe', dob: '1990-01-01', gender: 'Male', address: '123 Main St', contact: '123-456-7890' },
    // Add more mock data as needed
  ])

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Resident Information</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Resident ID</th>
            <th className="border border-gray-300 p-2">Full Name</th>
            <th className="border border-gray-300 p-2">Date of Birth</th>
            <th className="border border-gray-300 p-2">Gender</th>
            <th className="border border-gray-300 p-2">Address</th>
            <th className="border border-gray-300 p-2">Contact Information</th>
          </tr>
        </thead>
        <tbody>
          {residents.map((resident) => (
            <tr key={resident.id}>
              <td className="border border-gray-300 p-2">{resident.id}</td>
              <td className="border border-gray-300 p-2">{resident.name}</td>
              <td className="border border-gray-300 p-2">{resident.dob}</td>
              <td className="border border-gray-300 p-2">{resident.gender}</td>
              <td className="border border-gray-300 p-2">{resident.address}</td>
              <td className="border border-gray-300 p-2">{resident.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ResidentInfo