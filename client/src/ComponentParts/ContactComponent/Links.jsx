import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";

const Links = () => {
  return (

<div className='flex items-center justify-center bg-black py-10'>

<div className='w-link h-link flex items-center justify-center m-4 '>
<div  className=' bg-gray-900 relative overflow-hidden h-link w-link hover:w-hlink hover:h-hlink transition-all duration-400 hover:bg-customcol group flex items-center justify-center cursor-pointer '>
  <a 
  href='https://www.facebook.com/vicky.ky.739978/'
  target='_blank'
  >
  <FaFacebookF 

className='top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 absolute text-white w-logo h-logo group-hover:animate-roll'
/>

  </a>

</div>
</div>

<div className='w-link h-link flex items-center justify-center m-4'>
<div  className=' bg-gray-900 relative overflow-hidden h-link w-link hover:w-hlink hover:h-hlink transition-size duration-400 hover:bg-customcol group flex items-center justify-center cursor-pointer '>
  <a href="https://www.instagram.com/rohitbal216/" target='_blank'>

  <BsInstagram
        className='top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 absolute text-white w-logo h-logo group-hover:animate-roll'
        />
  </a>
 
</div>
</div>



<div className='w-link h-link flex items-center justify-center m-4'>
<div  className=' bg-gray-900 relative overflow-hidden h-link w-link hover:w-hlink hover:h-hlink transition-size duration-400 hover:bg-customcol group flex items-center justify-center cursor-pointer '>
  <a href="https://www.linkedin.com/in/rohit-bal-8a352b236/"
  target='_blank'
  >
  <AiOutlineLinkedin
        className='top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 absolute text-white w-logo h-logo group-hover:animate-roll'
        />


  </a>
 
</div>
</div>


</div>
  )
}

export default Links
