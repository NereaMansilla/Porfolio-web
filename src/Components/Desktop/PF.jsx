import PFlogo from '../../img/pfLogo.png'
import { MdRemoveRedEye } from "react-icons/md";
import PFinicio from '../../img/inicioPF.png' 
import PFCard from '../../img/PFCard.png'
import PFsearchbar from '../../img/PFsearchbar.png'
import PFControlPanel from '../../img/PFControlPanel.png'
import { Link } from 'react-router-dom';

export const PF = () => {
  return (
    <div className="bg-[#0D0421]   h-[100%] md:flex flex-col justify-center items-center pb-[10%]  hidden ">
          <section className="bg-[#00000023] flex flex-col    mb-[10%] w-full">
      <Link to='/'>
 <button className='text-white text-lg   mt-2 font-medium ml-[10px]'>Back</button>
      </Link>

  <div className='w-full flex justify-center items-center'>
  <img src={PFlogo} alt="pf" className='mt-[10%]' />
  </div>

  <br/>
  <h1 className='font-thin text-white text-start text-5xl  ml-[10px] '>PURA FICCION</h1>
  <p className='font-thin text-white text-start text-xl ml-[10px]'>Journalistic blog where i dedicated myself to developing and capturing
the frontend from layout prototypes</p>
<br/>
<p className='font-thin text-white  text-start text-md ml-[10px]'>React.js, Vite, Tailwind CSS, Redux</p>
<div className=' border-0 border-[#fffffffa] bg-[#fff] text-start  w-full h-[1px] '></div>
  <br/>
<button className=' ml-[10px] bg-white flex justify-center items-center w-[100px] h-[30px] font-thin rounded-sm text-md lg:text-lg hover:bg-transparent hover:text-white hover:border hover:border-[#fff] '> <MdRemoveRedEye className='h-[20px] w-[20px] mr-[2px] hover:text-white'/> Website</button>
  </section>

 <br/>

      <section className='bg-[#49218a] w-auto h-auto  rounded-xl ml-[10px] mr-[10px] '>
     <img src={PFinicio} alt="pf" className='' />
      <br/>
     <img src={PFCard} alt="pf" className='' />
     <p className='font-thin text-white px-[10px] text-center text-lg'>Creation of image carousel, cards on the home page, and details of the cards</p>
      </section>


      <br/>
      <br/>


      <section className='bg-[#49218a] w-auto h-auto flex rounded-xl ml-[10px] mr-[10px] justify-center items-center '>
     <img src={ PFsearchbar} alt="pf" className='h-[200px] w-[300px] object-cover border-sm' />
     <p className='font-thin text-white px-[10px] text-center text-lg'>Implementation of UI and navigation bar logic </p>
      </section> 
<br/>
<br/>
      <section className='bg-[#49218a]  h-auto  rounded-xl ml-[10px] mr-[10px] flex flex-col justify-center items-center w-[500px]   '>
     <img src={ PFControlPanel} alt="pf" className='' />
     <p className='font-thin text-white px-[10px] py-[10px] text-center text-lg'>Creation of control panel to shape the design and implement code for sending information </p>
      </section> 
    </div>
  )
}
