/* import StarWars from '../../img/Starwars.png'
import Notedo from '../../img/Notedo.png'
import Weather from '../../img/Weather.png'
import Sitioweb from '../../img/Sitioweb.png'
import { MdRemoveRedEye } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

 */
import {ProjectsJSON} from "../ProjectsJSON.js"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination } from 'swiper/modules';


export const Projects= () => {
 
  return (
    <section className="h-full pb-24">
         <h1 className=" text-center font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-[#8343AA]">Projects</h1>
         <br/>
         <br/>
    <Swiper
      direction={'vertical'}
      slidesPerView={1}
       /* spaceBetween={30}  */
      mousewheel={true}
      pagination={{
        clickable: true,
      }}
      modules={[Mousewheel, Pagination]}
      className="bg-[#fff] h-[40vh] w-[90vw] rounded-md shadow-lg "
    >
       {ProjectsJSON.map((p)=>(
   <SwiperSlide key={p.id}>


     <img className="h-[40vh] w-[90vw] relative blur-[1px]" src={p.img} alt={p.title} />
      <div className=" text-white absolute px-8 z-[100] bg-[#00000091] rounded-md w-[90vw] h-[40vh] flex justify-center flex-col items-center text-center left-0 top-0  ">
        <h1 className="text-xl font-bold "> {p.title} </h1>
        <span>{p.content}</span>
        <br/>
         <span className="text-sm font-thin">{p.technologies}</span>

        <div className="w-[90vw] flex justify-center items-center">
          <a href={p.website}>
        <button className="text-md border-b border-[#fff] mt-8 hover:text-[#ADB7BE] hover:border-b-[#ADB7BE]">Website</button>
         </a>
         <a href={p.github}>
        <button className="text-md border-b border-[#fff] mt-8 ml-4 hover:text-[#ADB7BE] hover:border-b-[#ADB7BE]">Github</button>
         </a>

        </div>
        </div> 
     

   </SwiperSlide>
    
  ))}

    </Swiper>
    
  {/*  {ProjectsJSON.map((p)=>(
    <div className="h-full" key={p.id}>
      {p.title}
      <img src={p.img} alt={p.title} />
    </div>
  ))}
    */}
  </section>


 


  )
}
