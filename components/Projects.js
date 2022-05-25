import { motion } from 'framer-motion'
import { useRef } from 'react'
import projects from '../constants/projects'
import ProjectCard from './ProjectCard'
function Projects() {
  const projectScroll = useRef(null)
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
  function scrollUp() {
    projectScroll.current.scrollTop -= 150
    console.log(projectScroll.current.scrollTop)
  }
  function scrollDown() {
    projectScroll.current.scrollTop += 150
    console.log(projectScroll.current.scrollTop)
  }
  return (
    <div className="md:flex justify-center">
      <div
        // onMouseDown={mouseDownHandler}
        ref={projectScroll}
        className="overflow-y-scroll max-h-96 snap-parent scroll-smooth "
      >
        {projects.map((el) => {
          return <ProjectCard key={el.title} title={el.title} tech={el.tech} />
        })}
      </div>
      <div className="hidden md:flex md:flex-col justify-center gap-y-5 ml-2">
        <button
          className="flex justify-center w-5 h-10 text-3xl text-gray-800 rounded-md bg-sky-300 dark:bg-green-400 hover:bg-sky-400 dark:hover:bg-green-300"
          onClick={scrollUp}
        >
          <div>&uarr;</div>
        </button>
        <button
          className="flex justify-center w-5 h-10 text-3xl text-gray-800 rounded-md bg-sky-300 dark:bg-green-400 hover:bg-sky-400 dark:hover:bg-green-300"
          onClick={scrollDown}
        >
          <div>&darr;</div>
        </button>
      </div>
    </div>
  )
}

export default Projects
