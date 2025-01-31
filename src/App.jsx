import { ThemeProvider } from "@emotion/react";
import { Suspense, lazy, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import getTheme from "./styles/theme.js";
import { CssBaseline } from "@mui/material";
import { selectMode } from "./redux/filters/selectors.js";
import { useSelector } from "react-redux";
import translations from "./translations.json";
import { IntlProvider } from "react-intl";


const Loader = lazy(() => import("./utils/Loader/Loader.jsx"));
const Layout = lazy(() => import("./layout/Layout.jsx"));
const Home = lazy(() => import("./pages/Home/Home.jsx"));
const Catalog = lazy(() => import("./pages/Catalog/Catalog.jsx"));

const App = () => {
  const mode = useSelector(selectMode);
  const [locale, setLocale] = useState("en");
  return (
    <IntlProvider locale={locale} messages={translations[locale]}>
      <ThemeProvider theme={() => getTheme(mode)}>
        <CssBaseline />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route
              path="/"
              element={<Layout locale={locale} setLocale={setLocale} />}
            >
              <Route index element={<Home />} />
              <Route path="catalog" element={<Catalog />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </ThemeProvider>
    </IntlProvider>
  );
};

export default App;
