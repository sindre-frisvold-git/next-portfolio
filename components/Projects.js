import { motion } from 'framer-motion'
import { useRef } from 'react'
import projects from '../constants/projects'
import ProjectCard from './ProjectCard'
function Projects() {
  const projectScroll = useRef(null)

  function scrollHandler(e) {
    console.log(e.deltaY)
  }

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
        className="overflow-y-scroll max-h-96 snap-parent scroll-smooth transparent-scroll"
        onScroll={scrollHandler}
      >
        {projects.map((el, idx) => {
          return (
            <ProjectCard key={el.title + idx} title={el.title} tech={el.tech} />
          )
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
