import Layout from '../components/Layout'
import Projects from '../components/Projects'
import { pageAnimation } from '../utils/animate'

function projects() {
  return pageAnimation(<Projects />, 'projects')
}

export default projects
