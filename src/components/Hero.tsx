import StaggerLetters from "./StaggerLetters.tsx";
import {motion} from "framer-motion";
import {useAnimateStore} from "../store/animateStore.ts";
function Hero() {
  const {name, setName, setNavbar} = useAnimateStore();

  return (

    <section className="h-screen flex  items-center justify-center relative">
      <div className="  relative">
        <motion.h2
          className="font-semibold text-sm sm:text-2xl space-x-1 text-gray-800"
        >
          <StaggerLetters word={"Hi, You can call me:"} onComplete={setName} />
        </motion.h2>
        <motion.h1
          className="text-6xl sm:text-9xl font-archivoBlack  text-gray-800"
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
    </section>
  );
}

export default Hero;