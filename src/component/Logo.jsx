import React from 'react'
import LionsDen from '../assets/Logo-min.png'
import { HiLocationMarker, HiPhone } from 'react-icons/hi'


function Logo() {
  return (
    <div className='bg-black min-w-[580px]'>
        <div className='text-[#D0BC8B] text-center flex flex-col-2 justify-center'>
          <div className='flex px-4'>
            <HiLocationMarker className='mt-1'/>
            <h3>573 W Vista Way, Vista, CA 92083</h3>
          </div>
          
          <div className='flex px-4'>
            <HiPhone className='mt-1'/>
            <h3>(760) 201-8946</h3>
          </div>
        </div>

        <div className='flex justify-center'>
            <img src={LionsDen} alt="LionsDen Logo" />
            
        </div>
        <h4 className='text-[#D0BC8B] text-center sm:text-2xl'>
            "Bringing Southern Hospitality To Southern California"
        </h4>
    </div>
    
  )
}

export default Logo