import About from '../components/About'
import Home from '../components/Home'
import Layout from '../components/Layout'
import { pageAnimation } from '../utils/animate'
function about() {
  return pageAnimation(<About />, 'about')
}

export default about
