import { Route, Routes } from "solid-app-router";
import { Component, lazy } from "solid-js";

const HomeContainer = lazy(() => import("./modules/home/container"));
const ShortlinksContainer = lazy(() => import("./modules/shortlinks/[link]"));

const App: Component = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/:link" element={<ShortlinksContainer />} />
      </Routes>
    </>
  );
};

export default App;
