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
    { imgPath: gitSVG, id: 'git'},
    { imgPath: awsSVG, id: 'aws' },
    { imgPath: vimSVG, id: 'vim' },
    { imgPath: reactSVG, id: 'react'},
    { imgPath: javaSVG, id: 'java' },
    { imgPath: pythonSVG, id: 'python'},
    { imgPath: nodeSVG, id: 'node' },
    { imgPath: viteSVG, id: 'vite' },
  ];

  const [displaySkills, setDisplaySkills] = useState(
    allSkills.slice(0, 4).map((skill, index) => ({ ...skill, pos: index, version: 0 }))
  );
  const [nextIndex, setNextIndex] = useState(7);
  const [versionCounter, setVersionCounter] = useState(1);

  const skillsRef = useRef(null);
  const inView  = useInView(skillsRef, {
    amount: 0.8,
    once: true
  });

  const nextSkill = () => {
    setDisplaySkills((prevDisplaySkills) => {
      const newSkill = { ...allSkills[nextIndex], pos: 0, version: versionCounter };
      setVersionCounter((prev) => prev + 1); // Increment the version counter

      const updatedSkills = [
        newSkill,
        ...prevDisplaySkills.slice(0, prevDisplaySkills.length - 1).map((skill, index) => ({
          ...skill,
          pos: index + 1,
        })),
      ];
      return updatedSkills;
    });
    setNextIndex((prev) => (prev - 1 + allSkills.length)  % allSkills.length);
  };

  const transition = { type: 'spring', stiffness: 40, damping: 10 };

  return (
    <div className="h-screen flex items-center justify-center p-8 sm:p-16 overflow-hidden" onClick={nextSkill}>
      <motion.div
        ref={skillsRef}
        className="h-full w-full flex items-center justify-center relative"
        style={{
          transformStyle: 'preserve-3d',
          perspective: '50vw',
          translateY: '-3.25rem'
        }}
      >
        <AnimatePresence>
          {displaySkills.map((skill) => (
            <motion.div
              key={`${skill.id}-${skill.version}`}
              data-id={`${skill.id}`}
              className="absolute bg-white sm:w-4/6 sm:h-auto sm:aspect-video h-3/6 aspect-[9/16]"
              initial={{
                translateZ: `${(0 - 1.5) * 2.5}rem`,
                translateY: `${(0 - 1.5) * 2.5}rem`,
                opacity: 1
              }}
              animate={{
                translateZ: inView ? `${(skill.pos - 1.5) * 2.5}rem` : `${(0 - 1.5) * 2.5}rem`,
                translateY: inView ? `${(skill.pos - 1.5) * 2.5}rem` : `${(0 - 1.5) * 2.5}rem`,
                opacity: 1
              }}
              exit={{
                translateY: `${(skill.pos - 1.5) * 2.5 + 40}rem`,
                translateZ: `${(skill.pos - 1.5) * 2.5}rem`,
                transition: {
                  ...transition, delay: 0, duration: 0.5
                }
              }}
              onAnimationComplete={(definition) => {
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


