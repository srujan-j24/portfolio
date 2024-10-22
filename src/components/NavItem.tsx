import {AnimatePresence, motion} from 'framer-motion'
import {useAnimateStore} from "@/store/animateStore.ts";
import {RefObject} from "react";


function scrollTo(ref: RefObject<HTMLElement>) {
  ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function NavItem({current, previous, sectionId, prevRef, curRef}: {current: string, previous: string, sectionId: number, prevRef: RefObject<HTMLElement>, curRef: RefObject<HTMLElement>}) {
  const {section} = useAnimateStore();
  return (
      <AnimatePresence mode={"wait"}>
        {
          section < sectionId + 1
            &&
              <motion.h3
                key={current}
                className="cursor-pointer"
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: -20}}
                whileHover={{scale: 1.05}}
                onClick={()=> scrollTo(curRef)}
              >
                {current}
              </motion.h3>
        }
        {
          section >= sectionId + 1
            &&
              <motion.h3
                key={previous}
                className="cursor-pointer"
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                whileHover={{scale: 1.05}}
                exit={{opacity: 0, y: -20}}
                onClick={()=>scrollTo(prevRef)}
              >
                {previous}
              </motion.h3>
        }
      </AnimatePresence>
  );
}

export default NavItem;