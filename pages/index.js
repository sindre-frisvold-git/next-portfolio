import Layout from '../components/Layout'

function Home() {
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
          <button className="bg-sky-300 dark:bg-green-400 hover:bg-sky-400 dark:hover:bg-green-300 dark:text-gray-800 hover:scale-105 duration-75 rounded px-2 py-1 mt-2">
            About me.
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default Home
