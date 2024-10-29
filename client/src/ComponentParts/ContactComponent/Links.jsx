import React from 'react'
import { FaGithub } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import Link from './Link';
import { FaXTwitter } from "react-icons/fa6";
import {v4 as uuidv4} from 'uuid';

const Links = () => {

  const Icons = [
    {link:"https://www.linkedin.com/in/rohit-bal-9569b2321/",icon:AiOutlineLinkedin},
    {link:"https://github.com/some-coder-whowantstocode",icon:FaGithub},
    {link:"https://x.com/adevthatcreates",icon:FaXTwitter}
  ];

  return (

<div className='flex items-center justify-center bg-black py-10'>

  {
    Icons.map((i)=>(
      <Link key={uuidv4()}  LINK={i.link} ICON ={i.icon}/>
    ))
  }


</div>
  )
}

export default Links
