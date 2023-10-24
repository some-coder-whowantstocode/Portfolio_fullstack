import React, { useRef,useState } from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { Responsive } from '../../Store';

const Projectinfo = ({props}) => {
  const inforef = useRef(null)
  const [visibility,setvisibility] = useState(false)

  console.log(props)
  return (

    <>
       <div
       className=' -z-0 transition-all cursor-pointer duration-200 opacity-0 text-xl font-semibold absolute left-1/2 bottom-0 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center group-hover:bottom-20 group-hover:opacity-100 border-2 px-3 py-2 border-pink-400 hover:bg-pink-300 '
       onClick={() => {
       setvisibility(true)
      }}
       >
        Learn More
       </div>


{
  innerWidth > Responsive.width
    ?
        <>
        {visibility && 
          <>
         <div
         className=' transition-all duration-500'
         >
          <div
          className='fixed top-0 z-40 left-0 bg-black opacity-50 h-screen w-screen'
          ></div>
         <div 
         style={{
          width:"600px"
         }}
          ref={inforef}
          className=' z-40 fixed top-0 left-1/2 -translate-x-1/2  h-screen bg-white '
          >
            <div 
            className='z-40 fixed right-4 bottom-4 font-bold text-gray-600 cursor-pointer'
            onClick={()=>{setvisibility(false)}}
            >
              <AiOutlineClose
              size={25}
              
              />
            </div>
            
      <img 
      src={props.image} 
      className='w-full h-2/3 border border-b-4 border-black' 
      alt="" />
      <p
      className=' text-2xl text-gray-700 m-3 font-bold '
      >
        {props.name}
      </p>
      
      <hr/>
      <p
      className=' p-2'
      >{props.des}</p>
      
      <div
      className=' transition-all duration-200 border ml-4 cursor-pointer border-pink-400 hover:bg-pink-400 hover:text-white w-fit py-2 px-3'
      >Visit Site ⇾</div>
      
          </div>
          </div>
        </>
          
          }
          </>
  :
          <>
          {visibility && 
            <>
           <div
           className=' transition-all duration-500'
           >
            <div
            className='fixed top-0 z-40 left-0 bg-black opacity-50 h-screen w-screen'
            ></div>
           <div 
          
            ref={inforef}
            className=' z-40 fixed top-0 left-1/2 -translate-x-1/2 w-screen h-screen bg-white '
            >
              <div 
              className='z-40 fixed right-4 bottom-4 font-bold text-gray-600 cursor-pointer'
              onClick={()=>{setvisibility(false)}}
              >
                <AiOutlineClose
                size={25}
                
                />
              </div>
              
        <img 
        src={props.image} 
        className='w-full h-1/3 border border-b-4 border-black' 
        alt="" />
        <p
        className=' text-2xl text-gray-700 m-3 font-bold '
        >
          {props.name}
        </p>
        
        <hr/>
        <p
        className=' p-2'
        >{props.des}</p>
        
        <div
        className=' transition-all duration-200 border ml-4 cursor-pointer border-pink-400 hover:bg-pink-400 hover:text-white w-fit py-2 px-3'
        >Visit Site ⇾</div>
        
            </div>
            </div>
          </>
            
            }

            </>
       }


  </>
  )
}

export default Projectinfo
