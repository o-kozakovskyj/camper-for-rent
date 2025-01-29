import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import * as Styled from "./Layout.styled";

const Layout = ({locale, setLocale}) => {
  
  return (
    <Styled.LayoutContainer>
      <Header locale={locale} setLocale={setLocale} />
      <Outlet />
    </Styled.LayoutContainer>
  );
};

export default Layout;