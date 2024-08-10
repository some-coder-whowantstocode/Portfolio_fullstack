import React, { useRef,useEffect,useState } from 'react'
import { AnimatePresence,color,motion } from 'framer-motion'
import { Animationleft } from '../utils/Animations'
import Links from '../ComponentParts/ContactComponent/Links'
import { CONTACT, Responsive } from '../Store'
import { AiOutlineLoading } from 'react-icons/ai'
import Result from './Result'


const Contact = () => {
    const [sender, setSender] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [load,setload] = useState(false)
    const [rm,setrm] = useState(false)
    const [m,setm] = useState()
    const [mr,setmr] = useState('green')

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
    setload(true);
    event.preventDefault();
console.log(load)
    const formData = { sender, subject, message };
    if(sender=='' || subject =='' || message=='')
    {
      setm('Please fill all the data required.')
      setmr('red')
      setrm(true);
      setload(false)
      return;
    }
    
    // https://portfolio-backend-bfn9.onrender.com/sendmail
    try{
     await fetch('https://portfolio-backend-bfn9.onrender.com/sendmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      setload(false)
      setm('Mail deliverd successfully.')
      setmr('green')
      setrm(true);
    }catch(err)
    {
      console.log(load)
      setload(false)
      setm('Mail failed to deliver.')
      setmr('red')
      setrm(true);

    }
    
   

  };

  useEffect(()=>{
    if(rm)
    {
     const timer = setTimeout(() => {
      setrm(false)
     }, 3000);
    return ()=> clearTimeout(timer)

    }
  
  },[rm])




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
        placeholder='subject'
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
          <button
          onClick={handleSubmit}
            className=' 
            border w-20 flex items-center justify-center border-white hover:border-customcol transition-all mt-4 duration-300 py-1 px-2 bg-transparent hover:bg-customcol mb-3 text-white float-right' 
            >
        { load ? <AiOutlineLoading className=' animate-spin text-white' size={20} /> : <p>SUBMIT</p>}

          </button>
      
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
        <button
          onClick={handleSubmit}
            className=' 
            border w-20 flex items-center justify-center border-white hover:border-customcol transition-all mt-4 duration-300 py-1 px-2 bg-transparent hover:bg-customcol mb-3 text-white float-right' 
            >
        { load ? <AiOutlineLoading className=' animate-spin text-white' size={20} /> : <p>SUBMIT</p>}

          </button>
        </div>
      </form>
      
    <Links />

    </>
      }
     { (rm && m && mr) && <Result message={m} colour={mr} />}    {/* {(rm && m && mr) && <Result} */}
    </div>
  )
}

export default Contact
