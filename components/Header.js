import Link from 'next/link'
import { doc } from 'prettier'
import { useState } from 'react'
import { darkMode, svgStyle } from '../utils/svg'

function Header() {
  function clickHandler(e) {
    e.preventDefault()
    document.documentElement.classList.toggle('dark')
  }
  return (
    <nav className="pt-3">
      <div className="flex justify-end gap-10 mr-10 text-l">
        {darkMode(
          'w-5 transition duration-200 fill-gray-800 dark:fill-slate-100 cursor-pointer',
          clickHandler
        )}
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
      </div>
    </nav>
  )
}
export default Header
