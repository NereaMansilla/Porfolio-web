 import { HomeResponsive } from './Components/Responsive/HomeResponsive'
/* import { Home } from './Components/Desktop/Home'  */
import { PFresponsive } from './Components/Responsive/PFresponsive'
import { Routes, Route } from "react-router-dom"
import { DDresponsive } from './Components/Responsive/DDresponsive'







function App() {


  return (
    <>
<div>

  <Routes>
      <Route  path="/" element={ <HomeResponsive /> } />  
      <Route exact path="PF" element={ <PFresponsive /> } />
      <Route exact path="DD" element={ <DDresponsive /> } />
      </Routes> 
</div>

{/* <div className='md:block'>

  <Routes>
      <Route  path="/" element={ <Home /> } />  
      <Route exact path="PF" element={ <PF/> } /> 
      <Route exact path="DD" element={ <DD/> } />
      </Routes> 
</div> */}
    </>
  )
}

export default App
