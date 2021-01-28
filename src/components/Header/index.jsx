import {
  faHeart,
  faSearch,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { StyledHeader } from "./style";
import Icon from "../Icon";

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
        </section>
      </div>
    </StyledHeader>
  );
}
