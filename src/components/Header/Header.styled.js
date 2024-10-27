import styled from "styled-components";

export const HeaderContainer = styled.div`
  padding: 16px 64px;
  background: #F7F7F7;
  border-bottom: 1px solid #F2F4F7;
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
font-weight: 600;
`;

export const NavContainer = styled.nav`

`;

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


export const Text = styled.span`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 16px;




`;

export const FirstWord = styled(Text)`
  color: #101828;
`;

export const SecondWord = styled(Text)`
  color: #475467;
`;


