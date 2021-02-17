import {
  faBars,
  faHeart,
  faSearch,
  faShoppingCart,
  faUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { StyledHeader } from "./styles";
import Icon from "../Icon";
import Menu from "../Menu"


export default function Header() {
  return (
    <StyledHeader>
      <div className="container">
        <section className="search">
          <Icon icon={faSearch} />
          <input type="search" name="search" id="search" placeholder="Search" />
        </section>
        <section>
          <h1>
            <a href="#">Lójia</a>
          </h1>
        </section>
        <section>
          <Icon icon={faUser} />
          <Icon icon={faHeart} />
          <Icon icon={faShoppingCart} count={2} />
          <Icon icon={faBars} />
        </section>
      </div>
      <Menu />
    </StyledHeader>
  )
}
