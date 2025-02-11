import PFlogo from '../img/pfLogo.png';
import DD from '../img/DD.png';
import DIENST from '../img/dienst.png';

export const Work = () => {
  return (
    <div className='mb-[100px]'>
      <h1 className="pl-6 mt-[100px] text-center text-5xl text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-[#8343AA]">
        Work experience
      </h1>
      <br />
      <div className='h-auto border-l-4 border-white-500'>

    
        <div className='flex items-center gap-4 mb-10'>
          <img src={DIENST} className='h-[120px] w-[120px]' alt="Dienst logo" />
          <div>
            <h1 className='text-3xl text-white font-bold'>Fullstack Developer</h1>
            <h3 className='text-white font-bold'>Dienst Consulting</h3>
            <h3 className='text-white'>Apr 2024 - Now</h3>
            <div className='flex gap-2 flex-wrap mt-2'>
              <p className='text-white bg-[#5E3A72] p-1 rounded'>PHP</p>
              <p className='text-white bg-[#5E3A72] p-1 rounded'>JavaScript</p>
              <p className='text-white bg-[#5E3A72] p-1 rounded'>MySQL</p>
              <p className='text-white bg-[#5E3A72] p-1 rounded'>Cake PHP</p>
              <p className='text-white bg-[#5E3A72] p-1 rounded'>Laravel</p>
            </div>
            <p className='text-white mt-4'>
              In charge of the development and maintenance of systems used in government entities, including the Municipality of La Plata, education, and the City Police.
            </p>
            <ul className='text-white list-disc ml-5 mt-2'>
              <li>Works with MySQL databases, optimizing queries and structures to improve performance.</li>
              <li>Responsible for implementing new functionalities in both frontend and backend.</li>
            </ul>
          </div>
        </div>

        <div className='flex items-center gap-4 mb-10'>
          <img src={PFlogo} className='h-[120px] w-[120px]' alt="Pura Ficción logo" />
          <div>
            <h1 className='text-3xl text-white font-bold'>Frontend Developer</h1>
            <h3 className='text-white font-bold'>Pura Ficción</h3>
            <h3 className='text-white'>Oct 2022 - Apr 2023</h3>
            <div className='flex gap-2 flex-wrap mt-2'>
              <p className='text-white bg-[#5E3A72] p-1 rounded'>React</p>
              <p className='text-white bg-[#5E3A72] p-1 rounded'>JavaScript</p>
              <p className='text-white bg-[#5E3A72] p-1 rounded'>Tailwind CSS</p>
            </div>
            <p className='text-white mt-4'>
              Journalistic blog where I dedicated myself to developing and capturing the frontend from layout prototypes.
            </p>
            <ul className='text-white list-disc ml-5 mt-2'>
              <li>Frontend deployment and SSL integration.</li>
              <li>Creation and integration of the control panel.</li>
              <li>Creation and implementation of UX/UI elements (image carousel, cards).</li>
            </ul>
          </div>
        </div>


        <div className='flex items-center gap-4 mb-10'>
          <img src={DD} className='h-[120px] w-[120px]' alt="Dragones Dorados logo" />
          <div>
            <h1 className='text-3xl text-white font-bold'>Frontend Developer</h1>
            <h3 className='text-white font-bold'>Dragones Dorados</h3>
            <h3 className='text-white'>May 2023 - Nov 2023</h3>
            <div className='flex gap-2 flex-wrap mt-2'>
              <p className='text-white bg-[#5E3A72] p-1 rounded'>PHP</p>
              <p className='text-white bg-[#5E3A72] p-1 rounded'>WordPress</p>
              <p className='text-white bg-[#5E3A72] p-1 rounded'>PageLayer</p>
            </div>
            <p className='text-white mt-4'>
              WordPress website for which I was asked to make several changes and updates.
            </p>
            <ul className='text-white list-disc ml-5 mt-2'>
              <li>Update of the site to PHP 8.1.20.</li>
              <li>SSL integration.</li>
              <li>Use of PageLayer for UX/UI improvements.</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};


