import React from 'react'
import Skill from './Skill'
import { Responsive } from '../../Store'


const Skills = () => {

  

  return (
    <div 
    style={{width:innerWidth > Responsive.width ?"600px" : `${innerWidth-30}px`}}
    className='flex flex-wrap flex-col justify-center'>
      <Skill name="HTML" mastery={80}/>
      <Skill name="CSS"  mastery={80}/>
      <Skill name="JAVASCRIPT"  mastery={70}/>
      <Skill name="REACTJS"  mastery={60}/>
      <Skill name="TAILWIND CSS"  mastery={80}/>
      <Skill name="NODEJS"  mastery={64}/>
      <Skill name="EXPRESSJS" mastery={58}/>
      <Skill name="MONGODB" mastery={80}/>
      <Skill name="UI&UX" mastery={70}/>

    </div>
  )
}

export default Skills
