import React, { useEffect } from 'react'
import { useRef } from 'react'
import Skills from '../ComponentParts/AboutComponent/Skills'
import { AnimatePresence,delay,motion,useScroll } from 'framer-motion'
import { Animationleft } from '../utils/Animations'
import { ABOUT,Responsive } from '../Store'

const About = () => {

  const aboutref = useRef(null)

  const width = innerWidth;

 


  useEffect(()=>{

    const handlescroll =()=>{

      // console.log(aboutref.current.getBoundingClientRect().top)

      ABOUT.start = aboutref.current.getBoundingClientRect().top;
      ABOUT.end = aboutref.current.getBoundingClientRect().bottom;
    }

    window.addEventListener('scroll',handlescroll)

    return ()=>{
      window.removeEventListener('scroll',handlescroll)
    }

  },[])


  return (
    <>
    {
      width > Responsive.width 
      ?
<AnimatePresence>
    <div name="target"
    ref={aboutref}
    >
      <div
     
      className='text-5xl h-ull font-semibold font-sans w-screen pt-16 mb-8 h-32 flex flex-col items-center justify-center'
      >
        <motion.p
    {...Animationleft(-100,0,0.5)}
        >
          ABOUT
        </motion.p>
        <motion.div
    {...Animationleft(-200,0,0.7)}
    // transition={{delay:1}}

         className=' w-28 bg-customcol mt-3 h-1'
         ></motion.div>
        </div>
        <div
        className='flex items-center justify-center'>

        <Skills/>
        </div>
    </div>
    </AnimatePresence>

    :

    <div name="target"
    ref={aboutref}
    >
      <div
     
      className='text-3xl font-semibold font-sans w-screen pt-7 mb-8 flex flex-col items-center justify-center'
      >
        <p>
          ABOUT
        </p>
        <div
         className=' w-28 bg-customcol mt-2 h-1'
         ></div>
        </div>
        <div
        className='flex items-center justify-center'>

        <Skills/>
        </div>
    </div>
    }

    
    </>
  )
}

export default About
