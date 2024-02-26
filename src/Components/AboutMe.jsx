/*  import { DiVisualstudio } from "react-icons/di";
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
import { FaGitAlt } from "react-icons/fa"; */

import {useTransition, useState} from "react"; 
import { TabButton} from "./TabButton";



const TAB_DATA =[
  {
    title:"skills",
    id:"skills",
    content: (
      <ul className="grid grid-cols-4 grid-rows-3 items-center justify-around w-full mt-[10px] lg:text-xl">
        <li>Javascript</li>
        <li>Node.js</li>
        <li>PHP</li>
        <li>PostgreSQL</li>

        <li>React</li>
        <li>Express</li>
        <li>Wordpress</li>
        <li>Git</li>

       
        <li>Figma</li>
        <li>Sequelize</li>
        <li>Mysql</li>
        <li>Powershell</li>
      </ul>
    )
  },
  {

    title:"education",
    id:"education",
    content:(
      <ul className="mt-[10px] lg:text-xl">
        <li>Computer Science Bachelor's Degree at University of Buenos Aires </li>
      </ul>
    )
  }
]
export const AboutMe = () => {
  const [tab,setTab] = useState("skills");
  console.log('tab', tab)
  const [isPending,startTransition] = useTransition();


  const handleTabChange = (id) =>{
    startTransition(()=>{
      setTab(id);
    })
  }
  return (
    <div className=" flex justify-center items-center h-full w-full  bg-[#1f1431] pt-[20%]  text-white " id="About">
   <div className="h-auto w-[90vw]">
      <h1 className=" text-center font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-[#8343AA]">About me</h1>
 <h1 className="text-center font-light text-2xl text-white p-[5px] lg:text-3xl">I’m a web developer specialized in frontend with great passion for technology. I’ve worked in several projects as freelancer, occupying trainee and junior roles. </h1>
 


  <TabButton 
  selectTab={()=>handleTabChange("skills")}
   active={tab === "skills"}>
    {" "}
    Skills{" "} 
   </TabButton>
 

  <TabButton 
  selectTab={()=>handleTabChange("education")}
   active={tab === "education"}>
    {" "}
    Education{" "} 
   </TabButton>
  
  <div className="">
  
    {TAB_DATA.find((t)=> t.id === tab).content}

  </div>

  


   
   </div>
    </div>
  )
}








/* 
<h1 className="text-center font-light text-2xl text-white p-[5px]">Some of my skills:</h1>
<br/>
 <div className="flex flex-row justify-around items-center">
<DiVisualstudio className="h-[50px] w-[50px] text-cyan-600" />
 <IoLogoJavascript className="h-[50px] w-[50px] text-yellow-400" />
 <FaReact className="h-[50px] w-[50px] text-[#61DBFB]" />
<SiRedux  className="h-[50px] w-[50px] text-[#764abc]"  />
<IoLogoNodejs className="h-[50px] w-[50px] text-[#3C873A]" />
 <FaPhp  className="h-[50px] w-[50px] text-white"/>
<FaWordpress  className="h-[50px] w-[50px] text-slate-600" />
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
 <SiMysql className="h-[50px] w-[50px] text-[#f29111]"  />
<BiLogoPostgresql className="h-[50px] w-[50px] text-sky-800" />
<SiSequelize className="h-[50px] w-[50px] text-cyan-500" />
<SiPowershell className="h-[50px] w-[50px] text-black"/>
<FaGitAlt className="h-[50px] w-[50px] text-[#F1502F]" />
</div>

<div className="flex flex-wrap  justify-evenly items-center">
    <h3 className="text-white  text-[10px] sm:text-[15px]">Mysql</h3>
    <h3 className="text-white  text-[10px] sm:text-[15px]">Postgresql</h3>
    <h3 className="text-white  text-[10px] sm:text-[15px]">Sequelize</h3>
    <h3 className="text-white text-[10px]  sm:text-[15px] ">Powershell</h3>
    <h3 className="text-white  text-[10px] sm:text-[15px]  pr-[20px]">Git</h3>
</div>  */