import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 250px;
  height: 100vh;
  background-color: blueviolet;
`;
export const HeaderLogo = styled.div`
  width: 100%;
  color: white;
  text-transform: uppercase;
  text-align: center;
  font-size: 32px;
  line-height: 60px;
`;

export const HeaderNav = styled.nav`
  border: 1px solid red;
  margin-top: 26px;
  padding: 0 16px;

  & li a {
    display: block;
    line-height: 46px;
    color: white;
    border-radius: 5px;
    padding: 0 16px;
  }

  & li a.active {

    
  }
`;
