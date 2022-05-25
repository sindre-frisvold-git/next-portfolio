import { motion } from 'framer-motion'
import { useRef } from 'react'
import projects from '../constants/projects'
import ProjectCard from './ProjectCard'
function Projects() {
  // const projectScroll = useRef(null)
  // let pos = { top: 0, left: 0, x: 0, y: 0 }
  // console.log(projectScroll)
  // const mouseDownHandler = function (e) {
  //   pos = {
  //     // The current scroll
  //     // left: projectScroll.current.scrollLeft,
  //     top: projectScroll.current.scrollTop,
  //     // Get the current mouse position
  //     // x: e.clientX,
  //     y: e.clientY,
  //   }
  //   document.addEventListener('mousemove', mouseMoveHandler)
  //   document.addEventListener('mouseup', mouseUpHandler)
  // }
  // const mouseUpHandler = function () {
  //   document.removeEventListener('mousemove', mouseMoveHandler)
  //   document.removeEventListener('mouseup', mouseUpHandler)
  //   console.log('yas')
  // }
  // const mouseMoveHandler = function (e) {
  //   // How far the mouse has been moved
  //   // const dx = e.clientX - pos.x
  //   const dy = e.clientY - pos.y

  //   // Scroll the element
  //   projectScroll.current.scrollTop = pos.top - dy
  //   // console.log(pos.top)
  //   // console.log(e.clientY)
  //   // projectScroll.scrollLeft = pos.left - dx
  // }

  return (
    <motion.div>
      <div
        onMouseDown={mouseDownHandler}
        ref={projectScroll}
        className="overflow-y-scroll max-h-96 snap-parent scroll-smooth "
      >
        {projects.map((el) => {
          return <ProjectCard key={el.title} title={el.title} tech={el.tech} />
        })}
      </div>
    </motion.div>
  )
}

export default Projects
