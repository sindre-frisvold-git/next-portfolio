import Link from 'next/link'
import { codeWars, github, linkedIn, mail, svg, svgStyle } from '../utils/svg'

function SocialLinks({ style }) {
  return (
    <>
      <Link href={'https://github.com/sindre-frisvold-git'}>
        {github(style)}
      </Link>
      <Link href={'https://www.linkedin.com/in/sindre-frisvold-0ab29721a/'}>
        {linkedIn(style)}
      </Link>
      <Link href={'mailto:sinfr91@gmail.com'}>{mail(style)}</Link>
      <Link href={'https://www.codewars.com/users/Bokhylle'}>
        {codeWars(style)}
      </Link>
    </>
  )
}

export default SocialLinks
