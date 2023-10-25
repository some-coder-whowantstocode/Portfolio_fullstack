import React, { useRef,useEffect,useState } from 'react'
import { AnimatePresence,motion } from 'framer-motion'
import { Animationleft } from '../utils/Animations'
import Links from '../ComponentParts/ContactComponent/Links'
import { CONTACT, Responsive } from '../Store'


const Contact = () => {
    const [sender, setSender] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const contactref = useRef(null)


    useEffect(()=>{

      const handlescroll =()=>{
  
        // console.log(aboutref.current.getBoundingClientRect().top)
  
        CONTACT.start = contactref.current.getBoundingClientRect().top;
        CONTACT.end = contactref.current.getBoundingClientRect().bottom;
      }
  
      window.addEventListener('scroll',handlescroll)
  
      return ()=>{
        window.removeEventListener('scroll',handlescroll)
      }
  
    },[])
  

    
 

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Your form submission logic here
    const formData = { sender, subject, message };
    const response = await fetch('https://portfolio-backend-bfn9.onrender.com/sendmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log('Form submitted successfully');
    } else {
      console.log('Form submission failed');
    }
  };




  return (
    <div 
    ref={contactref}
    name="contact"
    className='bg-gray-900 transition-all duration-300'
    >
      {
        innerWidth > Responsive.width 
        ?
        <AnimatePresence>
       <div 
       className='text-white text-5xl font-semibold font-sans w-screen h-32 flex flex-col items-center justify-center'
     >
        <motion.p
        {...Animationleft(-100,0,0.5)}
        >CONTACTS</motion.p>
        <motion.div 
        {...Animationleft(-200,0,0.7)}
        className=' w-28 bg-white h-1'
        ></motion.div>
     </div>

      <form 
      onSubmit={handleSubmit}
      className=' flex flex-col items-center justify-center'>
        <input 
        className='border border-gray-700 p-1  focus:outline-none bg-transparent text-white w-ibox h-ibox mb-3 ' 
        type="email" 
        name='sender' 
        value={sender}
        onChange={(e)=>setSender(e.target.value)}
        placeholder='Email' 
        />
        <input 
        className='border border-gray-700 p-1  focus:outline-none bg-transparent text-white w-ibox h-ibox mb-3' 
        type="text" 
        name='subject' 
        value={subject}
        onChange={(e)=>setSubject(e.target.value)}
        placeholder='name'
        />
        <textarea  
        className='border resize-none border-gray-700 p-1  focus:outline-none bg-transparent text-white w-ibox h-tbox' 
        name="message" 
        id="" 
        cols="30" 
        rows="10" 
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
        placeholder='Enter your message here'
        >

        </textarea>
        <div className='w-ibox '>
        <input 
        type="submit"  
        value="SUBMIT" 
        className=' 
        border border-white hover:border-customcol transition-all mt-4 duration-300 py-1 px-2 bg-transparent hover:bg-customcol mb-3 text-white float-right' 
        />

        </div>
      </form>
      
    <Links />
    </AnimatePresence>

    :
    <>
       <div 
       className='text-white text-3xl font-semibold font-sans w-screen h-32 flex flex-col items-center justify-center'
     >
        <p
        >CONTACTS</p>
        <div 
        className=' w-28 bg-white h-1'
        ></div>
     </div>

      <form
      onSubmit={handleSubmit}
      className=' flex flex-col items-center justify-center'>
        <input 
        style={{
          width:`${innerWidth-50}px`
        }}
        className='border border-gray-700 p-1  focus:outline-none bg-transparent text-white h-ibox mb-3 ' 
        type="email" 
        name='sender' 
        value={sender}
        onChange={(e)=>setSender(e.target.value)}
        placeholder='Email' 
        />
        <input 
         style={{
          width:`${innerWidth-50}px`
        }}
        className='border border-gray-700 p-1  focus:outline-none bg-transparent text-white w-ibox h-ibox mb-3' 
        type="text" 
        name='subject' 
        value={subject}
        onChange={(e)=>setSubject(e.target.value)}
        placeholder='Subject'
        />
        <textarea  
         style={{
          width:`${innerWidth-50}px`
        }}
        className='border resize-none border-gray-700 p-1  focus:outline-none bg-transparent text-white w-ibox h-tbox' 
        name="message" 
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
        id="" 
        cols="30" 
        rows="10" 
        placeholder='Enter your message here'
        ></textarea>
        <div
         style={{
          width:`${innerWidth-50}px`
        }}
        >
        <input 
        type="submit"  
        value="SUBMIT" 
        className=' border border-white hover:border-customcol transition-all mt-4 duration-300 py-1 px-2 bg-transparent hover:bg-customcol mb-3 text-white float-right' 
        />

        </div>
      </form>
      
    <Links />

    </>
      }
    
    </div>
  )
}

export default Contact
