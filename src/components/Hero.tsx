import StaggerLetters from "./StaggerLetters.tsx";
import {motion} from "framer-motion";
import {useAnimateStore} from "../store/animateStore.ts";
function Hero() {
  const {name, setName, setNavbar} = useAnimateStore();

  return (

      <div className="h-screen flex   items-center justify-center relative">
        {/*<div className="absolute font-archivoBlack justify-between w-full text-gray-200 flex flex-col sm:flex-row gap-8 -z-20 bottom-0 p-16 right-0">*/}
        {/*  <div>*/}
        {/*    <h1 className="text-base sm:text-3xl">Goal:</h1>*/}
        {/*    <h1 className="text-4xl sm:text-9xl">1000101</h1>*/}
        {/*  </div>*/}
        {/*  <div>*/}
        {/*    <h1 className="text-base sm:text-3xl ">Visitors:</h1>*/}
        {/*    <h1 className="text-4xl sm:text-9xl">0000000</h1>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <div className="  relative">
          <motion.h2
            className="font-semibold  text-sm sm:text-2xl space-x-1 text-gray-800"
          >
            <StaggerLetters word={"Hi, You can call me:"} onComplete={setName}/>
          </motion.h2>
          <motion.h1
            className="text-6xl sm:text-[10rem] font-blackOps  text-gray-800"
            initial={{opacity: 0, scale: 1.5}}
            animate={name ? {opacity: 1, scale: 1} : {opacity: 0, scale: 1.5}}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 25,
              delay: 0.5,
            }}
            onUpdate={setNavbar}
          >
            Srujan J
          </motion.h1>
        </div>
      </div>
  );
}

export default Hero;