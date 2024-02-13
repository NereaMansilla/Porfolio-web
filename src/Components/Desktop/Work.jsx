import PF from '../../img/PF.png'
import DD from '../../img/DD.png'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export const Work = () => {
  return (
    <div className="h-full bg-[#210D42] w-full pt-[30%] lg:pt-[20%]   " id="Work">
    
<div className='flex justify-around relative'>

   <div className="border-[#721BFF] w-[40vw] h-[35vh] border-8 bg-transparent lg:max-w-[35vw] lg:border-[#721BFF] xl:border-[#721BFF] xl:w-[30vw]">
   </div>
 <img src={PF} alt="PF" className='w-[40vw] h-[35vh] shadow-lg absolute object-scale-down bg-[#3E1B76] left-20 bottom-6 lg:w-[35vw] lg:left-20 xl:w-[30vw] xl:left-28' />  

   <div className="flex flex-col w-[35vw] lg:w-[45vw] ">
   <h1 className=" text-white  text-3xl font-light text-center lg:text-4xl ">PURA FICCION</h1>
   <br/>
   <h3 className='font-light text-white text-center text-xl lg:text-2xl '>Journalistic blog where i dedicated myself to developing and capturing the frontend from layout prototypes</h3>
   <br/>

   <Link to="PF">
   <button className='flex flex-row text-center justify-center w-full text-white text-md  items-center '> <FaArrowRightLong className="mr-[10px]"/> Read more</button> 
   </Link>
    </div>

    </div>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

    <div className='flex flex-row-reverse justify-around relative pb-[10%]'>

   <div className="border-[#721BFF] w-[40vw] h-[35vh] border-8 bg-transparent lg:max-w-[35vw] lg:border-[#721BFF] xl:border-[#721BFF] xl:w-[30vw]">
   </div>
 <img src={DD} alt="DD" className='w-[40vw] h-[35vh] absolute object-scale-down bg-[#3E1B76] right-20 bottom-28 lg:w-[35vw] lg:bottom-36  xl:w-[30vw] xl:right-28 xl:bottom-40' />  

   <div className="flex flex-col w-[35vw] lg:w-[45vw] ">
   <h1 className=" text-white  text-3xl font-light text-center lg:text-4xl ">DRAGONES DORADOS</h1>
   <br/>
   <h3 className='font-light text-white text-center text-xl lg:text-2xl '>Wordpress website for which i was asked to make several changes and updates</h3>
   <br/>
   <Link to='DD'>
   <button className='flex flex-row text-center justify-center w-full text-white text-md  items-center '> <FaArrowRightLong className="mr-[10px]"/> Read more</button> 
   </Link>
    </div>

    </div>

</div>
  )
}
