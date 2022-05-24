import { AnimatePresence, motion } from 'framer-motion'
// animation presets
const pages = {
  visible: { opacity: 1, x: 0 },
  hiddenInit: { opacity: 0, x: -400 },
  hiddenEnd: { opacity: 0, x: 400, transition: '3' },
}
export const projects = {
  visible: { opacity: 1, x: 0, height: '10rem' },
  hiddenInit: { opacity: 0, x: -400, height: '10rem' },
  hiddenEnd: { opacity: 0, x: 400, transition: '3', height: '10rem' },
}

// animation wrappers
export function pageAnimation(element, key, optionalArgs) {
  return (
    <motion.div
      key={key}
      animate="visible"
      initial="hiddenInit"
      exit="hiddenEnd"
      variants={optionalArgs?.customAnimation || pages}
    >
      {element}
    </motion.div>
  )
}
