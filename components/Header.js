import Link from 'next/link'
import { darkMode } from '../utils/svg'

function Header() {
  function clickHandler(e) {
    e.preventDefault()
    document.documentElement.classList.toggle('dark')
  }
  return (
    <nav className="pt-3">
      <div className="flex justify-end gap-10 mr-10 text-l md:text-3xl">
        {darkMode(
          'w-5 md:w-7 transition duration-200 fill-gray-800 dark:fill-slate-100 cursor-pointer',
          clickHandler
        )}
        <Link href="/projects">
          <a>Projects</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
    </nav>
  )
}
export default Header
