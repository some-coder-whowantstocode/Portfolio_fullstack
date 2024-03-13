import React, { useEffect, useRef, useState } from 'react'
import Project from '../ComponentParts/ProjectComponent/Project'
import chatapp from '../assets/chat-app.jpeg'
import { AnimatePresence,motion} from 'framer-motion'
import { Animationleft } from '../utils/Animations'
import { PROJECT, Responsive } from '../Store'

const Projects = () => {

    const selectorref = useRef(null)
    const allref = useRef(null)
    const reactref = useRef(null)
    const jsref = useRef(null)
    const backref = useRef(null)




    const projectsref = useRef(null)


    useEffect(()=>{

      const handlescroll =()=>{  
        PROJECT.start = projectsref.current.getBoundingClientRect().top;
        PROJECT.end = projectsref.current.getBoundingClientRect().bottom;
      }
  
      window.addEventListener('scroll',handlescroll)
  
      return ()=>{
        window.removeEventListener('scroll',handlescroll)
      }
  
    },[])

    const PROJECTS = [
      {name:"Instant Chat",
        image:chatapp,
        type:["FULLSTACK","ALL","REACTJS"],
        description:`Instant Chat is a real-time chat application that leverages the power of the MERN stack and Socket.IO. One of the unique features of Instant Chat is its transient nature - it does not use a database, ensuring that no chat data persists once the session ends. This design choice prioritizes user privacy and makes each chat session a unique experience.
        `,
        link:'https://instant-chat-ay6x.onrender.com/',
        github:'https://github.com/some-coder-whowantstocode/chat-app'
      },
    ]
    
 
    const [current,setcurrent] = useState("ALL")

    useEffect(()=>{

      
            backref.current.style.width = allref.current.offsetWidth +"px"
            backref.current.style.height = allref.current.offsetHeight +"px"
            backref.current.style.left = allref.current.offsetLeft +"px"

    },[])


    const changepos =(e,val)=>{
        backref.current.style.width = e.target.offsetWidth+"px"
        backref.current.style.left = e.target.offsetLeft +"px"
        setcurrent(val)
    }

   


  return (

    <>
    {
      Responsive.width <innerWidth 
      ?
      <AnimatePresence>
    <div name="projects" 
     ref={projectsref}

    className=' mb-32 transition-all duration-500'
    >
     <div 
       className='text-5xl  font-semibold font-sans w-screen h-32 flex flex-col items-center justify-center'
     >
        <motion.p
        {...Animationleft(-100,0,0.5)}
        >PROJECTS</motion.p>
        <motion.div 
        {...Animationleft(-200,0,0.7)}
        className=' w-28 bg-customcol h-1'
        ></motion.div>
     </div>
        
        <div className='flex items-center justify-center'>
        <ul 
        ref={selectorref} 
        className='flex relative mb-5'
        >
            <motion.div
            {...Animationleft(50,0,0.4)}

            ref={backref}
           
             className='absolute transition-all duration-500 -z-0 top-0 left-0 bg-pink-300 '>

             </motion.div>
            
            <motion.li 
            {...Animationleft(100,0,0.5)}
            ref={allref} 
            onClick={e=>changepos(e,"ALL")} 
            className='relative mr-5 py-2 px-4 cursor-pointer'
            >
            ALL
            </motion.li>

            <motion.li 
            {...Animationleft(100,0.1,0.5)}

            ref={jsref} 
            onClick={e=>changepos(e,"FRONTEND")} 
            className='relative py-2 px-4 cursor-pointer'
            >
            FRONTEND
            </motion.li>

            <motion.li 
            {...Animationleft(100,0.2,0.5)}

            ref={jsref} 
            onClick={e=>changepos(e,"FULLSTACK")} 
            className='relative py-2 px-4 cursor-pointer'
            >
            FULLSTACK
            </motion.li>
            
            <motion.li 
            {...Animationleft(100,0.3,0.5)}

            ref={reactref} 
            onClick={e=>changepos(e,"REACTJS")} 
            className='relative mr-5 py-2 px-4 cursor-pointer'
            >
            REACTJS
            </motion.li>

          

        </ul>

        </div>

        <div className='w-screen flex flex-wrap justify-center transition-all duration-500 ease-in-out'>


        <AnimatePresence>
  <motion.div
    style={{ width: "60vw" }}
    className='flex flex-wrap justify-center items-center transition-all duration-500 ease-in-out'
  >
    {PROJECTS.map((a) => (
       (
        <motion.div 
          key={a.name}
          className='relative w-fit flex group'
        >
          <Project 
          
          image={a.image} 
          name={a.name} 
          isvisible={a.type.find(e=>e==current) } 
          description={a.description}
          link={a.link}
          github={a.github}
          />
        </motion.div>
      )
    ))}
  </motion.div>
</AnimatePresence>



        
        </div>
    </div>
    </AnimatePresence>


:



    <div name="projects" 
     ref={projectsref}

    className=' mb-32 transition-all duration-500'
    >
     <div 
       className='text-3xl  font-semibold font-sans w-screen h-32 flex flex-col items-center justify-center'
     >
        <p
        >PROJECTS</p>
        <div 
        className=' w-28 bg-customcol h-1'
        ></div>
     </div>
        
        <div className='flex items-center justify-center'
      
        >
        <ul 
        ref={selectorref} 
        style={{
          width: innerWidth < Responsive.width ? `${innerWidth-20}px` : "600px"
        }}
        className='flex items-center justify-evenly relative mb-5'
        >
            <div

            ref={backref}
           
             className='absolute transition-all duration-500 -z-0  bg-pink-300 '>

             </div>
            
            <li 
            ref={allref} 
            onClick={e=>changepos(e,"ALL")} 
            className='relative py-1 px-2 text-sm cursor-pointer'
            >
            ALL
            </li>

            {/* <li 

            ref={jsref} 
            onClick={e=>changepos(e,"FRONTEND")} 
            className='relative py-1 px-2 text-sm cursor-pointer'
            >
            FRONTEND
            </li> */}

            <li 
            ref={jsref} 
            onClick={e=>changepos(e,"FULLSTACK")} 
            className='relative py-1 px-2 text-sm cursor-pointer'
            >
            FULLSTACK
            </li>
            
            <li 

            ref={reactref} 
            onClick={e=>changepos(e,"REACTJS")} 
            className='relative py-1 px-2 text-sm cursor-pointer'
            >
            REACTJS
            </li>

        </ul>

        </div>

        <div className='w-screen flex flex-wrap justify-center transition-all duration-500 ease-in-out'>


  <div
    style={{ width: "60vw" }}
    className='flex flex-wrap justify-center items-center transition-all duration-500 ease-in-out'
  >
    {PROJECTS.map((a) => (
       (
        <div 
          key={a.name}
          className='relative w-fit flex group'
        >
          <Project 
          
          image={a.image} 
          name={a.name} 
          isvisible={a.type.find(e=>e==current) } 
          description={a.description}
          link={a.link}
          github={a.github}
          />
        </div>
      )
    ))}
  </div>
        </div>
    </div>
    
    }
    </>


    
  )
}

export default Projects
