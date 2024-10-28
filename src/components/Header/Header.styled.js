import styled from "styled-components";

export const HeaderContainer = styled.div`
  padding: 16px 64px;
  background: var(--inputs);
  border-bottom: 1px solid var(--block-features);
`;

export const NavigationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const NavLogo = styled.div`
  position: absolute;
  align-items: center;
  justify-content: center;
`;

export const NavContainer = styled.nav``;

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 32px;

  & a {
    padding: 14px 0;
  }

  & a.active {
    color: var(--button);
  }
`;
