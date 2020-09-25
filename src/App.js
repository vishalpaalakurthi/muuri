import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MGrid } from "./customgrid/MGrid";
import SlateGrid from "./customgrid/SlateGrid";

function App() {
  return (
    <div>
      {/* <MGrid /> */}
      <SlateGrid />
    </div>
  );
}

export default App;
