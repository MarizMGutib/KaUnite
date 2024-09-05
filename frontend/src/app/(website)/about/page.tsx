import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-xl font-bold mb-6 flex justify-center items-center">About Our Barangay</h1>
      
      <div className="mb-8">
        <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Barangay Officials</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Hon. Ma. Elena A. Entoma", position: "Punong Barangay" },
            { name: "Hon. Venus A. Entoma", position: "Kagawad" },
            { name: "Hon. Jessica E. Osorno", position: "Kagawad" },
            { name: "Hon. Felisa C. Tangpos", position: "Kagawad" },
            { name: "Hon. Benigna Debalucos", position: "Kagawad" },
            { name: "Hon. Christopher Caritero", position: "Kagawad" },
            { name: "Hon. Cristy L. Abadanio", position: "Kagawad" },
            { name: "Hon. Eduardo Jr. M. Cabahug", position: "Kagawad" },
          ].map((official, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-200 w-full aspect-square mb-2"></div>
              <p className="text-sm font-semibold">{official.name}</p>
              <p className="text-xs text-gray-600">{official.position}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">SK Officials</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
                 { name: "Hon. Jayson L. Genilo", position: "SK Chairman" },
                 { name: "Hon. Bob Anthony L. Rubin", position: "SK Kagawad" },
                 { name: "Hon. Hannah Mae Limbaga", position: "SK Kagawad" },
                 { name: "Hon. Belen Entoma", position: "SK Kagawad" },
                 { name: "Hon. Bryle C. Canares", position: "SK Kagawad" },
                 { name: "Hon. Jinky T. Caritero", position: "SK Kagawad" },
                 { name: "Hon. Kent Dominic L. Abadanio", position: "SK Kagawad" },
                 { name: "Hon. Vince Luige Nacorda", position: "SK Kagawad" },
          ].map((official, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-200 w-full aspect-square mb-2"></div>
              <p className="text-sm font-semibold">{official.name}</p>
              <p className="text-xs text-gray-600">{official.position}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Emergency Hotlines</h2>
        <div className="bg-gray-100 p-4 rounded-lg">
          <ul className="grid grid-cols-2 gap-4">
            <li><strong>Barangay Hall:</strong> 123-4567</li>
            <li><strong>Police:</strong> 911</li>
            <li><strong>Fire Department:</strong> 160</li>
            <li><strong>Ambulance:</strong> 117</li>
            <li><strong>Disaster Response:</strong> 111-1234</li>
            <li><strong>Health Center:</strong> 123-7890</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About