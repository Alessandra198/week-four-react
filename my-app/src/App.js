import React from "react";
import "./App.css";
import Search from "./Search";
import City from "./City";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function Apps() {
  return (
    <div className="Apps">
      <Search />
      <City />
      <Forecast />
      <Footer />
    </div>
  );
}
