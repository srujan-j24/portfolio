import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import {ScrollArea, ScrollBar} from "./components/ui/scroll-area.tsx";
import About from "@/components/About.tsx";
import Section from "@/components/Section.tsx";
import {useRef} from "react";
import Skills from "@/components/Skills.tsx";

function App() {
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
  return (
    <>
      <ScrollArea className="h-screen">
        <Navbar sectionRefs={sectionRefs}/>
        <Section sectionId={0} ref={sectionRefs[0]}>
          <Hero/>
        </Section>
        <Section sectionId={1} ref={sectionRefs[1]}>
          <About/>
        </Section>
        <Section sectionId={2} ref={sectionRefs[2]}>
          <Skills/>
        </Section>
        <Section sectionId={3} className={"bg-purple-200"} ref={sectionRefs[3]}>
          <About/>
        </Section>
        <Section sectionId={4} className={"bg-gray-400"} ref={sectionRefs[4]}>
          <About/>
        </Section>
        <ScrollBar className="z-50 absolute"/>
      </ScrollArea>
    </>
  )
}

export default App
/*

if CHAI > COFFEE:
  letHangOut()

TABS over SPACES

ATHEIST => ME => AGNOSTIC









*/