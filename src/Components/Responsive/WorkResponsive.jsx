
import PF from '../../img/PF.png'
import DD from '../../img/DD.png'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export const WorkResponsive = () => {
  return (
    <section className="h-full bg-gradient-to-b bg-[#210D42] pt-[20%]  flex flex-col justify-center items-center" id="Work">
       

   
       <div className='bg-[#78389F] w-[350px] rounded-lg '>
        <img src={PF} alt="puraFiccion" />
       </div>
       <div className='w-[350px]'>
       <h1 className='text-white text-2xl font-extralight '>PURA FICCION</h1>
      <h3 className='text-white text-xl font-extralight  '>Journalistic blog where i dedicated myself to developing and capturing the frontend from layout prototypes</h3>
      <button className='text-white flex text-lg justify-center items-center font-extralight'> <FaArrowRightLong className='mr-[5px]'/> Read more</button>  
       </div>


    

    </section>
  )
}

