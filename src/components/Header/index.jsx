import { useContext } from "react"
import {
  faHeart,
  faSearch,
  faShoppingCart,
  faUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import StyledHeader from "./styles";
import Icon from "../Icon";
import { MenuContext } from "../../context/menu"

export default function Header() {
  const { setDisplay } = useContext(MenuContext)

  function handleDisplay() {
    setDisplay("open")
  }

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
          <div className="menu" onClick={handleDisplay} >
            <Icon icon={faBars} />
          </div>
        </section>
      </div>
    </StyledHeader>
  );
}
