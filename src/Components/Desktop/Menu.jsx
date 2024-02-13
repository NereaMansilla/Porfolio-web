
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {Link} from 'react-scroll'

export const Menu = () => {
  return (
  
            <nav className="w-full h-16 bg-[#17042B] flex items-center  flex-row shadow-lg ">

            <ul className="flex flex-row" >
              <Link 
              to="Home"
              spy={true}
              smooth={true}>
                <li className="text-white text-lg pr-6 pl-6  cursor-pointer " >Home</li>
              </Link>
              <Link 
            to="About"
            spy={true}
            smooth={true}
            >
            <li className="text-white text-lg  cursor-pointer  md:w-[110px]">About me</li>
              </Link>

              <Link
                to="Work"
                spy={true}
                smooth={true}>
             <li className="text-white text-lg  cursor-pointer ">Work</li>
              </Link>

              <Link
               to="Projects"
               spy={true}
               smooth={true}>
              
                <li className="text-white text-lg  cursor-pointer pl-7">Projects</li>
              </Link>
            </ul>


            <ul className=" flex flex-row w-[70vw] justify-end items-center ">
              <a href="https://www.linkedin.com/in/nerea-barreiro-b1498721b/">
                <li className="text-white pr-6"><FaLinkedin className="lg:h-8 lg:w-8 md:h-6 md:w-6"/></li>
              </a>
              <a href="https://github.com/NereaMansilla">
                <li className="text-white pr-6 "><FaGithub className="lg:h-8 lg:w-8 md:h-6 md:w-6"/></li>
              </a>
              <a href="mailto:nereamansillabarreiro@gmail.com">
                <li className="text-white pr-6 "><MdEmail className="lg:h-8 lg:w-8 md:h-6 md:w-6"/></li>
              </a>
                
            </ul>
            
            </nav>
        

    
  )
}
