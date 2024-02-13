
import { HeaderResponsive } from "./HeaderResponsive";
import { MenuResponsive } from "./MenuResponsive";
import { AboutMeResponsive } from "./AboutMeResponsive";
import { WorkResponsive } from "./WorkResponsive";
import { ProjectsResponsive } from "./ProjectsResponsive";

export const HomeResponsive = () => {
  return (
  
    <div className="md:hidden bg-[#210D42] h-auto">
    <HeaderResponsive/>
    <MenuResponsive/>
    <AboutMeResponsive/>
    <WorkResponsive/>
    <ProjectsResponsive/> 
    </div>
  )
}

