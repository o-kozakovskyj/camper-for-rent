import {
  HeaderContainer,
  NavContainer,
  NavList,
  NavLogo,
  FirstWord,
  SecondWord,
  
} from "./Header.styled";

import { NavLink, Link, } from "react-router-dom";

const Header = () => {
  return (
    <HeaderContainer >
      <NavContainer>
        <NavLogo>
          <Link to={"/"}>
            {/* <img src={logo} alt="Your SVG" width="190px" height="40px" /> */}

            <FirstWord>Travel</FirstWord>
            <SecondWord>Truck</SecondWord>
          </Link>
        </NavLogo>
        <NavList>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/catalog"}>Catalog</NavLink>
          </li>
          {/* <li>
            <NavLink to={"/favorites"}>Favorites</NavLink>
          </li> */}
        </NavList>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;