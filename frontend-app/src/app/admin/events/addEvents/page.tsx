"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

const AddEvents = () => {
  const router = useRouter();
  const [eventData, setEventData] = useState({
    name: '',
    date: '',
    location: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEventData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Add logic to submit the form data to your backend
    console.log('Event data submitted:', eventData);
    // Redirect back to the events list page
    router.push('/admin/events');
  };

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4 flex items-center justify-center'>Add New Event</h1>
      <form onSubmit={handleSubmit} className='max-w-md mx-auto'>
        <div className='mb-4'>
          <label htmlFor='name' className='block mb-2'>Event Name</label>
          <input
            type='text'
            id='name'
            name='name'
            value={eventData.name}
            onChange={handleInputChange}
            className='w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-500'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='date' className='block mb-2'>Date</label>
          <input
            type='date'
            id='date'
            name='date'
            value={eventData.date}
            onChange={handleInputChange}
            className='w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-500'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='location' className='block mb-2'>Location</label>
          <input
            type='text'
            id='location'
            name='location'
            value={eventData.location}
            onChange={handleInputChange}
            className='w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-500'
            required
          />
        </div>
        <div className='flex justify-between'>
          <button
            type='button'
            onClick={() => router.push('/admin/events')}
            className='bg-gray-500 text-white px-4 py-2 rounded-md'
          >
            Cancel
          </button>
          <button
            type='submit'
            className='bg-green-700 text-white px-4 py-2 rounded-md'
          >
            Add Event
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddEvents