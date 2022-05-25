import { useRouter } from 'next/router'
import projects from '../constants/projects'

export default function ProjectPage() {
  const router = useRouter()
  const project = projects.find(
    (el) => el?.title.toLowerCase() === router.route.slice(1).toLowerCase()
  )
  // console.log(project)
  return (
    <div className="overflow-y-scroll text-justify px-4 space-y-3 leading-7 overflow-y-scroll h-72 md:h-96 md:w-3/4 transparent-scroll py-7 text-xl border-gray-800 dark:border-slate-100 border-x-2 border-solid">
      <h2 className="text-2xl">{project?.title}</h2>
      <p className="italic text-lg">{project?.description}</p>
      {project?.para?.map((el, idx) => (
        <p key={el[0] + idx}>{el}</p>
      ))}
    </div>
  )
}
