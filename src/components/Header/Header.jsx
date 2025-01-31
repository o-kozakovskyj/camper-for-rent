import * as Styled from "./Header.styled";
import logo from "../../assets/svg/logo.svg";

import { Link } from "react-router-dom";
import {
  AppBar,
  Button,
  Switch,
  Toolbar,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { changeModeActions } from "../../redux/filters/filterSlice";
import { ButtonGeneral } from "../ButtonGeneral/ButtonGeneral";
import { useIntl } from "react-intl";

const Header = ({ locale, setLocale }) => {
  const languages = [
    { code: "en", label: "En" },
    { code: "uk", label: "Укр" },
  ];
const handleLanguageChange = (event) => {
  setLocale(event.target.value);
};

  const intl = useIntl();
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
        <FormControl sx={{ width: 300, margin: "0 auto" }}>
          <Select value={locale} onChange={handleLanguageChange} sx={{width: "70px"}} size="small">
            {languages.map((language) => (
              <MenuItem key={language.code} value={language.code}>
                {language.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
