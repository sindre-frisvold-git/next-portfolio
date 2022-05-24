import Link from 'next/link'

export default function ProjectCard({ title, tech }) {
  return (
    <Link href="about">
      <div className="h-60 w-full relative rounded-md my-1 md:w-3/5 bg-red-100 dark:bg-gray-700">
        <div className="absolute h-full w-full">
          <img
            className="h-full w-full"
            src="/github.png"
            alt="project image"
          ></img>
        </div>
        <div className="bg-gray-200 dark:bg-slate-700 absolute w-full h-full rounded-md opacity-0 hover:opacity-100 transition duration-200">
          <p>{title}</p>
          {tech?.map((el) => el)}
        </div>
      </div>
    </Link>
  )
}
