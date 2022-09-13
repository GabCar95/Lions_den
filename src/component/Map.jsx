import React from 'react'
import { HiLocationMarker, HiPhone } from 'react-icons/hi'

function Map() {
  return (
    <div className='bg-[#f2f3f4] min-w-[500px] w-screen h-full grid grid-col-1 place-content-center py-8'>
      <h4 className='text-black py-4 text-center text-2xl font-semibold sm:text-3xl'>
        "Bringing Southern Hospitality To Southern California"
      </h4>

      <iframe class="map" width="475" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=573%20W%20Vista%20Way,%20Vista,%20CA%2092083&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>

      <div className='text-[#D0BC8B] bg-black w-screen text-center text-md flex flex-col-2 justify-center pt-3 mt-4 mr-8 md:text-lg'>
          <div className='flex px-4'>
            <HiLocationMarker className='mt-1'/>
            <h3>573 W Vista Way, Vista, CA 92083</h3>
          </div>
          
          <div className='flex px-4'>
            <HiPhone className='mt-1'/>
            <h3>(760) 201-8946</h3>
          </div>
        </div>
    </div>
  )
}

export default Map