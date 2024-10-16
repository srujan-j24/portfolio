import {AnimatePresence, motion} from 'framer-motion';
import {useAnimateStore} from "../store/animateStore.ts";
import { quantum } from 'ldrs';
function Navbar() {
  quantum.register()
  const {navbar} = useAnimateStore();
  return navbar ? (
    <nav className="fixed flex justify-between top-0 h-16 w-screen z-10 px-8 sm:px-16 items-center backdrop-blur-xl">
      <h1 className="font-bold text-3xl text-gray-600 font-montserrat">
        <l-quantum
          size="30"
          speed="2"
          color="#4b5563"
        ></l-quantum>
      </h1>
      <ul className="sm:flex hidden  text-gray-600 text-xl font-medium h-full items-center justify-end ">
        {[['Home','About'], ['About', 'Skills'], ['Skills','Projects'],['Projects', 'Contact']].map((item, index) => (
          <AnimatePresence>
            {
              <motion.li
                className="px-8"
                key={item[1]}
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{type: 'spring', stiffness: 100, delay: 0.5 + index * 0.2}}
              >
                <h3 className="cursor-pointer ">{item[1]}</h3>
              </motion.li>
            }
          </AnimatePresence>
        ))}
      </ul>

    </nav>
  ) : null;
}

export default Navbar;