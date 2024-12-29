import {motion, useAnimate, stagger} from "motion/react";
import {useAnimateStore} from "../store/animateStore.ts";
import {useEffect} from "react";

function Hero() {
  const {setNavbar} = useAnimateStore();
  const letters = "Hi, You can call me:".split("");
  const [scope, animate] = useAnimate();
  const staggerLetter = stagger(0.05, {startDelay: 0.5})
  const HeroAnimation = async () => {
    await animate(
      '.letter',
      {opacity: 1},
      {delay: staggerLetter}
    )
    await animate(
      '.name',
      {opacity: 1, scale: 1},
    )
  }
  useEffect(() => {
    HeroAnimation()
      .then(setNavbar);
  }, []);
  return (
    <div
      className="h-screen flex items-center justify-center relative"
      ref={scope}
    >
      <div className="relative">
        <motion.h2
          className="font-semibold text-sm sm:text-2xl text-gray-800"
        >
          {
            letters.map((letter, index) => (
              <motion.span
                key={index}
                className="letter"
                initial={{opacity: 0}}
              >
                {letter}
              </motion.span>
            ))
          }
        </motion.h2>
        <motion.h1
          className="text-6xl sm:text-[10rem] font-blackOps  text-gray-800 name"
          initial={{opacity: 0, scale: 1.5}}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 25,
            delay: 0.5,
          }}
        >
          Srujan J.
        </motion.h1>
      </div>
    </div>
  );
}

export default Hero;