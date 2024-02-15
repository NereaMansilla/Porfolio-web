
import { FaHome } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import {Link} from 'react-scroll'
export const MenuResponsive = () => {
  return (
    <div className=" fixed w-full h-auto bg-[#2B1254] z-[999] ">


<div className="flex w-full justify-evenly items-center flex-row cursor-pointer  ">
<Link 
to="Home"
spy={true}
smooth={true}>

<FaHome className="h-[50px] w-[50px] cursor-pointer"/>
</Link>

<Link 
to="About"
spy={true}
smooth={true}>
 <IoPersonSharp  className="h-[50px] w-[50px] cursor-pointer" />
</Link>

<Link 
to="Work"
spy={true}
smooth={true}>
 <FaCode className="h-[50px] w-[50px] cursor-pointer" />
</Link>

<Link 
to="Projects"
spy={true}
smooth={true}>
 <RiComputerLine className="h-[50px] w-[50px] cursor-pointer" />
</Link>
</div>
 <div className="flex justify-evenly  flex-row pb-[30px]  ">
 <h1>Home</h1>
 <h1>About me</h1>
 <h1>Work</h1>
 <h1>Projects</h1>

    </div> 
 
 {/*  <div className="flex justify-evenly items-center flex-row cursor-pointer ">
 <FaHome className="h-[50px] w-[50px] cursor-pointer"/>
 <IoPersonSharp  className="h-[50px] w-[50px] cursor-pointer" />
 <FaCode className="h-[50px] w-[50px] cursor-pointer" />
 <RiComputerLine className="h-[50px] w-[50px] cursor-pointer" />
    </div>

    <div className="flex justify-evenly items-center flex-row mb-[10px]  ">
 <h1 className="pb-[10px]">Home</h1>
 <h1 className="pb-[10px]">About me</h1>
 <h1 className="pb-[10px]">Work</h1>
 <h1 className="pb-[10px]">Projects</h1>

    </div>    */}
  
    
    </div>
  )
}
