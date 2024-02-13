import StarWars from '../../img/Starwars.png'
import Notedo from '../../img/Notedo.png'
import Weather from '../../img/Weather.png'
import Sitioweb from '../../img/Sitioweb.png'
import { MdRemoveRedEye } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

export const ProjectsResponsive = () => {
 



  return (
    <section className=" text-black  bg-[#210D42] relative  pt-[20%]" id="Projects">
        

        <div className="flex flex-wrap   items-center justify-center px-[10px] pb-[30%] sm:pb-[35%] ">

       <img src={StarWars} alt="SW" className='h-[250px] w-[405px] sm:w-[505px] mb-[5px] object-container' />
       
       <img src={Notedo} alt="Notedo" className='w-[200px] h-[200px] mr-[5px] object-container sm:w-[250px]' />
       <img src={Weather} alt="Weather"  className='w-[200px] h-[200px] sm:w-[250px] object-container' />
      
       <img src={Sitioweb} alt="sitio" className='h-[250px] w-[405px] mt-[5px] object-container sm:w-[505px]'  />

        </div>

     <div className="flex flex-wrap items-center justify-center px-[10px] absolute bottom-0 pb-[30%] sm:pb-[35%] ">

<div className=' bg-black/[.6] h-[250px] w-[405px] sm:w-[505px] mb-[5px] object-container text-center flex flex-col justify-end items-center'>
  <h3 className="text-white text-center text-xl font-semibold"> Star Wars Website </h3>
  <p className='text-white px-[10px]'>Star wars website where you can find information about all the characters</p>
  <br/>
  <div className='flex mb-[20px]  items-center'>
  <h1 className='text-white text-md bg-gray-700 h-[20px] w-[70px]  p-[10px] flex justify-center items-center rounded-lg'>React.js</h1> 
  <h1 className='text-white text-md bg-gray-700 h-[20px] w-[70px]  p-[10px]  flex justify-center items-center rounded-lg'>Tailwind</h1>
  <h1 className='text-white text-md bg-gray-700 h-[20px] p-[10px] w-[70px] flex justify-center items-center  rounded-lg'>Node.js</h1>
  </div>
  <div className="flex pb-[20px] w-[405px] sm:w-[505px] justify-around items-center ">

  <button className="text-white flex justify-center items-center hover:bg-[#fff] hover:text-black ">View code <MdRemoveRedEye className="h-[20px] w-[20px] ml-[5px]"/> </button>
  <button className="text-white flex justify-center items-center  hover:bg-[#fff] hover:text-black ">Website <FaArrowRightLong className="h-[15px] w-[15px] ml-[5px]"/> </button>
  </div>
</div>


<div className=' bg-black/[.6] w-[200px] h-[200px] mr-[5px] object-container sm:w-[250px] text-white text-center flex flex-col justify-end items-center'>
  <h3 className="text-white text-center text-xl font-semibold">Notedo</h3>
  <p className='text-white'>Website where you can organize your tasks</p>
  <br/>
  <div className='flex mb-[20px]  items-center '>
  <h1 className='text-white text-md bg-gray-700 h-[20px] w-[70px]  p-[10px] flex justify-center items-center rounded-lg mr-[5px]'>React.js</h1> 
  <h1 className='text-white text-md bg-gray-700 h-[20px] p-[10px] w-[70px] flex justify-center items-center  rounded-lg'>Node.js</h1>
  </div>

  <div className="flex pb-[20px] w-[200px]  justify-around items-center sm:w-[250px]  ">

<button className="text-white flex justify-center items-center hover:bg-[#fff] hover:text-black ">View code <MdRemoveRedEye className="h-[20px] w-[20px] ml-[5px]"/> </button>
<button className="text-white flex justify-center items-center  hover:bg-[#fff] hover:text-black ">Website <FaArrowRightLong className="h-[15px] w-[15px] ml-[5px]"/> </button>
</div>
</div>


<div className=' bg-black/[.6] w-[200px] h-[200px] object-container sm:w-[250px] text-white text-center flex flex-col justify-end items-center'>
  <h3 className="text-white text-center text-xl font-semibold">Weather Web</h3>
  <p className='text-white'>Website to know the weather</p>
  <br/>
  <div className='flex mb-[20px]  items-center'>
  <h1 className='text-white text-md bg-gray-700 h-[20px] w-[70px]  p-[10px] flex justify-center items-center rounded-lg mr-[5px]'>React.js</h1> 
  <h1 className='text-white text-md bg-gray-700 h-[20px] p-[10px] w-[70px] flex justify-center items-center  rounded-lg'>CSS</h1>
  </div>
  <div className="flex pb-[20px] w-[200px]  justify-around items-center sm:w-[250px]  ">

<button className="text-white flex justify-center items-center hover:bg-[#fff] hover:text-black ">View code <MdRemoveRedEye className="h-[20px] w-[20px] ml-[5px]"/> </button>
<button className="text-white flex justify-center items-center  hover:bg-[#fff] hover:text-black ">Website <FaArrowRightLong className="h-[15px] w-[15px] ml-[5px]"/> </button>
</div>
  
</div>

<div className=' bg-black/[.6] h-[250px] w-[405px] sm:w-[505px] mt-[5px] object-container text-white text-center  flex flex-col justify-end items-center'>
  <h3 className="text-white text-center text-xl font-semibold">Books website</h3>
  <p className='text-white'>Website for registration and information about books</p>
  <br/>
  <div className='flex mb-[20px]  items-center'>
  <h1 className='text-white text-md bg-gray-700 h-[20px] w-[70px]  p-[10px] flex justify-center items-center rounded-lg mr-[5px]'>PHP</h1> 
  <h1 className='text-white text-md bg-gray-700 h-[20px] p-[10px] w-[70px] flex justify-center items-center  rounded-lg'>Boostrap</h1>
  </div>
</div>

 </div>  

 


    </section>
  )
}
