import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const letterVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.05
    }
  },
};
function StaggerLetters({word, onComplete}: {word: string, onComplete: () => void}) {
  const letters = word.split("");
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      onAnimationComplete={onComplete}
    >
      {
        letters.map((letter, i) => (
          <motion.span
            key={i}
            variants={letterVariants}
          >{letter}</motion.span>
        ))
      }
    </motion.div>
  );
}

export default StaggerLetters;