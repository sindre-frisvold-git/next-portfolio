import { github, linkedIn, mail, svg, svgStyle } from '../utils/svg'

function SocialLinks() {
  return (
    <div className="flex flex-col gap-2">
      {github(svgStyle)}
      {linkedIn(svgStyle)}
      {mail(svgStyle)}
    </div>
  )
}

export default SocialLinks
