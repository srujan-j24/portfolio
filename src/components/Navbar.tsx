import {useAnimate, stagger, motion} from 'motion/react';
import { quantum } from 'ldrs';
import NavItem from "@/components/NavItem.tsx";
import React, {RefObject, useEffect, useState} from "react";
import {useAnimateStore} from "@/store/animateStore.ts";

type NavbarProps = {
  sectionRefs: Array<RefObject<any>>
}
const Navbar : React.FC<NavbarProps> = ({sectionRefs}) =>{
  const [scope, animate] = useAnimate();
  const {navbar} = useAnimateStore();
  const navItems = [
    { previous: 'Home', current: 'About', prevRef: sectionRefs[0], curRef: sectionRefs[1], sectionId: 0 },
    { previous: 'About', current: 'Skills', prevRef: sectionRefs[1], curRef: sectionRefs[2], sectionId: 1 },
    { previous: 'Skills', current: 'Projects', prevRef: sectionRefs[2], curRef: sectionRefs[3], sectionId: 2 },
    { previous: 'Projects', current: 'Contact', prevRef: sectionRefs[3], curRef: sectionRefs[4], sectionId: 3 },
  ];

  quantum.register();
  const staggerNavItems = stagger(0.2, {startDelay: 0.5});
  const navBarAnimation = async () => {
    await animate(
      ".logo",
      navbar
        ? {scale: 1}
        : {scale: 0},
      {
        duration: navbar ? 0.5  : 0,
        delay: 0.5
      }
    )
    await animate(
      "li",
      navbar
        ? {opacity: 1, y: 0}
        : {opacity: 0, y: -20},
      {
        delay: navbar ? staggerNavItems : 0
      }
    )
  }
  const [logoSpeed, setLogoSpeed] = useState(2.5);
  const toggleLogoSpeed = ()=>{
    if(logoSpeed == 2.5) setLogoSpeed(5 );
    else setLogoSpeed(2.5);
  }
  useEffect(() => {
    navBarAnimation();
  }, [animate, navbar]);
  return (
    <nav className="fixed flex justify-between top-0 h-16 w-screen z-10 px-8 sm:px-16 items-center backdrop-blur-xl Fnav " ref={scope}>
      <motion.div
        className="logo scale-0"
        onClick={toggleLogoSpeed}
        initial={{scale: 0}}
      >
        <l-quantum
          size="32"
          speed={logoSpeed}
          color="#4b5563"
        ></l-quantum>
      </motion.div>
      <ul className="sm:flex hidden  gap-16 px-8 text-gray-600 text-lg font-semibold font-montserrat h-full items-center justify-end">
        {
          navItems.map(({ previous, current, prevRef, curRef, sectionId }, index) => (
            <motion.li
              key={index}
              className="flex justify-center items-center w-20"
              initial={{opacity: 0, y: -20}}
            >
              <NavItem
                previous={previous}
                current={current}
                prevRef={prevRef}
                curRef={curRef}
                sectionId={sectionId}
              />
            </motion.li>
          ))
        }
      </ul>
    </nav>
  )
}

export default Navbar;



