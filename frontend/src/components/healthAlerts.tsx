import React, { useState } from 'react'

const HealthAlerts = () => {
  const [alerts, setAlerts] = useState([
    { id: 1, alertType: 'Vaccination Reminder', dateIssued: '2023-05-01', targetAudience: 'Children under 5', messageContent: 'Polio vaccination drive next week', responseRequired: 'Yes', followUpDate: '2023-05-08' },
    // Add more mock data as needed
  ])

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Health Alerts and Notifications</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Alert Type</th>
            <th className="border border-gray-300 p-2">Date Issued</th>
            <th className="border border-gray-300 p-2">Target Audience</th>
            <th className="border border-gray-300 p-2">Message Content</th>
            <th className="border border-gray-300 p-2">Response Required</th>
            <th className="border border-gray-300 p-2">Follow-up Date</th>
          </tr>
        </thead>
        <tbody>
          {alerts.map((alert) => (
            <tr key={alert.id}>
              <td className="border border-gray-300 p-2">{alert.id}</td>
              <td className="border border-gray-300 p-2">{alert.alertType}</td>
              <td className="border border-gray-300 p-2">{alert.dateIssued}</td>
              <td className="border border-gray-300 p-2">{alert.targetAudience}</td>
              <td className="border border-gray-300 p-2">{alert.messageContent}</td>
              <td className="border border-gray-300 p-2">{alert.responseRequired}</td>
              <td className="border border-gray-300 p-2">{alert.followUpDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default HealthAlerts