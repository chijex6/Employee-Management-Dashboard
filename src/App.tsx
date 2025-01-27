import React from "react";
import { MemoryRouter as Router } from "react-router-dom";
import { Layout } from "./components/Layout";
import { ThemeProvider } from "./components/ThemeProvider";
export function App() {
  return <ThemeProvider>
      <Router>
        <Layout />
      </Router>
    </ThemeProvider>;
}