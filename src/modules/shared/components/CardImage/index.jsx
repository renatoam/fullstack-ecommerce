import Link from 'next/link'
import { StyledFigure } from "./styles"

export default function CardImage(props) {
  const { href, src, label } = props

  return (
    <StyledFigure>
      <Link href={href}>
        <a>
          <img
            src={src}
            alt={label}
          />
          <div className="cover">{label}</div>
        </a>
      </Link>
    </StyledFigure>
  )
}