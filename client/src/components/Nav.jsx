import React, { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { Link ,animateScroll as scroll } from 'react-scroll'
import { ABOUT, CONTACT, HOME, PROJECT,Responsive } from '../Store'
import { useSnapshot } from 'valtio'
import { CiMenuBurger } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { AnimatePresence,motion } from 'framer-motion'
import { navanimation } from '../utils/Animations'




const Nav = () => {

  const topref = useRef(null)
  const navref = useRef(null)


  const width= innerWidth
  // const Responsivelimit = 750
  const [navon,setnavon] = useState(false)

 

  const parts = []
  const partsref = []


  let home = useSnapshot(HOME),
  about = useSnapshot(ABOUT),
  projects = useSnapshot(PROJECT),
  contct = useSnapshot(CONTACT);
  
  const homeref = useRef(null),
  aboutref = useRef(null),
  projectsref = useRef(null),
  contactref = useRef(null);

  parts.push(home,about,projects,contct)
  partsref.push(homeref,aboutref,projectsref,contactref)


  useEffect(()=>{


    const handlescroll =()=>{
    if(topref.current && navref.current && innerWidth > Responsive.width)
    {

      const div = topref.current;
      const divtop = div.getBoundingClientRect().top;
      if(divtop<=0)
      {
        navref.current.style.position= 'fixed';
        navref.current.style.top =0;
      }else{
        navref.current.style.position = 'inherit';
      }

    }
  }

    window.addEventListener('scroll',handlescroll)



    return ()=>{
      window.removeEventListener('scroll',handlescroll)
    }

  },[])



  useEffect(()=>{
    if(homeref.current && aboutref.current && contactref.current && projectsref.current)
    {

    
    for(let i=0;i<parts.length;i++)
    {
      if(parts[i].start<=2 && Math.round(parts[i].end) >0)
      {
        partsref[i].current.style.color = 'red'
      }
      else{
            partsref[i].current.style.color = 'white'
          }
    }
  }
  },[parts,homeref,aboutref,contactref,projectsref])



  return (
    <div className=' h-20 w-screen'>
    <div 
    name = 'tree'
    className='relative z-30'
      ref={topref}
    >
    {
    width > Responsive.width ?
    <ul 
      ref={navref}
       className=' box-border flex items-center bg-neutral-900 border-0 border-b-4 border-customcol  w-screen transition-all duration-300'>
        <div 
        onClick={(e)=>{
          scroll.scrollToTop()

        }}

         className=' mx-5 my-1 text-xl text-white hover:text-red-700 hover:cursor-pointer'>
          <p
          className=' transition-all duration-500'
        ref={homeref}

          >HOME</p>
         </div>
        <Link
        smooth
        duration={500}
        to='target'
        
     
         className=' mx-5 my-1  text-xl text-white hover:text-red-700 hover:cursor-pointer'>
         <p
         className=' transition-all duration-500'
         ref={aboutref}
         >ABOUT</p> 
          </Link>
        <Link
        smooth
        duration={300}
        to="projects"
         onClick={(e)=>{
          
        }}
         className=' mx-5 my-1 text-xl text-white hover:text-red-700 hover:cursor-pointer'>
          <p
         className=' transition-all duration-500'

          ref={projectsref}
          >PROJECTS</p>
          </Link>
        <Link
        smooth
        duration={300}
        to='contact'
         className=' mx-5 my-1 text-xl text-white hover:text-red-700 hover:cursor-pointer'>
          <p
         className=' transition-all duration-500'

          ref={contactref}
          >CONTACT</p>
          </Link>
      </ul>

      :
      <div
      ref={navref}
      className=' box-border fixed top-0 z-10 flex flex-row-reverse pr-5 items-center bg-neutral-900 border-0 border-b-4 border-customcol  w-screen transition-all duration-300'
      >
      <div
      className=' relative'
      >
      {!navon ? 
        <CiMenuBurger
        size={25}
        onClick={()=>setnavon(!navon)}
        className=' text-white my-2 cursor-pointer'
        />

        :
        <RxCross2
        size={25}
        onClick={()=>setnavon(!navon)}
        className='text-white my-2 cursor-pointer'
        />
        }

<AnimatePresence>

       { navon &&
        <motion.div
        {...navanimation()}
        transition={{duration:0.2}} 
        className=' absolute -right-2 overflow-hidden w-screen top-11 px-10 bg-neutral-900 text-white flex flex-col'
        >
          <>
          <div
          
           onClick={(e)=>{
            scroll.scrollToTop()
  
          }}
          className='my-2  cursor-pointer  hover:text-red-500'
          >
            <p
         className=' transition-all duration-500'
         onClick={()=>setnavon(!navon)}
        
          ref={homeref}
          >HOME</p>
            </div>
          <Link
           smooth
           duration={500}
           to='target'
           
          className='my-2  cursor-pointer hover:text-red-500'
          >
             <p
         className=' transition-all duration-500'
         onClick={()=>setnavon(!navon)}

          ref={aboutref}
          >ABOUT</p>
            </Link>
          <Link
           smooth
           duration={300}
           to="projects"
          className='my-2 cursor-pointer hover:text-red-500'
          >
            <p
         className=' transition-all duration-500'
         onClick={()=>setnavon(!navon)}

          ref={projectsref}
          >PROJECTS</p>
            </Link>
          <Link
            smooth
        duration={300}
        to='contact'
          className='my-2 cursor-pointer hover:text-red-500'
          >
             <p
         className=' transition-all duration-500'
         onClick={()=>setnavon(!navon)}

          ref={contactref}
          >CONTACT</p>
            </Link>
            </>
        </motion.div>
}
        </AnimatePresence>
      </div>
      </div>
      }
    </div>
    </div>
  )
}

export default Nav
