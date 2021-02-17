import Link from "../Link"
import { StyledFigure } from "./styles"

export default function CardImage(props) {
  const { href, src, label } = props

  return (
    <StyledFigure>
      <Link href={href}>
        <img
          src={src}
          alt={label}
        />
        <div className="cover">{label}</div>
      </Link>
    </StyledFigure>
  )
}
