import React, { useState } from 'react'

const VaccinationRecords = () => {
  const [records, setRecords] = useState([
    { id: 1, residentId: 1, vaccineType: 'COVID-19', date: '2023-01-15', doseNumber: '1st', site: 'Local Clinic', batchNumber: 'BN001', provider: 'Dr. Smith (ID: 123)' },
    // Add more mock data as needed
  ])

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Vaccination Records</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Record ID</th>
            <th className="border border-gray-300 p-2">Resident ID</th>
            <th className="border border-gray-300 p-2">Vaccine Type</th>
            <th className="border border-gray-300 p-2">Date</th>
            <th className="border border-gray-300 p-2">Dose Number</th>
            <th className="border border-gray-300 p-2">Vaccination Site</th>
            <th className="border border-gray-300 p-2">Batch Number</th>
            <th className="border border-gray-300 p-2">Healthcare Provider</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id}>
              <td className="border border-gray-300 p-2">{record.id}</td>
              <td className="border border-gray-300 p-2">{record.residentId}</td>
              <td className="border border-gray-300 p-2">{record.vaccineType}</td>
              <td className="border border-gray-300 p-2">{record.date}</td>
              <td className="border border-gray-300 p-2">{record.doseNumber}</td>
              <td className="border border-gray-300 p-2">{record.site}</td>
              <td className="border border-gray-300 p-2">{record.batchNumber}</td>
              <td className="border border-gray-300 p-2">{record.provider}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default VaccinationRecords