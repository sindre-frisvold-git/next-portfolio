import Link from 'next/link'

export default function ProjectCard({ title, tech }) {
  return (
    // <Link>
    <div className="h-60 w-full relative rounded-md my-1 md:w-3/5 bg-red-100 dark:bg-gray-700 overflow-hidden scroll-mt-9 mt-9 mb-9  snap-child">
      <div className="absolute h-full w-full">
        <img
          className="h-full w-full"
          src="/github.png"
          alt="project image"
        ></img>
      </div>
      <div className="bg-gray-200 dark:bg-slate-700 absolute w-full h-full rounded-md opacity-50 top-52 hover:top-20 transition-all duration-200">
        <p>{title}</p>
        <div className="absolute bottom-0 flex gap-2 mx-auto justify-center w-full">
          {tech?.map((el) => el())}
        </div>
      </div>
    </div>
    // </Link>
  )
}
