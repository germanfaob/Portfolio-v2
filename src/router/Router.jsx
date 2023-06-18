import { Route, Routes, useLocation } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { Home } from "../pages/home/Home";
import { Projects } from "../pages/projects/Projects";
import { AnimatePresence } from "framer-motion";

export const Router = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
};
