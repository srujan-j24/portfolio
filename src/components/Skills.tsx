import ViteSVG from '../assets/vite.svg'
import ReactSVG from '../assets/react.svg'
import TailwindSVG from '../assets/tailwind.svg'
import AwsSVG from '../assets/aws.svg'
function Skills() {

  return (
    <div className="h-screen w-screen relative overflow-hidden flex items-center">
      <h1 className="font-glitch absolute  text-gray-100 text-[30vw] -rotate-6 select-none w-full -z-10 text-center bg-white">
        Skills
      </h1>
      {/*<div className="h-full w-full p-8 sm:p-16 flex flex-col sm:flex-row items-center">*/}
      {/*  <div className="w-full  sm:h-full aspect-square flex items-center justify-center">*/}
      {/*    <img src={ViteSVG} alt="" className="h-2/5 "/>*/}
      {/*  </div>*/}
      {/*  <div className="w-2/3 sm:h-2/3 aspect-square flex items-center justify-center">*/}
      {/*    <img src={ViteSVG} alt="" className="h-2/5 "/>*/}
      {/*  </div>*/}
      {/*  <div className="w-1/3 sm:h-1/3 aspect-square flex items-center justify-center">*/}
      {/*    <img src={ViteSVG} alt="" className="h-2/5 "/>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="h-full w-full grid grid-cols-10 p-8 sm:p-16">*/}
      {/*  <div className="col-span-4 flex items-center justify-center ">*/}
      {/*      <img src={ReactSVG} alt="" className="w-1/2"/>*/}
      {/*  </div>*/}
      {/*  <div className="col-span-3 flex items-center justify-center opacity-75">*/}
      {/*    <img src={TailwindSVG} alt="" className="w-1/2"/>*/}
      {/*  </div>*/}
      {/*  <div className="col-span-2 flex items-center justify-center opacity-50">*/}
      {/*    <img src={AwsSVG} alt="" className="w-1/2"/>*/}
      {/*  </div>*/}
      {/*  <div className="col-span-1 flex items-center justify-center opacity-25">*/}
      {/*    <img src={ViteSVG} alt="" className="w-1/2"/>*/}
      {/*  </div>*/}
      {/*</div>*/}
      <div className="h-full w-full flex sm:flex-row p-8 sm:p-16 items-center">
        <div className="w-[40%] aspect-square flex items-center justify-center">
          <img src={ReactSVG} alt="" className="w-1/2"/>
        </div>
        <div className="w-[30%] aspect-square flex items-center justify-center">
          <img src={TailwindSVG} alt="" className="w-1/2"/>
        </div>
        <div className="w-[20%] aspect-square flex items-center justify-center">
          <img src={AwsSVG} alt="" className="w-1/2"/>
        </div>
        <div className="w-[10%] aspect-square flex items-center justify-center">
          <img src={ViteSVG} alt="" className="w-1/2"/>
        </div>
      </div>
    </div>
  );
}

export default Skills;