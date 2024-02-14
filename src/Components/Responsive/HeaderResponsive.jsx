
import avatar from '../../img/avatar.png'
/* import { Link } from 'react-router-dom' */
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TypeAnimation } from 'react-type-animation';



  

export const HeaderResponsive = () => {
  return (
    <div className="flex justify-center items-center flex-col text-white font-bold text-4xl" id="Home">
        <br/>
        <br/>
        <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-[#8343AA]">Hello, i'm </h1>
   
        
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Nerea',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web developer',
        1000,
      
      ]}
      wrapper="span"
      speed={50}
    
      repeat={Infinity}
    />


      <br/>
        <section className='flex items-center justify-center w-full'>
          <a href="https://github.com/NereaMansilla">
        <FaGithub className='text-white h-[30px] w-[30px] mr-[10px]'/>
          </a>

          <a href="https://www.linkedin.com/in/nerea-barreiro-b1498721b/">
        <FaLinkedin className='text-white h-[30px] w-[30px] mr-[10px]'/>
          </a>

          <a href="mailto:nereamansillabarreiro@gmail.com">
        <MdEmail className='text-white h-[30px] w-[30px]'/>
          </a>
        </section>
        <br/>
      
       
      
        
        <button className="text-white text-2xl border-[1px] font-extralight italic p-4 rounded-full bg-transparent border-white">Download CV</button>
        
        <br/>
        <br/>
       
        <img src={avatar} className="h-[300px] w-[300px] text-center" alt="avatar" />

       
         
    </div>
  )
}

