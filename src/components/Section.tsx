import {ReactNode, useEffect, Ref, forwardRef} from "react";
import {useInView} from "framer-motion";
import {useAnimateStore} from "@/store/animateStore.ts";

interface SectionProps {
  sectionId: number;
  className?: string;
  children: ReactNode;
  inDev?: boolean
}


const Section = forwardRef<HTMLElement, SectionProps>(({sectionId, className="", children, inDev=false}: SectionProps,ref: Ref<HTMLElement>) => {
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
      className={`${className} relative`}
    >
      {
        inDev &&
        <div className="absolute z-50 top-0 bg-opacity-75 left-0 h-screen w-screen bg-gray-400 flex items-center justify-center text-3xl">
            This Section is still in still in development
        </div>
      }
      {children}
    </section>
  );
})

export default Section;