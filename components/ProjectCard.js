import Link from 'next/link'

export default function ProjectCard({ title }) {
  return (
    <Link href="about">
      <div className="h-24 bg-red-100">{title}</div>
    </Link>
  )
}
