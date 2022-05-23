import Link from 'next/link'
import { useState } from 'react'

function Header({ theme, setTheme }) {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false)
  function clickHandler(e) {
    e.preventDefault()
    // if (theme === 'dark') setTheme('light')
    // else setTheme('dark')
    if (darkModeEnabled) {
      setDarkModeEnabled(false)
      document.documentElement.classList.remove('dark')
    } else {
      setDarkModeEnabled(true)
      document.documentElement.classList.add('dark')
    }
  }
  return (
    <nav className="">
      <div className="flex justify-between">
        <button onClick={clickHandler}>Theme</button>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="about">
          <a>About</a>
        </Link>
        <Link href="projects">
          <a>Projects</a>
        </Link>
      </div>
    </nav>
  )
}
export default Header
