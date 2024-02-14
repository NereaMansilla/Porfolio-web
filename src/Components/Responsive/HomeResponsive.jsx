
import { HeaderResponsive } from "./HeaderResponsive";
import { HeaderDesktop } from "./HeaderDesktop";
import { AboutMeResponsive } from "./AboutMeResponsive";
import { WorkResponsive } from "./WorkResponsive";
import { ProjectsResponsive } from "./ProjectsResponsive";
/* import {MenuResponsive} from "./MenuResponsive" */
import { Menu } from "./Menu";

export const HomeResponsive = () => {
  return (
  
    <div className=" bg-[#1f1431] h-auto">
      <Menu/>
       
    <HeaderResponsive/>
    <HeaderDesktop/>
    <AboutMeResponsive/>
    <WorkResponsive/>
    <ProjectsResponsive/> 
  
    </div>
  )
}

