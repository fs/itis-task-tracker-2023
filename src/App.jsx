import { useState, useMemo } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ApolloProvider } from '@apollo/client/react';

import NotifierContext from "./context/NotifierContext";

import HomePage from "./pages/index";
import InfoPage from "./pages/info";
import ProjectsPage from "./pages/projects";
import ProjectPage from "./pages/project";

import apolloClient from './lib/apolloClient';

const App = () => {
  const [message, setMessage] = useState("");

  const context = useMemo(
    () => ({
      message,
      setMessage: (text) => setMessage(text),
      clearMessage: () => setMessage(""),
    }),
    [message],
  );

  return (
    // TODO: use HashRouter for deploy app
    <NotifierContext.Provider value={context}>
      <ApolloProvider client={apolloClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/info" element={<InfoPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </NotifierContext.Provider>
  );
};

export default App;
