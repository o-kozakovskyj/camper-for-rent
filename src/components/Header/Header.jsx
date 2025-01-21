import {
  HeaderContainer,
  NavContainer,
  NavList,
  NavLogo,
} from "./Header.styled";
import logo from "../../assets/svg/logo.svg";

import { NavLink, Link } from "react-router-dom";
import { Switch } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectMode } from "../../redux/filters/selectors";
import {
  changeFiltersAction,
  changeModeActions,
} from "../../redux/filters/filterSlice";

const Header = () => {
  const dispatch = useDispatch();
  const handleTheme = (e) => {
    e.target.checked
      ? dispatch(changeModeActions("dark"))
      : dispatch(changeModeActions("light"));
  };
  return (
    <HeaderContainer>
      <NavContainer>
        <NavLogo>
          <Link to={"/"}>
            <img src={logo} alt="Your SVG" width="112px" />
          </Link>
        </NavLogo>
        <NavList>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/catalog"}>Catalog</NavLink>
          </li>
        </NavList>
      </NavContainer>
      <Switch onChange={handleTheme} />
    </HeaderContainer>
  );
};

export default Header;
