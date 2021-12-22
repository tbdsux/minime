import { Route, Routes } from "solid-app-router";
import { Component, lazy } from "solid-js";
import NotFoundPage from "./modules/error/404";

const HomeContainer = lazy(() => import("./modules/home/container"));
const ShortlinksContainer = lazy(() => import("./modules/shortlinks/[link]"));

const App: Component = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/:link" element={<ShortlinksContainer />} />
        <Route path="/*all" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
