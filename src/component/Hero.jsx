import React from 'react'
import Typewriter from 'typewriter-effect'

function Hero() {
  return (
    <div className='bg-black min-w-[580px] text-white w-screen h-full flex flex-col justify-center text-center font-semibold'>
        <div className='flex justify-center text-3xl '>
            {/* <h2 className='px-2'>We do it all!</h2> */}
            <Typewriter 
              className='text-[#D0BC8B]'
              options={{
                strings: ['Military Cuts.','Locs, Beards, Eyebrows.','Youth and Senior cuts.','We do it all!'],
                loop: true,
                autoStart: true,
              }}
                /> 
                    
        </div>
        <p className='flex flex-col justify-center text-center'>The one stop shop that'll keep you looking FRESH.</p>
    </div>
  )
}

export default Hero