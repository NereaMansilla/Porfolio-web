import {Home} from "./Components/Home"
/* import { Home } from './Components/Desktop/Home'  */
import { PF } from './Components/PF'
import { Routes, Route } from "react-router-dom"
import { DD } from './Components/DD'







function App() {


  return (
    <>
<div>

  <Routes>
      <Route  path="/" element={ <Home /> } />  
      <Route exact path="PF" element={ <PF /> } />
      <Route exact path="DD" element={ <DD /> } />
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
