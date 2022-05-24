import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import SocialLinks from '../components/SocialLinks'
import { pageAnimation, projects } from '../utils/animate'
import { useIsMedium, useIsSmall } from '../utils/hooks'

function Home({ children, isMedium }) {
  const router = useRouter()
  const [routeStyle, setRouteStyle] = useState('')
  const [routeAnimation, setRouteAnimation] = useState({
    customAnimation: null,
  })
  const svgStyle =
    'w-5 transition duration-100 hover:scale-105 fill-gray-800 dark:fill-slate-100 hover:fill-sky-500 hover:dark:fill-green-400'
  useEffect(() => {
    console.log('md', isMedium)
    switch (router.route) {
      case '/projects':
        setRouteAnimation({ customAnimation: projects })
        setRouteStyle('')
        return
      default:
        setRouteStyle('')
        setRouteAnimation(null)
        return
    }
  }, [])
  function clickHandler(e) {
    e.preventDefault()
    router.push('about', undefined, { shallow: true })
  }

  return (
    <div className="grid place-items-center h-screen grid-cols-1 grid-rows-4 md:grid-cols-2">
      <div></div>
      <div className="hidden md:block"></div>
      <div className="hero max-w-md ">
        <p className="text-3xl md:text-4xl before:bg-red-300">
          Hi, I&apos;m Sindre.
        </p>
        <p className="text-lg md:text-xl">Full-Stack Software Developer</p>
        <button
          onClick={clickHandler}
          className="transition bg-sky-300 dark:bg-green-400 hover:bg-sky-400 dark:hover:bg-green-300 dark:text-gray-800 duration-400 rounded px-2 py-1 mt-2"
        >
          Get in Touch
        </button>
        <div className="absolute right-5 top-10 md:bottom-10 flex md:flex-col gap-5">
          <SocialLinks style={svgStyle} />
        </div>
      </div>
      <div
        id="content"
        className={`w-full px-1 text-center md:col-start-2 md:row-start-2 ${routeStyle}`}
      >
        <AnimatePresence exitBeforeEnter>
          {pageAnimation(children, router.route)}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Home
