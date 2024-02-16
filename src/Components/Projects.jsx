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
    <section className="h-full pb-20">
    <Swiper
      direction={'vertical'}
      slidesPerView={1}
      /* spaceBetween={30} */
      mousewheel={true}
      pagination={{
        clickable: true,
      }}
      modules={[Mousewheel, Pagination]}
      className="bg-[#fff] h-[30vh] w-[80vw]"
    >
       {ProjectsJSON.map((p)=>(
   <SwiperSlide key={p.id}>
     
     <img src={p.img} alt={p.title} />

   </SwiperSlide>
    
  ))}
    {/*   <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide> */}
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
