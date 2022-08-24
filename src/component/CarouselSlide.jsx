import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import Fade1 from '../assets/fade1-min.png'
import Fade2 from '../assets/fade2-min.png'
import Fade3 from '../assets/fade3-min.png'
import Locs from '../assets/locs-min.png'

function CarouselSlide() {
  return (
    <div className='bg-black min-w-[580px] py-8 grid place-content-center md:grid-cols-2 md:place-content-around'>
        <div className='place-self-center'>
            <Carousel className='w-80 bg-black ' autoPlay={true} infiniteLoop={true} interval={2000}>
                <div className='h-[330px]'>
                    <img src={Fade1} alt='fade1'/>
                </div>

                <div className='h-[330px]'>
                    <img src={Fade2} alt='fade2'/>
                </div>

                <div className='h-[330px]'>
                    <img src={Fade3} alt='fade3'/>
                </div>

                <div className='h-[330px]'>
                    <img src={Locs} alt='locs'/>
                </div>
            </Carousel>
        </div>

        <div className='grid text-center text-lg font-semibold text-[#c0c0c0] md:grid-cols-2 md:text-left'>
            <div className='w-280px h-330px border-l-2 border-b-2 border-gradient'>
  
            </div>
        </div>
        
    </div>
  )
}

export default CarouselSlide