import Link from 'next/link'

function Header() {
  return (
    <nav className="hover:bg-gray-200">
      <div className="flex justify-between">
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
