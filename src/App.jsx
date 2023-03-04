import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/index";

const App = () => {
  return (
    // TODO: use HashRouter for deploy app
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
