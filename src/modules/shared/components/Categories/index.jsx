import CardImage from "../CardImage";
import { categories } from "../../constants";
import { StyledCategories } from "./styles"

export default function Categories() {
  return (
    <StyledCategories>
      {categories.map(function (item) {
        return <CardImage key={item.title} label={item.title} src={item.src} href="#" />
      })}
    </StyledCategories>
  )
}