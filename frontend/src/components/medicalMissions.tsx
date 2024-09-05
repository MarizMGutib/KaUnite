import React, { useState } from 'react'

const MedicalMissions = () => {
  const [missions, setMissions] = useState([
    { id: 1, serviceType: 'General Check-up', date: '2023-04-15', location: 'Community Center', providers: 'Dr. Johnson, Nurse Lee', services: 'Consultations, Blood Pressure Check', participation: 50, followUp: 'No', notes: 'Successful event' },
    // Add more mock data as needed
  ])

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Medical Missions and Health Services</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Service Type</th>
            <th className="border border-gray-300 p-2">Date</th>
            <th className="border border-gray-300 p-2">Location</th>
            <th className="border border-gray-300 p-2">Healthcare Providers</th>
            <th className="border border-gray-300 p-2">Services Provided</th>
            <th className="border border-gray-300 p-2">Participation</th>
            <th className="border border-gray-300 p-2">Follow-up Required</th>
            <th className="border border-gray-300 p-2">Notes</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.id}>
              <td className="border border-gray-300 p-2">{mission.id}</td>
              <td className="border border-gray-300 p-2">{mission.serviceType}</td>
              <td className="border border-gray-300 p-2">{mission.date}</td>
              <td className="border border-gray-300 p-2">{mission.location}</td>
              <td className="border border-gray-300 p-2">{mission.providers}</td>
              <td className="border border-gray-300 p-2">{mission.services}</td>
              <td className="border border-gray-300 p-2">{mission.participation}</td>
              <td className="border border-gray-300 p-2">{mission.followUp}</td>
              <td className="border border-gray-300 p-2">{mission.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MedicalMissions