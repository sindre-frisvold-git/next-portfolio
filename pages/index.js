import Layout from '../components/Layout'
import { github, linkedIn, svg } from '../utils/svg'
function Home() {
  const svgStyle =
    'w-5 transition hover:scale-105 duration-200 fill-gray-800 dark:fill-slate-100 hover:fill-gray-500 hover:dark:fill-green-400'
  return (
    <Layout>
      <div className="grid place-items-center h-screen grid-cols-1 grid-rows-4 md:grid-cols-2">
        <div></div>
        <div className="hidden md:block"></div>
        <div className="hero max-w-md order-2">
          <p className="text-3xl md:text-4xl before:bg-red-300">
            Hi, I'm Sindre.
          </p>
          <p className="text-lg md:text-xl">Full-Stack Software Developer</p>
          <button className="transition bg-sky-300 dark:bg-green-400 hover:bg-sky-400 dark:hover:bg-green-300 dark:text-gray-800 hover:scale-105 duration-200 rounded px-2 py-1 mt-2">
            About me.
          </button>
          {github(svgStyle)}
          {linkedIn(svgStyle)}
        </div>
      </div>
    </Layout>
  )
}

export default Home
