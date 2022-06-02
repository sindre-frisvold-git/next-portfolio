import Link from 'next/link'
import { darkMode } from '../utils/svg'

function Header() {
  function clickHandler(e) {
    e.preventDefault()
    document.documentElement.classList.toggle('dark')
  }
  const linkStyle =
    'hover:text-sky-500 hover:dark:text-green-400 transition duration-200'
  return (
    <nav className="pt-3">
      <div className="flex justify-end gap-10 mr-10 text-l md:text-3xl">
        {darkMode(
          'w-5 md:w-7 transition duration-200 fill-gray-800 dark:fill-slate-100 hover:fill-sky-500 hover:dark:fill-green-400 cursor-pointer',
          clickHandler
        )}
        <Link href="/projects">
          <a className={linkStyle}>Projects</a>
        </Link>
        <Link href="/about">
          <a className={linkStyle}>About</a>
        </Link>
        <Link href="/">
          <a className={linkStyle}>Home</a>
        </Link>
      </div>
    </nav>
  )
}
export default Header
