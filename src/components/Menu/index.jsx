import {
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import StyledMenu from "./styles";
import Icon from "../Icon";
import Link from "../Link";
import { MenuContext } from "../../context/menu"
import { useContext, useState } from "react"

export default function Menu() {
  const { display, setDisplay } = useContext(MenuContext)
  const [displayLevels, setDisplayLevels] = useState({
    second: "",
    third: ""
  })

  function handleDisplayMenu(event) {
    if (event.target.id === "menu") setDisplay("")
  }

  function handleDisplaySecondLevel(event) {
    const isOpen = displayLevels.second === "open" ? "" : "open"

    if (event.target.classList.contains("dropdown-toggle")) {
      setDisplayLevels(currentState => {
        return {
          ...currentState,
          second: isOpen
        }
      })
    }
  }

  function handleDisplayThirdLevel() {
    const isOpen = displayLevels.third === "open" ? "" : "open"

    setDisplayLevels(currentState => {
      return {
        ...currentState,
        third: isOpen
      }
    })
  }

  return (
    <StyledMenu
      className={display}
      onClick={event => handleDisplayMenu(event)}
      id="menu"
    >
      <ul>
        <li onClick={event => handleDisplaySecondLevel(event)}>
          <Link
            id="firstLevel"
            className="dropdown-toggle"
          >
            Home<Icon icon={faCaretDown} />
            <ul className={`dropdown-menu ${displayLevels.second}`}>
              <li>
                <Link className="dropdown-item" href="#">
                  Menu one
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="#">
                  Menu two
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="#">
                  Menu Three
                </Link>
              </li>
              <li className="submenu" onClick={handleDisplayThirdLevel}>
                <Link className="dropdown-item" href="#">
                  Submenu<Icon icon={faCaretDown} />
                </Link>
                <ul className={`dropdown-submenu ${displayLevels.third}`}>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Menu one
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Menu two
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Menu Three
                    </Link>
                  </li>
                </ul>
              </li>

            </ul>
          </Link>
        </li>
        <li>
          <Link className="dropdown-toggle">About <Icon icon={faCaretDown} />
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" href="#">
                  Menu one
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="#">
                  Menu two
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="#">
                  Menu Three
                </Link>
              </li>
            </ul>
          </Link>
        </li>
        <li>
          <Link>
            <a href="#">Shop</a>
          </Link>
        </li>
        <li>
          <Link>
            <a href="#">Catalogue</a>
          </Link>
        </li>
        <li>
          <Link>
            <a href="#">New Arrivals</a>
          </Link>
        </li>
        <li>
          <Link>
            <a href="#">Contact</a>
          </Link>
        </li>
      </ul>
    </StyledMenu>
  );
}