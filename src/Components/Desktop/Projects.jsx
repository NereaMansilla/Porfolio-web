import StarWars from '../../img/StarwarsDesktop.png'
import Notedo from '../../img/Notedo.png'
import Weather from '../../img/Weather.png'
import Sitioweb from '../../img/Sitioweb.png'
import { MdRemoveRedEye } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

export const Projects = () => {
  return (
    <section className=" text-black bg-[#210D42] relative h-full pt-[10%] w-full" id="Projects">
        

        <div className="flex flex-wrap   items-center justify-center px-[10px] pb-[30%]  ">

       <img src={StarWars} alt="SW" className=' h-[250px] w-[70.5vw] mt-[5px]  mb-[5px] object-cover lg:w-[65vw]  ' />
       
       <img src={Notedo} alt="Notedo" className='  w-[35vw] h-[30vh] mr-[5px] object-container lg:w-[32.2vw]   ' />
       <img src={Weather} alt="Weather"  className='   w-[35vw] h-[30vh] object-container lg:w-[32.2vw]'  />
      
       <img src={Sitioweb} alt="sitio" className=' h-[250px] w-[70.5vw] mt-[5px] object-cover lg:w-[65vw] '  />

        </div>

   <div className="flex flex-wrap items-center justify-center px-[10px] absolute bottom-0 pb-[30%]  ">

<div className=' bg-black/[.6] h-[250px] w-[70.5vw] mb-[5px] object-container text-center flex flex-col justify-end items-center lg:w-[65vw] '>
  <h3 className="text-white text-center text-3xl font-semibold"> Star Wars Website </h3>
  <p className='text-white text-xl font-light  px-[5px] lg:text-2xl'>Star wars website where you can find information about all the characters</p>
  <br/>
  <div className='flex mb-[20px]  items-center'>
  <h1 className='text-white text-md bg-gray-700 h-[20px] w-[70px]  p-[15px] flex justify-center items-center rounded-lg mr-[5px]'>React.js</h1> 
  <h1 className='text-white text-md bg-gray-700 h-[20px] w-[70px]  p-[15px]  flex justify-center items-center rounded-lg mr-[5px]'>Tailwind</h1>
  <h1 className='text-white text-md bg-gray-700 h-[20px] p-[15px] w-[70px] flex justify-center items-center  rounded-lg'>Node.js</h1>
  </div>
  <div className="flex pb-[20px] w-[70.5vw]  justify-around items-center lg:w-[65vw] ">

<button className="text-white flex justify-center items-center text-lg hover:bg-[#fff] hover:text-black ">View code <MdRemoveRedEye className="h-[20px] w-[20px] ml-[5px]"/> </button>
<button className="text-white flex justify-center items-center text-lg hover:bg-[#fff] hover:text-black ">Website <FaArrowRightLong className="h-[15px] w-[15px] ml-[5px]"/> </button>
</div>
</div>

<div className=' bg-black/[.6]  w-[35vw] h-[30vh] mr-[5px] object-container text-white text-center flex flex-col justify-end items-center lg:w-[32.2vw]'>
  <h3 className="text-white text-center text-3xl font-semibold">Notedo</h3>
  <p className='text-white  text-xl font-light px-[5px] lg:text-2xl lg:px-[10px] '>Website where you can organize your tasks</p>
  <br/>
  <div className='flex mb-[20px]  items-center'>
  <h1 className='text-white text-md bg-gray-700 h-[20px] w-[70px]  p-[15px] flex justify-center items-center rounded-lg mr-[5px]'>React.js</h1> 
  <h1 className='text-white text-md bg-gray-700 h-[20px] w-[70px]  p-[15px]  flex justify-center items-center rounded-lg mr-[5px]'>MaterialUI</h1>
  <h1 className='text-white text-md bg-gray-700 h-[20px] p-[15px] w-[70px] flex justify-center items-center  rounded-lg'>Node.js</h1>
  </div>
  <div className="flex pb-[20px] w-[35vw]  justify-around items-center lg:w-[32.2vw] ">

<button className="text-white flex justify-center items-center text-lg hover:bg-[#fff] hover:text-black ">View code <MdRemoveRedEye className="h-[20px] w-[20px] ml-[5px]"/> </button>
<button className="text-white flex justify-center items-center text-lg hover:bg-[#fff] hover:text-black ">Website <FaArrowRightLong className="h-[15px] w-[15px] ml-[5px]"/> </button>
</div>
</div>


<div className=' bg-black/[.6]  w-[35vw] h-[30vh] object-container  text-white text-center flex flex-col justify-end items-center lg:w-[32.2vw] '>
  <h3 className="text-white text-center text-3xl font-semibold">Weather Web</h3>
  <p className='text-white text-xl font-light px-[5px] lg:text-2xl'>Website to know the weather</p>
  <br/>
  <div className='flex mb-[20px]  items-center'>
  <h1 className='text-white text-md bg-gray-700 h-[20px] w-[70px]  p-[15px] flex justify-center items-center rounded-lg mr-[5px]'>React.js</h1> 
  <h1 className='text-white text-md bg-gray-700 h-[20px] w-[70px]  p-[15px]  flex justify-center items-center rounded-lg mr-[5px]'>CSS</h1>
 
  </div>
  <div className="flex pb-[20px] w-[35vw] justify-around items-center lg:w-[32.2vw] ">

<button className="text-white flex justify-center items-center text-lg hover:bg-[#fff] hover:text-black ">View code <MdRemoveRedEye className="h-[20px] w-[20px] ml-[5px]"/> </button>
<button className="text-white flex justify-center items-center text-lg hover:bg-[#fff] hover:text-black ">Website <FaArrowRightLong className="h-[15px] w-[15px] ml-[5px]"/> </button>
</div>
</div>

<div className=' bg-black/[.6] h-[250px] w-[70.5vw] mt-[5px] object-container text-white text-center  flex flex-col justify-end items-center lg:w-[65vw]'>
  <h3 className="text-white text-center text-3xl font-semibold">Books website</h3>
  <p className='text-white text-xl font-light px-[5px] lg:text-2xl'>Website for registration and information about books</p>
  <br/>
  <div className='flex mb-[20px]  items-center'>
  <h1 className='text-white text-md bg-gray-700 h-[20px] w-[70px]  p-[15px] flex justify-center items-center rounded-lg mr-[5px]'>PHP</h1> 
  <h1 className='text-white text-md bg-gray-700 h-[20px] w-[70px]  p-[15px]  flex justify-center items-center rounded-lg mr-[5px]'>Boostrap</h1>
 
  </div>
  <div className="flex pb-[20px] w-[70.5vw]  justify-around items-center lg:w-[65vw] ">

<button className="text-white flex justify-center items-center text-lg hover:bg-[#fff] hover:text-black ">View code <MdRemoveRedEye className="h-[20px] w-[20px] ml-[5px]"/> </button>
<button className="text-white flex justify-center items-center text-lg hover:bg-[#fff] hover:text-black ">Website <FaArrowRightLong className="h-[15px] w-[15px] ml-[5px]"/> </button>
</div>

</div>

 </div>   
 
 


    </section>



  )
}
