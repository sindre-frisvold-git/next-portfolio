import { useRef } from 'react'
import projects from '../constants/projects'
import ProjectCard from './ProjectCard'
function Projects() {
  const projectScroll = useRef(null)
  const scrollStyle =
    'flex justify-center w-7 h-14 text-5xl text-slate-100 dark:text-gray-800 rounded-md bg-gray-800 dark:bg-slate-100 hover:bg-gray-600 dark:hover:bg-slate-300'

  // function scrollHandler(e) {
  //   console.log(e.deltaY)
  // }

  function scrollUp() {
    projectScroll.current.scrollTop -= 300
    console.log(projectScroll.current.scrollTop)
  }
  function scrollDown() {
    projectScroll.current.scrollTop += 300
    console.log(projectScroll.current.scrollTop)
  }
  return (
    <div className="md:flex justify-center md:w-3/4 tall">
      <div
        // onMouseDown={mouseDownHandler}
        ref={projectScroll}
        className="overflow-y-scroll tall md:w-full md:max-w-xl snap-parent scroll-smooth transparent-scroll border-x-2 border-solid border-gray-800 dark:border-slate-100 px-4"
        // onScroll={scrollHandler}
      >
        {projects.map((el, idx) => {
          return (
            <ProjectCard
              key={el.title + idx}
              title={el.title}
              tech={el.tech}
              img={el.img}
              description={el.description}
            />
          )
        })}
      </div>
      <div className="hidden md:flex md:flex-col justify-center gap-y-5 ml-2">
        <button onClick={scrollUp} className={scrollStyle}>
          <div>&uarr;</div>
        </button>
        <button onClick={scrollDown} className={scrollStyle}>
          <div>&darr;</div>
        </button>
      </div>
    </div>
  )
}

export default Projects
