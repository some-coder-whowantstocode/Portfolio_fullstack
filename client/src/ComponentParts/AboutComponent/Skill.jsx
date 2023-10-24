import React, { useEffect, useRef } from 'react'
import { AnimatePresence,motion } from 'framer-motion';
import { Responsive } from '../../Store';

const Skill = ({name,mastery }) => {
    const h = 2;
    const percentref = useRef(null)
    const totalref = useRef(null);

    const width = innerWidth

    useEffect(()=>{
      if(percentref.current && totalref.current){
       percentref.current.style.width = ((totalref.current.offsetWidth /100)*mastery)+"px"
      }

    },[percentref,totalref,mastery])

  return (
    <>
    {
      innerWidth >Responsive.width
      ?
      <AnimatePresence>
      <motion.div className='flex'>
      <motion.div
      style={{
          height:`${h}rem`,
      }}
       className='flex w-32 text-sm bg-customcol text-white items-center justify-center ml-3 mb-4 transition-all duration-300 hover:shadow-skill'
      >
          {name}
      </motion.div>

      <motion.div
      ref={totalref}
        style={{
          height:`${h}rem`,
      }}
      className=' relative w-full bg-gray-300'
      >
        <motion.div 
        style={{
          height:h+"rem"
        }}
        initial={{width:'0px'}}
        whileInView={{width:`${(((600-128) /100)*mastery)}px`}}
        transition={{duration:1}}
        
        ref={percentref}
        className=' bg-customcol_2 '
        >

        </motion.div>
        <div
        
        className=' text-sm text-gray-600 absolute right-10 top-1/2 -translate-y-1/2'
        >
          {mastery}%
        </div>
      </motion.div>
      
      </motion.div>
     
  </AnimatePresence>
  :
  <div className='flex'>
      <div
      style={{
          height:`${h*0.7}rem`,
      }}
       className='flex w-32 text-xs bg-customcol text-white items-center justify-center ml-3 mb-4 transition-all duration-300 hover:shadow-skill'
      >
          {name}
      </div>

      <div
      ref={totalref}
        style={{
          height:`${h*0.7}rem`,
      }}
      className=' relative w-full bg-gray-300'
      >
        <div 
        style={{
          height:h*0.7+"rem"
        }}
        ref={percentref}
        className=' bg-customcol_2 '
        >

        </div>
        <div
        
        className=' text-xs text-gray-600 absolute right-10 top-1/2 -translate-y-1/2'
        >
          {mastery}%
        </div>
      </div>
      
      </div>
    }
    </>
   
  )
}

export default Skill
