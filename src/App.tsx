import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import {ScrollArea, ScrollBar} from "./components/ui/scroll-area.tsx";
import About from "@/components/About.tsx";

function App() {

  return (
    <>
      <ScrollArea className="h-screen">
        <Navbar/>
        <Hero/>
        <About/>
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