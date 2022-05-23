import { codeWars, github, linkedIn, mail, svg, svgStyle } from '../utils/svg'

function SocialLinks({ style }) {
  return (
    <>
      {github(style)}
      {linkedIn(style)}
      {mail(style)}
      {codeWars(style)}
    </>
  )
}

export default SocialLinks
