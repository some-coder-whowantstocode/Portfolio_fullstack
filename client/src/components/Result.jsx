import React from 'react'
import {AnimatePresence, motion } from 'framer-motion'
import { Animationleft } from '../utils/Animations'

const Result = (props) => {
  return (
    <AnimatePresence>
    <motion.div
    {...Animationleft(-100,0,0.4)}
    className=' fixed bottom-10 pl-3 left-0 w-screen h-ibox flex items-center bg-neutral-900'
    >
      <motion.p
      style={{
        color:props.colour
      }}
      className=' text-lg font-bold'
      >{props.message}</motion.p>
    </motion.div>
    </AnimatePresence>
    
  )
}

export default Result
