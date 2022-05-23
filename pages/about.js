import About from '../components/About'
import Home from '../components/Home'
import Layout from '../components/Layout'
function about() {
  return (
    <Layout>
      <Home>
        <About />
      </Home>
    </Layout>
  )
}

export default about
