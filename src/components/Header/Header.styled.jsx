import  {styled, Box } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
// export const HeaderContainer = styled.div`
//   padding: 16px 64px;
//   background: var(--inputs);
//   border-bottom: 1px solid var(--block-features);
// `;

// export const NavigationContainer = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
// `;
export const HeaderBtns = styled(Toolbar)`
  display: flex;
  gap: 16px;
`;
export const NavLogo = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
 
`;

// export const NavContainer = styled.nav``;

// export const NavList = styled.ul`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
//   gap: 32px;

//   & a {
//     padding: 14px 0;
//   }

//   & a.active {
//     color: var(--button);
//   }
// `;
