import NextLink from "next/link"
import { StyledLink } from "./styles"

export default function Link(props) {
  const { className, children, href, ...rest } = props

  return (
    <NextLink href={"#"} {...rest}>
      <StyledLink className={className}>
        {children}
      </StyledLink>
    </NextLink>
  )
}