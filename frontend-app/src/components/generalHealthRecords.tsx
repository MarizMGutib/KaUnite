import React, { useState } from 'react'

const GeneralHealthRecords = () => {
  const [records, setRecords] = useState([
    { id: 1, residentId: 1, healthIssue: 'Diabetes', diagnosisDate: '2022-11-15', treatment: 'Metformin 500mg', provider: 'Dr. Brown', nextAppointment: '2023-05-15', notes: 'Blood sugar levels stable' },
    // Add more mock data as needed
  ])

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">General Health Records</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Record ID</th>
            <th className="border border-gray-300 p-2">Resident ID</th>
            <th className="border border-gray-300 p-2">Health Issue</th>
            <th className="border border-gray-300 p-2">Diagnosis Date</th>
            <th className="border border-gray-300 p-2">Current Treatment</th>
            <th className="border border-gray-300 p-2">Healthcare Provider</th>
            <th className="border border-gray-300 p-2">Next Appointment</th>
            <th className="border border-gray-300 p-2">Notes</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id}>
              <td className="border border-gray-300 p-2">{record.id}</td>
              <td className="border border-gray-300 p-2">{record.residentId}</td>
              <td className="border border-gray-300 p-2">{record.healthIssue}</td>
              <td className="border border-gray-300 p-2">{record.diagnosisDate}</td>
              <td className="border border-gray-300 p-2">{record.treatment}</td>
              <td className="border border-gray-300 p-2">{record.provider}</td>
              <td className="border border-gray-300 p-2">{record.nextAppointment}</td>
              <td className="border border-gray-300 p-2">{record.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default GeneralHealthRecords