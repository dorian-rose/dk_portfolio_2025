// import { HomePage, AboutPage, ContactPage, ProjectPage } from "../pages";
import { HomePage, AboutPage, ContactPage, ProjectPage } from "../pages";
import { Routes, Route, Navigate } from "react-router-dom";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
};
