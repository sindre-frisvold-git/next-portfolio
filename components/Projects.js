import projects from '../constants/projects'
import ProjectCard from './ProjectCard'
function Projects() {
  return (
    <div className="overflow-y-scroll max-h-10">
      {projects.map((el) => {
        return <ProjectCard key={el.title} title={el.title} />
      })}
    </div>
  )
}

export default Projects
