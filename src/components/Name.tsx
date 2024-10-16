import { motion } from "framer-motion";

const letters = "Srujan J".split("");

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const letterVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    x: i % 2 === 0 ? -1000 : 1000,
    y: i % 2 === 0 ? -500 : 500,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { type: "spring", stiffness: 150, damping: 12 },
  },
};

function Name() {
  return (
    <motion.div
      className="text-6xl sm:text-9xl font-archivoBlack text-gray-800"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, i) => (
        <motion.span key={i} custom={i} variants={letterVariants}   >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
}

export default Name;