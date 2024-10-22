import {useAnimate, stagger} from 'framer-motion';
import { quantum } from 'ldrs';
import NavItem from "@/components/NavItem.tsx";
import {RefObject, useEffect, useState} from "react";
import {useAnimateStore} from "@/store/animateStore.ts";
function Navbar({sectionRefs}: {sectionRefs: RefObject<HTMLElement>[]}){
  const [scope, animate] = useAnimate();
  const {navbar} = useAnimateStore();
  quantum.register();
  const staggerNavItems = stagger(0.2, {startDelay: 1});
  const navBarAnimation = async () => {
    await animate(
      "li",
      navbar
        ? {opacity: 1, y: 0}
        : {opacity: 0, y: -20},
      {
        delay: navbar ? staggerNavItems : 0
      }
    )
    await animate(
      ".logo",
      navbar
        ? {scale: 1}
        : {scale: 0},
      {
        duration: navbar ? 0.5  : 0,
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
    <nav className="fixed flex justify-between top-0 h-16 w-screen z-10 px-8 sm:px-16 items-center backdrop-blur-xl Fnav" ref={scope}>
      <div className="logo scale-0" onClick={toggleLogoSpeed}>
        <l-quantum
          size="32"
          speed={logoSpeed}
          color="#4b5563"
        ></l-quantum>
      </div>
      <ul className="sm:flex hidden  gap-16 px-8 text-gray-600 text-xl font-medium font-montserrat h-full items-center justify-end">
        <li>
          <NavItem previous={'Home'} current={'About'} prevRef={sectionRefs[0]} curRef={sectionRefs[1]} sectionId={0}></NavItem>
        </li>
        <li>
          <NavItem previous={'About'} current={'Skills'} prevRef={sectionRefs[1]} curRef={sectionRefs[2]} sectionId={1}></NavItem>
        </li>
        <li>
          <NavItem previous={'Skills'} current={'Projects'} prevRef={sectionRefs[2]} curRef={sectionRefs[3]} sectionId={2}></NavItem>
        </li>
        <li>
          <NavItem previous={'Projects'} current={'Contact'} prevRef={sectionRefs[3]} curRef={sectionRefs[4]} sectionId={3}></NavItem>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;

