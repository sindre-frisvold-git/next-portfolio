import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { projectSvg } from '../utils/svg'

export default function ProjectCard({ title, tech, img, description }) {
  const [active, setActive] = useState(false)
  function hoverHandler() {
    setActive(true)
  }
  function leaveHandler() {
    setActive(false)
  }
  return (
    // <Link>
    <div className="h-60 max-w-md relative rounded-md my-1 md:w-72 dark:bg-gray-700 overflow-hidden scroll-mt-9 mt-9 mb-9 snap-child mx-auto border-solid border-slate-300 dark:border-gray-700">
      <div className="absolute h-full w-full">
        <Image
          layout="fill"
          objectFit="contain"
          draggable="false"
          className="h-full w-full saturate-50"
          src={img}
          alt="project image"
        ></Image>
      </div>
      <Link href={active ? title.toLowerCase() : ''}>
        <div
          onMouseOver={hoverHandler}
          onMouseLeave={leaveHandler}
          onFocus={hoverHandler}
          onBlur={leaveHandler}
          className={`bg-gray-800 dark:bg-slate-100 text-slate-100 dark:text-gray-800 absolute w-full h-full opacity-90 top-52 hover:top-10 transition-all duration-200 text-left px-2 pt-0.5 text-xl ${
            active ? 'cursor-pointer' : ''
          }`}
        >
          <p>{title}</p>
          <p className="italic text-center justify mt-4">{description}</p>
          <div className="absolute bottom-0 flex gap-2 pb-12 justify-center w-full">
            {tech?.map((el) => (
              <span key={el.name}>{el(projectSvg)}</span>
            ))}
          </div>
        </div>
      </Link>
    </div>
    // </Link>
  )
}
