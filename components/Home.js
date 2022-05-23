import { useRouter } from 'next/router'
import About from '../components/About'
import Layout from '../components/Layout'
import SocialLinks from '../components/SocialLinks'
import { github } from '../utils/svg'
function Home({ children }) {
  const router = useRouter()
  const svgStyle =
    'w-5 transition duration-100 hover:scale-105 fill-gray-800 dark:fill-slate-100 hover:fill-gray-500 hover:dark:fill-green-400'
  function clickHandler(e) {
    e.preventDefault()
    router.push('/about', undefined, { shallow: true })
  }
  return (
    <div className="grid place-items-center h-screen grid-cols-1 grid-rows-4 md:grid-cols-2">
      <div></div>
      <div className="hidden md:block"></div>
      <div className="hero max-w-md ">
        <p className="text-3xl md:text-4xl before:bg-red-300">
          Hi, I'm Sindre.
        </p>
        <p className="text-lg md:text-xl">Full-Stack Software Developer</p>
        <button
          onClick={clickHandler}
          className="transition bg-sky-300 dark:bg-green-400 hover:bg-sky-400 dark:hover:bg-green-300 dark:text-gray-800 duration-400 rounded px-2 py-1 mt-2"
        >
          Get in Touch
        </button>
        <div className="absolute left-5 bottom-10 flex flex-col gap-2">
          <SocialLinks style={svgStyle} />
        </div>
      </div>
      <div id="content">{children}</div>
    </div>
  )
}

export default Home