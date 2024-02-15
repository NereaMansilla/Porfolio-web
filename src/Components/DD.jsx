import DDlogo from '../img/DD.png'
import { MdRemoveRedEye } from "react-icons/md";
import DDcarrusel from '../img/DDcarrusel.png' 
import RDHDD from '../img/RDHDD.png'
import DDRDHtapa from '../img/DDRDHtapa.png'
import { Link } from 'react-router-dom';

export const DD= () => {
  return (
    <div className="bg-[#0D0421]   h-[100%] flex flex-col justify-center items-center pb-[20%] ">

<section className="bg-[#00000023] flex flex-col   w-[100%] mb-[10%]  ">
      <Link to='/'>
 <button className='text-white text-lg  ml-2 mt-2 font-medium'>Back</button>
      </Link>

  <div className='w-full flex justify-center items-center'>
  <img src={DDlogo} alt="pf" className='mt-[10%] h-[400px] w-[400px]' />
  </div>

  <br/>
  <h1 className='font-thin text-white text-start text-4xl  ml-6'>DRAGONES DORADOS</h1>
  <p className='font-thin text-white text-start text-md  ml-6'>Wordpress website for which i was asked to make several changes
and updates</p>
<br/>
<p className='font-thin text-white  text-start text-sm  ml-6'>Wordpress, Pagelayer, PHP</p>
<div className=' border-0 border-[#fffffffa] bg-[#fff] text-start  w-full h-[1px] '></div>
  <br/>
<button className='bg-white flex justify-center items-center w-[100px] h-[30px] ml-6 font-thin rounded-sm text-md hover:bg-transparent hover:text-white hover:border hover:border-[#fff] '> <MdRemoveRedEye className='h-[20px] w-[20px] mr-[2px] hover:text-white'/> Website</button>
  </section>

 <br/>

      <section className='bg-[#49218a] w-auto h-auto  rounded-xl ml-[10px] mr-[10px] '>
     <img src={DDcarrusel} alt="pf" className='' />
   
     <p className='font-thin text-white px-[10px] text-center text-lg'>Creation of image carousel</p>
      </section>


      <br/>
      <br/>


      <section className='bg-[#49218a] ml-[10px] mr-[10px]  '>
     <img src={DDRDHtapa} alt="pf" className='' />
     <p className='font-thin text-white px-[10px] text-center text-lg'>Addede book cover of "El rey de los hongos" </p>
      </section> 
<br/>
<br/>
      <section className='bg-[#49218a] w-auto h-auto  rounded-xl ml-[10px] mr-[10px]  '>
     <img src={ RDHDD} alt="pf" className='' />
     <p className='font-thin text-white px-[10px] py-[10px] text-center text-lg'>Desing and creation of the layout "El rey de los hongos"</p>
      </section> 
    </div>
  )
}
