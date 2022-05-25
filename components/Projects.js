import projects from '../constants/projects'
import ProjectCard from './ProjectCard'
function Projects() {
  return (
    <div className="overflow-y-scroll max-h-96 snap-parent scroll-smooth">
      {projects.map((el) => {
        return <ProjectCard key={el.title} title={el.title} tech={el.tech} />
      })}
    </div>
  )
}

export default Projects
