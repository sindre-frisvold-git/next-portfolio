import { AnimatePresence, motion } from 'framer-motion'
// animation presets
const pages = {
  visible: { opacity: 1, x: 0 },
  hiddenInit: { opacity: 0, x: -400 },
  hiddenEnd: { opacity: 0, x: 200 },
}

// animation wrappers
export function pageAnimation(element, key, mediaQuery = null) {
  return (
    <motion.div
      key={key}
      animate="visible"
      initial="hiddenInit"
      exit="hiddenEnd"
      transition={{ duration: 1, ease: 'easeIn' }}
      variants={pages}
    >
      {element}
    </motion.div>
  )
}
