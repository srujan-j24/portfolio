import {motion, useMotionValue, useTransform} from 'framer-motion'
import {useEffect, useRef, useState} from "react";
import awsSVG from '../assets/aws.svg'
import gitSVG from '../assets/git.svg'
import javaSVG from '../assets/java.svg'
import pythonSVG from '../assets/python.svg'
import reactSVG from '../assets/react.svg'
import vimSVG from '../assets/vim.svg'
import viteSVG from '../assets/vite.svg'
import nodeSVG from '../assets/node.svg'


function Trail() {
  const ref = useRef(null);
  const screenWidth = useMotionValue(window.innerWidth);
  const screenHeight = useMotionValue(window.innerHeight);
  const [animating, setAnimating] = useState(false);
  let rotateCount = 0;

  const [skills, setSkills] = useState([
    {img: reactSVG, pos: 0},
    {img: awsSVG, pos: 1},
    {img: gitSVG, pos: 2},
    {img: viteSVG, pos: 3},
    {img: javaSVG, pos: 4},
    {img: pythonSVG, pos: 5},
    {img: vimSVG, pos: 6},
    {img: nodeSVG, pos: 7},
  ]);

  const diagonal = useTransform(
    [screenWidth, screenHeight],
    // @ts-ignore
    ([width, height]) => Math.sqrt(width ** 2 + height ** 2)
  );

  const tiltAngle = useTransform(
    [screenWidth, screenHeight],
    ([w, h]) => {
      // @ts-ignore
      const d = Math.sqrt(w ** 2 + h ** 2);
      // @ts-ignore
      const angleInRadians = Math.acos(w / d);
      return `${Math.round(angleInRadians * (180 / Math.PI)) * -1 }deg`;
    }
  )
  const updateHW = () => {
    screenWidth.set(window.innerWidth);
    screenHeight.set(window.innerHeight);
  };
  useEffect(() => {
    updateHW();
    window.addEventListener('resize', updateHW);

    return () => {
      window.removeEventListener('resize', updateHW);
    }
  }, [])

  useEffect(() => {
    if(!animating && rotateCount != 0){

    }
  }, [animating]);

  const prev = () => {
    console.log("hi")
    setSkills(skills.map(item => ({...item,pos:  (item.pos - 1 + skills.length) % skills.length})))
  }
  const next = () => {
    console.log("bi")
    setSkills(skills.map(item => ({...item,pos:  (item.pos + 1) % skills.length})))
  }

  return (
    <div className="h-screen w-screen relative overflow-hidden flex items-center justify-center ">
      <motion.div
        ref={ref}
        className="text-gray-100 h-16 sm:h-24 aspect-square flex items-center justify-center"
        style={{
          position: 'relative',
          transformStyle: 'preserve-3d',
          perspective: '200vw',
          // rotateZ: tiltAngle,
          // rotateX: '-5deg',
          translateX: 'calc(-25vw + 2rem)'
        }}
      >
        <motion.h1
          className="absolute text-[20vw] font-glitch"
          style={{
            // rotateZ: `calc(${tiltAngle.get()} * -1)`
          }}
        >
          {/*Skills*/}
        </motion.h1>
        {
          skills.map((skill, index, ary) => {
            const offset = diagonal.get() * 0.20 / window.innerWidth * 100;
            const angle = (skill.pos * 360) / (ary.length) + 90.05;
            const translateX = Math.cos((angle * Math.PI) / 180) * offset;
            const translateZ = Math.sin((angle * Math.PI) / 180) * offset;
            const opacity = Math.round((Math.sin((angle * Math.PI) / 180) + 1) * 2) / 4;
            let scale = Math.round((Math.sin((angle * Math.PI) / 180) + 1) * 2) / 4 * 1.5;
            if(scale == 1.5){
              scale = 2
            }

            return (
              <motion.div
                className="h-full w-full absolute"


                initial={{
                  translateX: `${translateX}vw`,
                  translateZ: `${translateZ}vw`,
                  opacity,
                  scale,
                }}
                animate={{
                  translateX: `${translateX}vw`,
                  translateZ: `${translateZ}vw`,
                  opacity,
                  scale,
                }}
                transition={{duration: 1}}
                onAnimationStart={()=>setAnimating(true)}
                onAnimationEnd={()=>setAnimating(false)}
              >
                <img src={skill.img} alt="" className="object-contain  h-full w-full"/>
              </motion.div>
            )
          })
        }

      </motion.div>
      <div className="absolute top-32 right-32">
        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>
      </div>
      <div className="absolute bottom-32 right-32">
        <h1 className="text-4xl">Vim motions</h1>

      </div>
    </div>
  );
}

export default Trail;