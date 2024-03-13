import React from 'react'
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import Link from './Link';

const Links = () => {

  const Icons = [
    {link:"https://www.linkedin.com/in/rohit-bal-8a352b236/",icon:AiOutlineLinkedin},
    {link:"https://github.com/some-coder-whowantstocode",icon:FaGithub},
    {link:"https://www.instagram.com/rohitbal216/",icon:BsInstagram}
  ];
  console.log(Icons)

  return (

<div className='flex items-center justify-center bg-black py-10'>

  {
    Icons.map((i)=>(
      <Link  LINK={i.link} ICON ={i.icon}/>
    ))
  }


</div>
  )
}

export default Links
