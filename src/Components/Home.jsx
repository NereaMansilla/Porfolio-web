
import { Header } from "./Header";
import { HeaderDesktop } from "./HeaderDesktop";
import { AboutMe } from "./AboutMe";
import { Work } from "./Work";
import { Projects } from "./Projects";
/* import {MenuResponsive} from "./MenuResponsive" */
import { Menu } from "./Menu";

export const Home = () => {
  return (
  
    <div className="bg-[#1f1431]  h-auto">
      <Menu/>
    <Header/>
    <HeaderDesktop/>
    <AboutMe/>
    <Work/>
    <Projects/>  
  
    </div>
  )
}

