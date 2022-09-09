import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
