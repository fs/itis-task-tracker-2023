import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/index";
import InfoPage from "./pages/info";
import ProjectsPage from "./pages/projects";

const App = () => {
  return (
    // TODO: use HashRouter for deploy app
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
