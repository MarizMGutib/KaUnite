import React from 'react'

const Footer = () => {
  return (
<>
<div className=' border-2  h-[320px] bg-[#00BFA5]'>
<div className='flex gap-[10rem] text-lg font-poppins pt-[4rem] text-white '>
     <div className='pl-[20rem] '>
     <h1 className='text-[#FFFFFF] text-semibold '>Programs</h1>
     <p className='pt-4 text-[#333333]'>Events</p>
     <p className='pt-2 text-[#333333]'>Job Posting</p>
     <p className='pt-2 text-[#333333]'>Opportunity Listing</p>
     </div>
     <div>
     <h1 className='text-[#FFFFFF] text-semibold'>Services</h1>
     <p className='pt-4 text-[#333333]'>Volunteer</p>
     <p className='pt-2 text-[#333333]'>Scholarship</p>
     <p className='pt-2 text-[#333333]'>Contact</p>
     </div>
     <div>
     <h1 className='text-[#FFFFFF] text-semibold'>Contacts</h1>
     <p className='pt-4 text-[#333333]'>Home</p>
     <p className='pt-2 text-[#333333]'> About Us</p>
     <p className='pt-2 text-[#333333]'>Contact</p>
     </div>
     <div>
     <input className='h-[4rem] w-[24rem] text-black rounded-s-lg pl-4' placeholder='Email Address'>
     </input>
     <button className='bg-[#4DCCFF] h-[4rem] pt-[.1rem] w-[10rem] rounded-e-lg '>Join us</button>
     <div className='flex pt-4 gap-20 font-poppins'>
        <div>
        <p className='text-[#ffffff]'>CALL US</p>
        <p className='text-[#333333]'>09*********</p>
        </div>
        <div>
            <p className='text-[#ffffff]'>EMAIL US</p>
            <p className='text-[#333333]'>mycommunityhq@gmail.com</p>
        </div>
     </div>
     </div>
</div>
<div className='border-b border-[#1CC19B]  pl-[2orem] pt-[3rem]'>
</div>

<p className='pt-4 pl-[20rem] text-white'>© Copyright 2024, All Right Reserved</p>
</div>
</>
  )
}

export default Footer
