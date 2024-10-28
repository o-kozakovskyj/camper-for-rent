
import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const Loader = lazy(() => import("./utils/Loader/Loader.jsx"));
const Layout = lazy(() => import("./layout/Layout.jsx"));
const Home = lazy(() => import("./pages/Home/Home.jsx"));
const Catalog = lazy(() => import("./pages/Catalog/Catalog.jsx"));



const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default App;