import {motion} from 'framer-motion'
function SkillCard({pos, imgPath, transition}: {pos: number, imgPath: string, transition: object}): JSX.Element {
  return (
    <motion.div
      className="relative h-full w-full sm:rounded-3xl border-2 sm:p-4 sm: rounded-xl p-2 border-gray-900 flex items-center justify-center "
      initial={{
        opacity: pos / 3,
      }}
      animate={{
        opacity: pos / 3,
      }}
      transition={transition}
    >
      <div className="grid sm:grid-cols-[1fr_1fr] sm:grid-rows-1 grid-cols-1 grid-rows-[1fr_2fr] gap-2 h-full w-full border-2 border-gray-700">
        <div className="flex items-center justify-center h-full w-full overflow-hidden ">
          <div className="h-1/2 aspect-square relative">
            <img src={imgPath} alt="" className="h-full w-full shadow-reflect"/>
          </div>
        </div>
        <div>
          df
        </div>
      </div>
    </motion.div>
  );
}

export default SkillCard;