import {motion, useInView} from 'framer-motion';
import {useRef, useState} from "react";

function About({ className = ""}: { className?: string; }) {
  const textcolor = '#111827';
  const signcolor = '#dc2626';
  const about = [
    'CHAI>COFFEE&&LetsHangout;',
    'StudentLife==NothingToBragAbout;',
    'TABSoverSPACES||LetsDoSomePairProgramming;',
    'NightOwl!=MyMomApproves;',
    '!(CAPSLOCK==ESC)DoYouNeedAHugBuddy();',
    'Dream==ToGiveAnIntroLikePrimeagen;'
  ];

  const [hovering, setHovering] = useState<string | null>(about[0]);
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.8, once: true });
  function isAlphabet(str:string) {
    return /^[A-Za-z]+$/.test(str);
  }
  return (
    <motion.div ref={ref} className={`h-screen ${className} flex py-16 items-center px-8 sm:px-16  justify-around w-full relative flex-col overflow-hidden `}>
      <h1  className="text-[30vw] absolute -z-20 font-archivoBlack text-gray-100 select-none">About</h1>
      <div className="flex flex-wrap justify-start text-sm text-gray-900 sm:text-lg gap-2 font-montserrat  font-semibold ">
        {about.map((item, itemIndex) => (
          item.split('').map((letter, letterIndex) => (
            <motion.div
              key={`${itemIndex}-${letterIndex}`} // Ensure a unique key for each div
              className={`h-5 sm:h-10 aspect-square flex justify-center items-center`}
              data-hovering={hovering}
              onHoverStart={() => setHovering(item)}
              onTap={() => setHovering(item)}
              style={{scale: 1.3}}
            >
              <motion.span
                animate={{
                  opacity: hovering && hovering == item ? 1 : 0.4,
                  scale: hovering && hovering == item ? 0.9 : 0.7,
                  color: hovering && hovering == item ? `${isAlphabet(letter)? textcolor : signcolor}` : '#111827'
                }}
                transition={{ type: "spring",duration: 0.5   }}
              >
                <motion.div
                  initial={{opacity: 0}}
                  animate={{opacity: inView ? 1 : 0}}
                  transition={{delay: Math.random() * 2 + 0.5}}
                >
                  {letter}
                </motion.div>
              </motion.span>
            </motion.div>
          ))
        ))}
      </div>
    </motion.div>
  );
}

export default About;














