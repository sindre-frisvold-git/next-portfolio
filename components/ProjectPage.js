import { useRouter } from 'next/router'
import projects from '../constants/projects'

export default function ProjectPage() {
  const router = useRouter()
  const project = projects.find(
    (el) => el.title.toLowerCase() === router.route.slice(1).toLowerCase()
  )
  console.log(project)
  return <h2></h2>
}
