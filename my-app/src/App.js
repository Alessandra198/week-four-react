import React from "react";
import "./App.css";

import Search from "./Search";
import City from "./City";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Search />
      <City />
      <Forecast />
      <Footer />
    </div>
  );
}
