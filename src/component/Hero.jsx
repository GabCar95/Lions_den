import React from 'react'
import Typewriter from 'typewriter-effect'

function Hero() {
  return (
    <div className='bg-[#f2f3f4] min-w-[500px] text-black w-screen h-full flex flex-col justify-center text-center font-semibold pt-8'>
        <div className='TypeWriter'>
            
            <Typewriter 
              
              options={{
                strings: ['Military Cuts.','Locs, Beards, Eyebrows.','Youth and Senior cuts.','We do it all!'],
                loop: true,
                autoStart: true,
              }}
                /> 
                    
        </div>
        <p className='flex flex-col justify-center text-center text-lg'>The one stop shop that'll keep you looking FRESH.</p>
        <p className='flex flex-col justify-center text-center text-lg'>Bookings preffered, walk-ins welcomed!</p>
    </div>
  )
}

export default Hero