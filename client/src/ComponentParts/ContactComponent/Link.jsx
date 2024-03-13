import React from 'react'

const Link = ({LINK,ICON}) => {
  return (
    <div className='w-link h-link flex items-center justify-center m-4 '>
    <div  className=' bg-gray-900 relative overflow-hidden h-link w-link  transition-all duration-400 hover:bg-customcol group flex items-center justify-center cursor-pointer '>
      <a 
      href={LINK}
      target='_blank'
      >
      <ICON 
    
    className='top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 absolute text-white w-logo h-logo group-hover:animate-roll'
    />
    
      </a>
    
    </div>
    </div>
  )
}

export default Link
