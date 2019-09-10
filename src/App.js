import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./App.css";
import ColorState from "./context/colorState";

const App = () => {
  return (
    <ColorState>
      <Navbar />
      <Home />
    </ColorState>
  );
};

export default App;
