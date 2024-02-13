
import { Menu } from "./Menu"
import { Header } from "./Header"
import { AboutMe } from "./AboutMe"
import { Work } from "./Work"
import { Projects } from "./Projects"
export const Home = () => {
  return (
    <div className="hidden md:block  md:bg-[#210D42] ">
      <Menu/>
      <Header/>
      <AboutMe/>
      <Work/>
      <Projects/>
    </div>
  )
}
