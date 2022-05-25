import Image from 'next/image'
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
      <Link href={project?.link || ''}>
        <p className="sticky -top-10 cursor-pointer text-2xl">
          Link to project
        </p>
      </Link>
      <div className="overflow-y-scroll relative text-justify px-4 space-y-3 leading-7 overflow-y-scroll h-72 md:h-96 md:w-3/4 transparent-scroll py-7 text-2xl border-gray-800 dark:border-slate-100 border-x-2 border-solid">
        <div className="absolute w-full h-20 left-0 -z-10 opacity-80 px-3 overflow-hidden">
          <img
            layout="fill"
            objectFit="contain"
            draggable="false"
            className="w-full saturate-50"
            src={project?.img}
            alt="project image"
          ></img>
        </div>
        <h2 className="text-2xl pt-20">{project?.title}</h2>
        <p className="italic text-lg">{project?.description}</p>
        {project?.para?.map((el, idx) => (
          <p key={el[0] + idx}>{el}</p>
        ))}
        {project?.challenge && <h3 className="text-2xl">Challenges</h3>}
        {project?.challenge?.map((el, idx) => (
          <p key={'c' + el[0] + idx}>{el}</p>
        ))}
      </div>
    </>
  )
}
