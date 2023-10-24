import React from 'react'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const Body = () => {
  return (
    <div >
    <div className=' h-fit'>
      <About/>
      <Projects/>
      <Contact/>
    </div>
    </div>
  )
}

export default Body
