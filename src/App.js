import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <BrowserRouter>
    <ThemeProvider>
      <Navbar />
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
