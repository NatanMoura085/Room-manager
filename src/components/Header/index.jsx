import { HeaderContainer, HeaderLogo,HeaderNav } from "./stylus";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderLogo>Logo</HeaderLogo>
        <HeaderNav>
          <ul>
            <li>
              <a href="/" className="active">Home</a>
            </li>
            <li>
              <a href="/salas">Salas</a>
            </li>
            <li>
              <a href="/responsaveis">Responsáveis</a>
            </li>
            <li>
              <a href="/eventos">Eventos</a>
            </li>
          </ul>
        </HeaderNav>
      </HeaderContainer>
    </>
  );
};

export default Header;
