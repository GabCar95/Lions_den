import React from 'react'

function Map() {
  return (
    <div className='bg-black min-w-[580px] w-screen h-full grid grid-col-1 place-content-center'>
        <iframe class="map" width="550" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=573%20W%20Vista%20Way,%20Vista,%20CA%2092083&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
    </div>
  )
}

export default Map