import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import Fade1 from '../assets/fade1-min.png'
import Fade2 from '../assets/fade2-min.png'
import Fade3 from '../assets/fade3-min.png'
import Locs from '../assets/locs-min.png'

function CarouselSlide() {
  return (
    <div className='bg-[#f2f3f4] min-w-[500px] border-y-[10px] border-[#D0BC8B] py-8 grid place-content-center sm:grid-cols-3'>
        <div className='box'>
            
            <ul className='text-center font-semibold'>
                <p className='font-semibold underline text-center pb-4'>Hours</p>
                <p> S 9AM-5PM </p>
                <p> M 10AM-7PM </p>
                <p> T 10AM-7PM </p>
                <p> W 10AM-7PM </p>
                <p> T 10AM-7PM </p>
                <p> F 10AM-7PM </p>
                <p> S 10AM-7PM </p>
            </ul>
        </div>

        <div className='place-self-center py-6 md:py-0'>
            <Carousel className='w-80 bg-[#f2f3f4]' autoPlay={true} infiniteLoop={true} interval={4000}>
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

        <div className='box'>
            
            <ul className='text-center font-semibold'>
                <p className='font-semibold underline text-center pb-4'>The Talent</p>
                <a href='https://www.instagram.com/lacourslionsden/'>@lacourslionsden</a>
                <a href='https://www.instagram.com/iam_mrlacour/'> @iam_mrlacour </a>
                <a href='https://www.instagram.com/melle_the_barber/'> @melle_the_barber </a>
                <a href='https://www.instagram.com/elvisclipperhands/'> @elvisclipperhands </a>
                <p className='font-semibold underline text-center pt-4'> Follow us on Insta </p>
            </ul>
        </div>
        
    </div>
  )
}

export default CarouselSlide