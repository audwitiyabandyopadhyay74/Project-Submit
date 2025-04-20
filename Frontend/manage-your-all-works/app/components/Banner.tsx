import React from 'react'
import LiquidChrome from './LiquidChrome'
const Banner = () => {
  return (
    <div className="w-screen h-[100vh] flex flex-col items-center justify-center z-100 gap-4" id="HOME"><LiquidChrome/>
<span className='text-5xl z-100 font-bold'>Manage All Your Works</span>
<span className='text-1xl z-100 font-semibold capitalize'>get all thing you need together</span>
    </div>
  )
}

export default Banner