import React from 'react'
import me from '../../assets/default.jpg'
import { Responsive } from '../../Store'
import { AnimatePresence,motion } from 'framer-motion'
import { Animationleft, projectanimation } from '../../utils/Animations'

const Me = () => {
  return (
    <>
    {
        innerWidth> Responsive.width
        ?
        <AnimatePresence>
<motion.div
    className='mt-8 w-ibox flex flex-col items-center justify-center'
    >
      <img
      key={'i'}
      className=' mb-4 h-pimg w-pimg  rounded-full border-8 border-customcol'
      src={me} 
      alt="" 
      />

    <motion.p
    key={'p'}
      {...Animationleft(-100,0,0.6)}

    className='mb-4 font-serif text-gray-700'
    >
    Hi,I am a full-stack web developer, currently in search of opportunity of working with experienced people to have some taste of the field I am aspiring to join. I love to create new things and would love to work with peoples, organisations, teams, starts ups. Currently I am looking for people to work with as to hone my skills and experiencing new things as the field I am aspiring to join is vast and growing at an tremendous speed.
    </motion.p>

    </motion.div>

    </AnimatePresence>
        :

        <div
    className='mt-8 w-screen flex flex-col items-center justify-center'
    >
      <img
      className=' mb-4 h-simg w-simg  rounded-full border-8 border-customcol'
      src={me} 
      alt="" 
      />

    <p
    style={{
        width:`${innerWidth-20}px`
    }}
    className='mb-4 text-xs font-serif text-gray-700 '
    >
    Hi,I am a full-stack web developer, currently in search of opportunity of working with experienced people to have some taste of the field I am aspiring to join. I love to create new things and would love to work with peoples, organisations, teams, starts ups. Currently I am looking for people to work with as to hone my skills and experiencing new things as the field I am aspiring to join is vast and growing at an tremendous speed.
    </p>

    </div>



    }
    
    </>
  )
}

export default Me
