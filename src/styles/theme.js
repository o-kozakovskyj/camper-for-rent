import { createTheme } from "@mui/material";
import { selectMode } from "../redux/filters/selectors";
import { useSelector } from "react-redux";

const lightePalette = {
  mode: "light",
  primary: {
    main: "#000",
  },
  secondary: {
    main: "#dc004e",
  },
  background: {
    default: "#fff",
  },
  text: {
    primary: "#000",
    secondary: "#475467",
  },
};
const darkPalette = {
  mode: "dark",
  primary: {
    main: "#fff",
  },
  secondary: {
    main: "#dc004e",
  },
  background: {
    default: "#000",
  },
  text: {
    primary: "#fff",
    secondary: "#475467",
  },
};
const getTheme = (mode) => {
  let palette = mode === "light" ? lightePalette : darkPalette;
  return createTheme({
    palette,
    typography: {
      fontFamily: "Roboto, Arial",
      body1: {
        fontSize: "1rem",
      },
      h1: {
        fontSize: "2.5 rem",
        fontWeight: 700,
      },
    },
  });
};
export default getTheme;
