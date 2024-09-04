import React, { useState } from 'react'

const DiseaseOutbreakMonitoring = () => {
  const [outbreaks, setOutbreaks] = useState([
    { id: 1, diseaseName: 'Dengue', diagnosisDate: '2023-03-01', symptoms: 'Fever, headache', severity: 'Moderate', treatment: 'Supportive care', status: 'Active', reportingSource: 'Local Hospital' },
    // Add more mock data as needed
  ])

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Disease Outbreak Monitoring</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Disease Name</th>
            <th className="border border-gray-300 p-2">Diagnosis Date</th>
            <th className="border border-gray-300 p-2">Symptoms</th>
            <th className="border border-gray-300 p-2">Severity</th>
            <th className="border border-gray-300 p-2">Treatment</th>
            <th className="border border-gray-300 p-2">Status</th>
            <th className="border border-gray-300 p-2">Reporting Source</th>
          </tr>
        </thead>
        <tbody>
          {outbreaks.map((outbreak) => (
            <tr key={outbreak.id}>
              <td className="border border-gray-300 p-2">{outbreak.id}</td>
              <td className="border border-gray-300 p-2">{outbreak.diseaseName}</td>
              <td className="border border-gray-300 p-2">{outbreak.diagnosisDate}</td>
              <td className="border border-gray-300 p-2">{outbreak.symptoms}</td>
              <td className="border border-gray-300 p-2">{outbreak.severity}</td>
              <td className="border border-gray-300 p-2">{outbreak.treatment}</td>
              <td className="border border-gray-300 p-2">{outbreak.status}</td>
              <td className="border border-gray-300 p-2">{outbreak.reportingSource}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DiseaseOutbreakMonitoring