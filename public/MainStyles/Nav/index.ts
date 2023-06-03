import styled from "styled-components";

export const NavBar = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #202024;
  width: 100%;
  height: 60px;
  color: white;
`;

export const NavLogo = styled.h1`
  // default styles
`;

export const NavLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;
