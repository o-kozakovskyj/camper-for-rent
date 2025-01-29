import * as Styled from "./Header.styled"
import logo from "../../assets/svg/logo.svg";

import { Link } from "react-router-dom";
import { AppBar, Button, Switch, Toolbar } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  changeModeActions,
} from "../../redux/filters/filterSlice";
import { ButtonGeneral } from "../ButtonGeneral/ButtonGeneral";

const Header = () => {
  const dispatch = useDispatch();
  const handleTheme = (e) => {
    e.target.checked
      ? dispatch(changeModeActions("dark"))
      : dispatch(changeModeActions("light"));
  };
  return (
    <AppBar>
      <Toolbar>
        <Styled.NavLogo>
          <Link to={"/"}>
            <img src={logo} alt="Your SVG" width="112px" />
          </Link>
        </Styled.NavLogo>
        <Button component={Link} to="/">
          Home
        </Button>
        <Button component={Link} to="/catalog">
          Catalogue
        </Button>
        <Switch onChange={handleTheme} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
