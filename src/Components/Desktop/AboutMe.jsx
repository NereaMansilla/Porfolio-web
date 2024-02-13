import { DiVisualstudio } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { FaPhp } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiPowershell } from "react-icons/si";
import { SiSequelize } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaWordpress } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";

export const AboutMe = () => {
  return (
    <div className=" flex justify-center items-center h-full bg-[#210D42]   " id="About">
    <div className="h-auto w-[90vw] rounded-[50px] p-[10px] backdrop-blur-md">
  <h1 className="text-center font-light text-[36px] text-white p-[5px]">I’m a web developer specialized in frontend with great passion for technology. I’ve worked in several projects as freelancer, occupyng trainee and junior roles. </h1>
 <h1 className="text-center font-light text-[36px] text-white p-[5px]">Some of my skills:</h1>
 <br/>
  <div className="flex flex-row justify-around items-center">
 <DiVisualstudio className="h-[80px] w-[80px] text-cyan-600" />
  <IoLogoJavascript className="h-[80px] w-[80px] text-yellow-400" />
  <FaReact className="h-[80px] w-[80px] text-[#61DBFB]" />
 <SiRedux  className="h-[80px] w-[80px] text-[#764abc]"  />
 <IoLogoNodejs className="h-[80px] w-[80px] text-[#3C873A]" />
  <FaPhp  className="h-[80px] w-[80px] text-white"/>
 <FaWordpress  className="h-[80px] w-[80px] text-slate-600" />
 </div>
 
  <div className="flex flex-wrap  justify-around items-center">
     <h3 className="text-white text-[10px] sm:text-[15px]">Visual</h3>
     <h3 className="text-white text-[10px] sm:text-[15px]">Javascript</h3>
     <h3 className="text-white text-[10px] sm:text-[15px]">React</h3>
     <h3 className="text-white text-[10px] sm:text-[15px]">Redux</h3>
     <h3 className="text-white text-[10px] sm:text-[15px]">Node js</h3>
     <h3 className="text-white text-[10px] sm:text-[15px]">Php</h3>
     <h3 className="text-white text-[10px] sm:text-[15px]">Wordpress</h3>
 </div> 
 
 <div className="flex flex-row  justify-evenly items-center">
  <SiMysql className="h-[80px] w-[80px] text-[#f29111]"  />
 <BiLogoPostgresql className="h-[80px] w-[80px] text-sky-800" />
 <SiSequelize className="h-[80px] w-[80px] text-cyan-500" />
 <SiPowershell className="h-[80px] w-[80px] text-black"/>
 <FaGitAlt className="h-[80px] w-[80px] text-[#F1502F]" />
 </div>
 
 <div className="flex flex-wrap  justify-evenly items-center">
     <h3 className="text-white  text-[10px] sm:text-[15px]">Mysql</h3>
     <h3 className="text-white  text-[10px] sm:text-[15px]">Postgresql</h3>
     <h3 className="text-white  text-[10px] sm:text-[15px]">Sequelize</h3>
     <h3 className="text-white text-[10px]  sm:text-[15px] ">Powershell</h3>
     <h3 className="text-white  text-[10px] sm:text-[15px]  pr-[20px]">Git</h3>
 </div> 
 
 
    </div>
     </div>
  )
}
