'use client'
import React, { useState } from 'react'
import ResidentInfo from '@/components/ResidentsInfo'
import VaccinationRecords from '@/components/VaccinationRecords'
import DiseaseOutbreakMonitoring from '@/components/DiseaseOutbreakMonitoring'
import MedicalMissions from '@/components/MedicalMissions'
import HealthAlerts from '@/components/HealthAlerts'
import GeneralHealthRecords from '@/components/GeneralHealthRecords'
import { useRouter } from 'next/navigation'


const Health = () => {
  const [activeTab, setActiveTab] = useState('residents')
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleAddHealth = () => {
    router.push('/admin/events/addHealth');
  };

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'residents':
        return <ResidentInfo />
      case 'vaccinations':
        return <VaccinationRecords />
      case 'outbreaks':
        return <DiseaseOutbreakMonitoring />
      case 'missions':
        return <MedicalMissions />
      case 'alerts':
        return <HealthAlerts />
      case 'generalHealth':
        return <GeneralHealthRecords />
      default:
        return <ResidentInfo />
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Barangay Health Center Management System</h1>
      <div className='flex flex-col md:flex-row gap-2 mb-4 pt-[2rem]'>
        <button 
          className='bg-green-700 text-white px-4 py-2 rounded-md w-full md:w-[10rem]'
          onClick={handleAddHealth}
        >
          Add Health
        </button>
        <input
          type="text"
          placeholder="Search......."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:flex-grow border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
        />
      </div>
      <div className="mb-4">
        <button
          className={`mr-2 px-4 py-2 ${activeTab === 'residents' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('residents')}
        >
          Residents
        </button>
        <button
          className={`mr-2 px-4 py-2 ${activeTab === 'vaccinations' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('vaccinations')}
        >
          Vaccinations
        </button>
        <button
          className={`mr-2 px-4 py-2 ${activeTab === 'outbreaks' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('outbreaks')}
        >
          Outbreaks
        </button>
        <button
          className={`mr-2 px-4 py-2 ${activeTab === 'missions' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('missions')}
        >
          Medical Missions
        </button>
        <button
          className={`mr-2 px-4 py-2 ${activeTab === 'alerts' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('alerts')}
        >
          Health Alerts
        </button>
        <button
          className={`mr-2 px-4 py-2 ${activeTab === 'generalHealth' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('generalHealth')}
        >
          General Health
        </button>
       
      </div>
      {renderActiveComponent()}
    </div>
  )
}

export default Health