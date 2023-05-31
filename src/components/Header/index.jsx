
import { HeaderContainer, HeaderLogo, HeaderNav } from "./stylus";
import { useLocation} from "react-router-dom";
const Header = () => {
  const location = useLocation();
  return (
    <>
      <HeaderContainer>
        <HeaderLogo>Logo</HeaderLogo>
        <HeaderNav>
          <ul>
            <li>
              <a href="/" className={location.pathname === "/" ? "active" : ""}>
                Home
              </a>
            </li>
            <li>
              <a
                href="/salas"
                className={location.pathname === "/salas" ? "active" : ""}
              >
                Salas
              </a>
            </li>
            <li>
              <a
                href="/responsaveis"
                className={
                  location.pathname === "/responsaveis" ? "active" : ""
                }
              >
                Responsáveis
              </a>
            </li>
            <li>
              <a
                href="/eventos"
                className={location.pathname === "/eventos" ? "active" : ""}
              >
                Eventos
              </a>
            </li>
          </ul>
        </HeaderNav>
      </HeaderContainer>
    </>
  );
};

export default Header;
