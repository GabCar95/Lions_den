import React from 'react'
import LionsDen from '../assets/Logo-min.png'



function Logo() {
  return (
    <div className=' min-w-[500px] flex place-content-center bg-[#f2f3f4]'>
        

        <div className='circle'>
          <div className='flex justify-center '>
              <img src={LionsDen} alt="LionsDen Logo" className='logo'/>
          </div>
          
        </div>
        
    </div>
    
  )
}

export default Logo