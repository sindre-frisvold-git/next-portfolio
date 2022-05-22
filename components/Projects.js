import projects from '../constants/projects'
function Projects() {
  return (
    <div>
      {projects.map((el) => {
        return <span key={el.title}>{el.title}</span>
      })}
    </div>
  )
}

export default Projects
