import {useRef} from "react";
import {ScrollArea, ScrollBar} from "./components/ui/scroll-area.tsx";
import Navbar from "./components/Navbar.tsx";
import {RefObject} from "react";
import Hero from "./components/Hero.tsx";
import About from "@/components/About.tsx";
import Section from "@/components/Section.tsx";
import Skills from "@/components/Skills.tsx";
import Projects from "@/components/Projects.tsx";
import Contact from "@/components/Contact.tsx";

function App() {
  const sectionRefs: Array<RefObject<any>>  = Array.from({length: 5}, () => useRef(null));
  const sections = [
    { id: 0, component: <Hero />, inDev: false },
    { id: 1, component: <About /> , inDev: false },
    { id: 2, component: <Skills /> , inDev: false},
    { id: 3, component: <Projects />, inDev: true },
    { id: 4, component: <Contact />, inDev: true}
  ]
  return (
    <>
      <ScrollArea className="h-screen">
        <Navbar sectionRefs={sectionRefs}/>
        {
          sections.map((section, index) => (
            <Section key={section.id} sectionId={section.id} ref={sectionRefs[index]} inDev={section.inDev}>
              {section.component}
            </Section>
          ))
        }
        <ScrollBar className="z-50 absolute"/>
      </ScrollArea>
    </>
  )
}

export default App