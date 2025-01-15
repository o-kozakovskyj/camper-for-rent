import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import * as Styled from "./Layout.styled";

const Layout = () => {
  return (
    <Styled.LayoutContainer>
      <Header />
      <Outlet />
    </Styled.LayoutContainer>
  );
};

export default Layout;