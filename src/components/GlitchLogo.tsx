import ReactSVG from '../assets/vite.svg?react';

import { motion } from 'framer-motion';

function GlitchLogo({ className, children }: { className?: string; children?: React.ReactNode }) {
  const glitch1 =[
    "inset(5.0% 100.0% 8.75% 0.0%)",   // 0%
    "inset(16.25% 100.0% 16.38% 0.0%)", // 15%
    "inset(11.25% 100.0% 12.0% 0.0%)",   // 50%
    "inset(15.62% 100.0% 23.12% 0.0%)", // 75%
    "inset(8.75% 100.0% 12.5% 0.0%)",  // 87%
    "inset(16.25% 100.0% 16.25% 0.0%)"  // 100%
  ]


  const glitch2 =[
    "inset(2.5% 100.0% 10.0% 0.0%)",   // 0%
    "inset(12.5% 100.0% 13.12% 0.0%)", // 15%
    "inset(12.5% 100.0% 11.88% 0.0%)",  // 50%
    "inset(7.5% 100.0% 7.5% 0.0%)",   // 75%
    "inset(18.12% 100.0% 20.0% 0.0%)", // 87%
    "inset(23.12% 100.0% 23.12% 0.0%)"  // 100%
  ]


  return (
    <div className={`${className} relative`}>
      <motion.div
        className="h-full w-full"
      >
        <ReactSVG style={{ color: '#111827' }} height={'100%'} width={'100%'} className="absolute z-[10]" />
      </motion.div>
      {/*<motion.div*/}
      {/*  className="absolute top-1 left-[2px] glitch-1"*/}
      {/*  initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}*/}
      {/*  animate={{*/}
      {/*    clipPath: glitch1,*/}
      {/*    transition: {*/}
      {/*      times: [0, 0.15, 0.5, 0.75, 0.87, 1.0],*/}
      {/*      duration: 1,*/}
      {/*      ease: 'linear',*/}
      {/*      delay: 0,*/}
      {/*      repeat: Infinity,*/}
      {/*      repeatType: 'reverse',*/}
      {/*    },*/}
      {/*  }}*/}
      {/*>*/}
      <div className="glitch-1 absolute top-1 left-[2px]">
        <ReactSVG style={{ color: '#111827' }} height={'100%'} width={'100%'} className="relative z-[15]" />
        <ReactSVG style={{ color: '#0ff' }} height={'100%'} width={'100%'} className="absolute -left-[1px] top-0 z-[11]" />
      </div>
      {/*</motion.div>*/}
      {/*<motion.div*/}
      {/*  className="absolute top-0 -left-[2px] clip-custom-rect glitch-2"*/}
      {/*  initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}*/}
      {/*  animate={{*/}
      {/*    clipPath: glitch2,*/}
      {/*    transition: {*/}
      {/*      times: [0, 0.15, 0.5, 0.75, 0.87, 1.0],*/}
      {/*      duration: 0.6,*/}
      {/*      ease: 'linear',*/}
      {/*      delay: 0.2,*/}
      {/*      repeat: Infinity,*/}
      {/*      repeatType: 'mirror',*/}
      {/*    },*/}
      {/*  }}*/}
      {/*>*/}
      <div className="glitch-2 absolute top-0 -left-[2px]">
        <ReactSVG style={{ color: 'darken(#01A8FF, 33%)' }} height={'100%'} width={'100%'} className="relative z-[15]" />
        <ReactSVG style={{ color: '#FF28D7' }} height={'100%'} width={'100%'} className="absolute left-[3px] top-0 z-[11]" />
      </div>
      {/*</motion.div>*/}
    </div>
  );
}

export default GlitchLogo;

