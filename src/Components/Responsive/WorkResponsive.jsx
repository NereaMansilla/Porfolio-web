
import PFlogo from '../../img/pfLogo.png'
import DD from '../../img/DD.png'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export const WorkResponsive = () => {
  return (
    <div className='bg-[#1f1431] pt-[100px] h-auto'>
    
    
    <h1 className=" text-center font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-[#8343AA]">Work</h1>
    <section className="h-full flex  items-center justify-center flex-wrap w-full  pb-[50px]" id="Work">
     

     
       
<div className='bg-[#52288250] shadow-xl p-2 w-[250px] h-[400px] rounded-lg flex flex-col justify-center items-center border-b-2 m-6 lg:mr-14 border-[#6600cc] lg:w-[300px] lg:h-[450px] lg:text-lg '>
  <img src={PFlogo} className='' alt="" />
  <h1 className='text-white font-thin text-lg text-center'>Journalistic blog where i dedicated myself to developing ans capturing the frontend from layout prototypes</h1>
  <Link to="PF">
  <button className='flex justify-between items-center text-white font-light'>see more <FaArrowRightLong className='ml-2 mt-1' /></button>
  </Link>
</div>


 <div className='bg-[#52288250] shadow-xl p-2 w-[250px] h-[400px] rounded-lg flex flex-col justify-center items-center border-b-2 lg:w-[300px] lg:h-[450px] border-[#6600cc] lg:text-lg'>
  <img src={DD} className='' alt="" />
  <h1 className='text-white font-thin text-lg text-center'>Wordpress website for which i was asked to make several changes and updates</h1>
  <Link to="DD">
  <button className='flex justify-between items-center text-white font-light'>see more <FaArrowRightLong className='ml-2 mt-1' /></button>
  </Link>
</div> 
   

    

    </section>
    </div>
  )
}

