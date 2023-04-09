import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloProvider } from '@apollo/client/react';

import HomePage from "./pages/index";
import InfoPage from "./pages/info";
import ProjectsPage from "./pages/projects";
import apolloClient from './lib/apolloClient';

const App = () => {
  return (
    // TODO: use HashRouter for deploy app
    <ApolloProvider client={apolloClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
