import React from "react";
import { Top } from "./components/Top";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Top />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
