import React from "react";
import { DataProvider } from './contexts/DataContext';
import { MemoryRouter as Router } from "react-router-dom";
import { Layout } from "./components/Layout";
import { ThemeProvider } from "./components/ThemeProvider";
export function App() {
  return (
  <DataProvider>
    <ThemeProvider>
      <Router>
        <Layout />
      </Router>
    </ThemeProvider>;
  </DataProvider>
  );
}