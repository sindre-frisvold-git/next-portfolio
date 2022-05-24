import projects from '../constants/projects'
import ProjectCard from './ProjectCard'
function Projects() {
  return (
    <div className="overflow-y-scroll max-h-80 gap-y-11">
      {projects.map((el) => {
        return <ProjectCard key={el.title} title={el.title} tech={el.tech} />
      })}
    </div>
  )
}

export default Projects
