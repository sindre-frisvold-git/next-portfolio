import Layout from '../components/Layout'

function Home() {
  return (
    <Layout>
      <div className="grid place-items-center h-screen grid-cols-1 grid-rows-4">
        <div></div>
        <div className="hero max-w-md order-2">
          <p className="text-4xl">Hi, I'm Sindre</p>
          <p className="text-xl">Full-Stack Software Developer.</p>
          <button className="bg-green-400 hover:bg-teal-200 hover:scale-105 duration-75 rounded px-2 py-1 mt-2">
            About me.
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default Home
