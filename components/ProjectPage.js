import Link from 'next/link'
import { useRouter } from 'next/router'
import projects from '../constants/projects'

export default function ProjectPage() {
  const router = useRouter()
  const project = projects.find(
    (el) => el?.title.toLowerCase() === router.route.slice(1).toLowerCase()
  )
  // console.log(project)
  return (
    <>
      <div className="md:w-3/4 md:relative">
        <Link href="/projects">
          <div className="md:absolute text-xl p-2 md:px-1 cursor-pointer hover:text-sky-500 hover:dark:text-green-400 transition duration-200">
            Return to Projects
          </div>
        </Link>
        <div className="flex justify-center gap-8">
          <Link href={project?.link || ''}>
            <span className="sticky -top-10 cursor-pointer text-2xl hover:text-sky-500 hover:dark:text-green-400 transition duration-200">
              Link to project
            </span>
          </Link>
          <Link href={project?.repo || ''}>
            <span className="sticky -top-10 cursor-pointer text-2xl hover:text-sky-500 hover:dark:text-green-400 transition duration-200">
              Link to repo
            </span>
          </Link>
        </div>
        <div className="overflow-y-scroll relative text-justify px-4 space-y-3 leading-7 overflow-y-scroll h-72 md:h-full tall md:w-full transparent-scroll py-8 text-2xl border-gray-800 dark:border-slate-100 border-x-2 border-solid">
          <div className=" w-full h-40 md:h-96 left-0 -z-10 opacity-80 px-3 overflow-hidden">
            <img
              layout="fill"
              draggable="false"
              className="w-full saturate-50"
              src={project?.img}
              alt="project image"
            ></img>
          </div>
          <h2 className="text-2xl ">{project?.title}</h2>
          <p className="italic text-lg">{project?.description}</p>
          {project?.para?.map((el, idx) => (
            <p className="text-xl md:text-2xl" key={el[0] + idx}>
              {el}
            </p>
          ))}
          {project?.challenge && <h3 className="text-2xl">Challenges</h3>}
          {project?.challenge?.map((el, idx) => (
            <p className="text-xl md:text-2xl" key={'c' + el[0] + idx}>
              {el}
            </p>
          ))}
        </div>
      </div>
    </>
  )
}
