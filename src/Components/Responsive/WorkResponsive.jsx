
import PF from '../../img/PF.png'
import DD from '../../img/DD.png'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export const WorkResponsive = () => {
  return (
    <div className="h-full bg-gradient-to-b bg-[#210D42] pt-[20%]  " id="Work">

        <div className="flex justify-around relative ">

          <div className="border-[#721BFF] h-[22vh] min-w-[45vw] max-w-[48vw] border-8 bg-transparent sm:w-[47vw] sm:h-[25vh] ">
          </div>
            <img className="h-[20vh] w-[45vw] max-w-[46vw] object-cover bg-[#3E1B76] absolute bottom-5 left-10 sm:left-14 sm:object-scale-down sm:bottom-5 sm:h-[25vh] " src={PF} alt="pf" />  


           <div className="  ">
          <h1 className=" text-white  text-lg font-light text-center sm:text-2xl">PURA FICCION</h1>
          <h3 className='font-light text-white text-md text-center w-[35vw] sm:text-xl'>Journalistic blog where i dedicated myself to developing and capturing the frontend from layout prototypes</h3>
          <Link to="PF">
          <button className='flex flex-row text-center justify-center w-full text-white text-sm items-center sm:text-lg'> <FaArrowRightLong className="mr-[10px]"/> Read more</button> 
          </Link>
           </div>

        </div>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <div className="flex flex-row-reverse justify-around relative ">

<div className="border-[#721BFF] h-[22vh] min-w-[45vw] max-w-[48vw] border-8 bg-transparent sm:w-[47vw] sm:h-[25vh] ">
</div>
  <img className="h-[20vh] w-[45vw] max-w-[46vw]  bg-[#3E1B76] absolute bottom-5 right-9 sm:h-[25vh] sm:right-12 object-scale-down sm:object-scale-down" src={DD} alt="pf" />  


 <div className="  ">
<h1 className="text-white  text-lg font-light text-center sm:text-2xl ">DRAGONES DORADOS</h1>
<h3 className='font-light text-white text-md text-center w-[35vw] sm:text-xl'>Wordpress website for which i was asked to make several changes and updates</h3>
<Link to='DD'>
 <button className='flex flex-row text-center justify-center w-full text-white text-sm items-center sm:text-lg'> <FaArrowRightLong className="mr-[10px]"/> Read more</button> 
</Link>
 </div>

</div>


    </div>
  )
}

