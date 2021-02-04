import {
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import StyledMenu from "./styles";
import Icon from "../Icon";
import Link from "../Link";
import { MenuContext } from "../../context/menu"
import { useContext } from "react"

export default function Menu() {
  const { display, setDisplay } = useContext(MenuContext)

  function handleDisplay(event) {
    event.persist()
    event.stopPropagation()
    setDisplay("")
  }

  return (
    <StyledMenu className={display} onClick={event => handleDisplay(event)}>
      <nav>
        <ul>
          <Link>Home <Icon icon={faCaretDown} /></Link>
          <Link>About <Icon icon={faCaretDown} /></Link>
          <Link>Shop</Link>
          <Link>Catalogue</Link>
          <Link>New Arrivals</Link>
          <Link>Contact</Link>
        </ul>
      </nav>
    </StyledMenu>
  );
}