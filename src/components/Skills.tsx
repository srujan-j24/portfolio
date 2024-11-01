import { AnimatePresence, motion, useInView } from 'framer-motion';
import SkillCard from "@/components/SkillCard.tsx";
import { useState, useRef } from "react";
import awsSVG from '../assets/aws.svg';
import gitSVG from '../assets/git.svg';
import javaSVG from '../assets/java.svg';
import nodeSVG from '../assets/node.svg';
import pythonSVG from '../assets/python.svg';
import reactSVG from '../assets/react.svg';
import vimSVG from '../assets/vim.svg';
import viteSVG from '../assets/vite.svg';

function Skills() {
  const allSkills = [
    { imgPath: gitSVG, id: 'git', bgColor: '#F05032' },
    { imgPath: awsSVG, id: 'aws', bgColor: '#FF9900' },
    { imgPath: vimSVG, id: 'vim', bgColor: '#019833' },
    { imgPath: reactSVG, id: 'react', bgColor: '#61DAFB' },
    { imgPath: javaSVG, id: 'java', bgColor: '#007396' },
    { imgPath: pythonSVG, id: 'python', bgColor: '#3776AB' },
    { imgPath: nodeSVG, id: 'node', bgColor: '#8CC84B' },
    { imgPath: viteSVG, id: 'vite', bgColor: '#646CFF' },
  ];

  const [displaySkills, setDisplaySkills] = useState(
    allSkills.slice(0, 4).map((skill, index) => ({ ...skill, pos: index }))
  );
  const [nextIndex, setNextIndex] = useState(4);

  const skillsRef = useRef(null);
  const inView  = useInView(skillsRef, {
    amount: 0.5,
    once: true
  });

  const nextSkill = () => {
    setDisplaySkills((prevDisplaySkills) => {
      const newSkill = { ...allSkills[nextIndex], pos: 0 };
      const updatedSkills = [
        newSkill,
        ...prevDisplaySkills.slice(0, prevDisplaySkills.length - 1).map((skill, index) => ({
          ...skill,
          pos: index + 1,
        })),
      ];
      return updatedSkills;
    });
    setNextIndex((prev) => (prev + 1) % allSkills.length);
  };

  const transition = { type: 'spring', stiffness: 40, damping: 10,};


  return (
    <div className="h-screen flex items-center justify-center p-8 sm:p-16 overflow-hidden" onClick={nextSkill}>
      <motion.div
        ref={skillsRef}
        className="h-full w-full flex items-center justify-center relative"
        style={{
          transformStyle: 'preserve-3d',
          perspective: '50vw',
          translateY: '-1.25rem'
        }}
      >
        <AnimatePresence>
          {displaySkills.map((skill) => (
            <motion.div
              key={`${skill.id} `}
              data-id={`${skill.id}`}
              className="absolute bg-white sm:w-4/6 sm:h-auto sm:aspect-video h-3/6 aspect-[9/16]"
              initial={{
                translateZ: `${(0 - 1.5) * 2.5}rem`,
                translateY: `${(0 - 1.5) * 2.5}rem`,
                opacity: 1
              }}
              animate={{
                translateZ: inView ? `${(skill.pos - 1.5) * 2.5}rem` :`${(0 - 1.5) * 2.5}rem`,
                translateY: inView ? `${(skill.pos - 1.5) * 2.5}rem` :`${(0 - 1.5) * 2.5}rem`,
                opacity: 1
              }}
              exit={{
                translateY: `${(skill.pos - 1.5) * 2.5 + 100}rem`,
                // opacity: 0,
                transition: {
                  ...transition, delay: 0,
                }
              }}
              onAnimationComplete={(definition) => {
                console.log(definition === 'exit')

                if (definition === "exit") {
                  console.log(`${skill.id} has exited`);
                }
              }}
              transition={transition}
              onClick={(e) => e.stopPropagation()}
            >
              <SkillCard pos={skill.pos} imgPath={skill.imgPath} transition={transition} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default Skills;



