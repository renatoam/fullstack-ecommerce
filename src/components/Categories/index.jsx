import CardImage from "../CardImage";
import { categories } from "../../constants/categories";
import { StyledCategories } from "./styles"

export default function Categories() {
  return (
    <StyledCategories>
      {categories.map((item) => {
        return <CardImage key={item.title} label={item.title} src={item.src} href="#" />
      })}
    </StyledCategories>
  )
}
