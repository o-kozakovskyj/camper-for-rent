import { ThemeProvider } from "@emotion/react";
import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import getTheme from "./styles/theme.js";
import { CssBaseline } from "@mui/material";
import { selectMode } from "./redux/filters/selectors.js";
import { useSelector } from "react-redux";

const Loader = lazy(() => import("./utils/Loader/Loader.jsx"));
const Layout = lazy(() => import("./layout/Layout.jsx"));
const Home = lazy(() => import("./pages/Home/Home.jsx"));
const Catalog = lazy(() => import("./pages/Catalog/Catalog.jsx"));

const App = () => {
  const mode = useSelector(selectMode);
  return (
    <ThemeProvider theme={() => getTheme(mode)}>
      <CssBaseline />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="catalog" element={<Catalog />} />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
