import NextLink from "next/link"
import { StyledLink } from "./styles"

export default function Link(props) {
  const { children, href, ...rest } = props

  return (
    <NextLink href={"#"} {...rest}>
      <StyledLink>
        {children}
      </StyledLink>
    </NextLink>
  )
}