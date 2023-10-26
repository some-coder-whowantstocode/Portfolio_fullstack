import { AnimatePresence,motion } from 'framer-motion'
import React, { useState } from 'react'
import { projectanimation } from '../../utils/Animations'
import Projectinfo from './Projectinfo'
import { Responsive } from '../../Store'


const Project = ({image,name,isvisible,description,link}) => {

console.log(link)

  return (
    <>
    {
      innerWidth>Responsive.width 
      ?
      <AnimatePresence>

      {
    isvisible && (
  
        <motion.div
        className=' h-full flex flex-wrap group'
        {...projectanimation('300px','300px')}
        transition={{  duration: 1}}
        style={{
          flexShrink:0
        }}
       
        >
         <div 
         className=' -z-0 transition-all duration-200 opacity-0 text-xl font-semibold absolute left-1/2 top-4 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center group-hover:top-20 group-hover:opacity-100 px-3 py-2 '
         
         >
             <div>{name}</div>
         </div>
         <img
         className='-z-0 transition-all duration-500  w-pimg group-hover:opacity-0'
         src={image} 
         alt="" 
         />
         <Projectinfo props={{image:image,name:name,des:description,link:link}}/>
      
     </motion.div>
  
        )
        
      }
  
    </AnimatePresence>


:


 <AnimatePresence>

    {
  isvisible && (

      <motion.div
      className=' h-pimg flex flex-wrap group'
      {...projectanimation('200px','100vw')}
      transition={{  duration: 1}}
      style={{
        flexShrink:0
      }}
     
      >
       <div 
       className=' -z-0 transition-all duration-200 opacity-0 text-xl font-semibold absolute left-1/2 top-4 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center group-hover:top-10 group-hover:opacity-100 px-3 py-2 '
       
       >
           <div>{name}</div>
       </div>
       <img
       className='-z-0 h-pimg transition-all duration-500  w-screen group-hover:opacity-0'
       src={image} 
       alt="" 
       />
       <Projectinfo props={{image:image,name:name,des:description}}/>
    
   </motion.div>

      )
      
    }

  </AnimatePresence>
    }
   

  </>
  )

}

export default Project
