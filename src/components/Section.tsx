import {ReactNode, useEffect, Ref, forwardRef} from "react";
import {useInView} from "framer-motion";
import {useAnimateStore} from "@/store/animateStore.ts";

interface SectionProps {
  sectionId: number;
  className?: string;
  children: ReactNode
}

const Section = forwardRef<HTMLElement, SectionProps>(({sectionId, className="", children}: SectionProps,ref: Ref<HTMLElement>) => {
  const {setSectionId} = useAnimateStore();
  // @ts-ignore
  const isInView = useInView(ref, {amount: 0.5});
  useEffect(()=>{
    if(isInView){
      setSectionId(sectionId);
    }
  },[isInView, sectionId, ] )
  return (
    <section
      ref={ref}
      className={className}
    >
      {children}
    </section>
  );
})

export default Section;