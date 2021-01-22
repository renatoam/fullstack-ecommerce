import CardImage from "../CardImage";
import { categories } from "../../constants";

export default function Categories() {
  return (
    <section className="categories">
      {categories.map(function (item) {
        return <CardImage key={item.title} label={item.title} src={item.src} href="#" />
      })}
    </section>
  )
}