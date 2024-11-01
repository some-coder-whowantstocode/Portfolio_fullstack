import React, { useEffect, useRef, useState } from 'react'
import Project from '../ComponentParts/ProjectComponent/Project'
import chatapp from '../assets/chat-app.jpg'
import canvas from '../assets/canvas.jpg'
import typeForces from '../assets/typing.png'
import { AnimatePresence, motion } from 'framer-motion'
import { Animationleft } from '../utils/Animations'
import { PROJECT, Responsive } from '../Store'
import { v4 as uuidv4, v4 } from 'uuid'

const Projects = () => {

  const selectorref = useRef(null)
  const allref = useRef(null)
  const reactref = useRef(null)
  const jsref = useRef(null)
  const backref = useRef(null)




  const projectsref = useRef(null)


  useEffect(() => {

    const handlescroll = () => {
      PROJECT.start = projectsref.current.getBoundingClientRect().top;
      PROJECT.end = projectsref.current.getBoundingClientRect().bottom;
    }

    window.addEventListener('scroll', handlescroll)

    return () => {
      window.removeEventListener('scroll', handlescroll)
    }

  }, [])

  const HEADLINESS = ["ALL", "FULLSTACK", "REACTJS", "NEXTJS"]

  const PROJECTS = [
    {
      name: "Instant Chat",
      image: chatapp,
      type: [HEADLINESS[0], HEADLINESS[1], HEADLINESS[2]],
      description: `Instant Chat is a real-time chat application that leverages the power of the MERN stack and Socket.IO. One of the unique features of Instant Chat is its transient nature - it does not use a database, ensuring that no chat data persists once the session ends. This design choice prioritizes user privacy and makes each chat session a unique experience.
        `,
      link: 'https://instant-chat-ay6x.onrender.com/',
      github: 'https://github.com/some-coder-whowantstocode/chat-app'
    },
    {
      name: "Whiteboard",
      image: canvas,
      type: [HEADLINESS[0], HEADLINESS[1], HEADLINESS[2]],
      description: `WhiteBoard is a full-stack web application designed to facilitate real-time drawing and collaboration. Built using the MERN stack (MongoDB, Express.js, React, Node.js), it provides a seamless and interactive platform for users to brainstorm, create, and share ideas visually.
        `,
      link: 'https://white-board-d5cn.onrender.com',
      github: 'https://github.com/some-coder-whowantstocode/white_board/'
    },
    {
      name: "type-foces",
      image: typeForces,
      type: [HEADLINESS[0], HEADLINESS[1], HEADLINESS[3]],
      description: `Type Forces is an interactive web application that allows users to compete in typing challenges. Built using modern web technologies and real-time communication with WebSocket, it provides an engaging and competitive experience.`,
      link: 'https://type-forces.onrender.com',
      github: 'https://github.com/some-coder-whowantstocode/type-forces'
    }
  ]


  const [current, setcurrent] = useState("ALL")

  useEffect(() => {


    backref.current.style.width = allref.current.offsetWidth + "px"
    backref.current.style.height = allref.current.offsetHeight + "px"
    backref.current.style.left = allref.current.offsetLeft + "px"

  }, [])


  const changepos = (e, val) => {
    backref.current.style.width = e.target.offsetWidth + "px"
    backref.current.style.left = e.target.offsetLeft + "px"
    setcurrent(val)
  }




  return (

    <>
      {
        Responsive.width < innerWidth
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
                  {...Animationleft(-100, 0, 0.5)}
                >PROJECTS</motion.p>
                <motion.div
                  {...Animationleft(-200, 0, 0.7)}
                  className=' w-28 bg-customcol h-1'
                ></motion.div>
              </div>

              <div className='flex items-center justify-center'>
                <ul
                  ref={selectorref}
                  className='flex relative mb-5'
                >
                  <motion.div
                    {...Animationleft(50, 0, 0.4)}

                    ref={backref}

                    className='absolute transition-all duration-500 -z-0 top-0 left-0 bg-pink-300 '>

                  </motion.div>


                  <motion.li
                    {...Animationleft(100, 0, 0.5)}
                    ref={allref}
                    onClick={e => changepos(e, HEADLINESS[0])}
                    className='relative mr-5 py-2 px-4 cursor-pointer'
                  >
                    {HEADLINESS[0]}
                  </motion.li>

                  <motion.li
                    {...Animationleft(100, 0.1, 0.5)}

                    ref={jsref}
                    onClick={e => changepos(e, HEADLINESS[1])}
                    className='relative py-2 px-4 cursor-pointer'
                  >
                    {HEADLINESS[1]}
                  </motion.li>

                  <motion.li
                    {...Animationleft(100, 0.2, 0.5)}

                    ref={jsref}
                    onClick={e => changepos(e, HEADLINESS[2])}
                    className='relative py-2 px-4 cursor-pointer'
                  >
                    {HEADLINESS[2]}
                  </motion.li>

                  <motion.li
                    {...Animationleft(100, 0.3, 0.5)}

                    ref={reactref}
                    onClick={e => changepos(e, HEADLINESS[3])}
                    className='relative mr-5 py-2 px-4 cursor-pointer'
                  >
                    {HEADLINESS[3]}
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
                          className='relative w-fit flex group'
                        >
                          <Project

                            image={a.image}
                            name={a.name}
                            isvisible={a.type.find(e => e == current)}
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
                  width: innerWidth < Responsive.width ? `${innerWidth - 20}px` : "600px"
                }}
                className='flex items-center justify-evenly relative mb-5'
              >
                <div

                  ref={backref}

                  className='absolute transition-all duration-500 -z-0  bg-pink-300 '>

                </div>

                <li
                  ref={allref}
                  onClick={e => changepos(e, HEADLINESS[0])}
                  className='relative py-1 px-2 text-sm cursor-pointer'
                >
                  {HEADLINESS[0]}
                </li>

                <li

                  ref={jsref}
                  onClick={e => changepos(e, HEADLINESS[1])}
                  className='relative py-1 px-2 text-sm cursor-pointer'
                >
                  {HEADLINESS[1]}
                </li>

                <li
                  ref={jsref}
                  onClick={e => changepos(e, HEADLINESS[2])}
                  className='relative py-1 px-2 text-sm cursor-pointer'
                >
                  {HEADLINESS[2]}
                </li>

                <li

                  ref={reactref}
                  onClick={e => changepos(e, HEADLINESS[3])}
                  className='relative py-1 px-2 text-sm cursor-pointer'
                >
                  {HEADLINESS[3]}
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
                      key={uuidv4()}
                      className='relative w-fit flex group'
                    >
                      <Project

                        image={a.image}
                        name={a.name}
                        isvisible={a.type.find(e => e == current)}
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
