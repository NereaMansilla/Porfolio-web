
import avatar from '../../img/avatar.png'
export const Header = () => {
  return (
    <div className=" h-[100vh]  flex flex-row justify-around items-center " id="home">

<div className="flex flex-col justify-center items-center">
<h1 className="font-light text-5xl text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-[#8343AA]">Hello, i'm Nerea</h1>
<h1 className="font-semibold text-6xl text-white">Web Developer</h1>
<br/>
<button className="text-white text-2xl border-[1px] font-extralight italic p-4 rounded-full bg-transparent border-white">Download CV</button>
</div>

<div>
<img src={avatar} className="lg:h-[400px] lg:w-[400px] md:h-[300px] md:w-[300px] text-center" alt="avtar.png" />
</div>

    </div>
  )
}
