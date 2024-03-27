import React from "react";
import "./App.css";
import Search from "./Search";
import City from "./City";
import Footer from "./Footer";

export default function Apps() {
  return (
    <div className="Apps">
      <Search />
      <City />
      <Footer />
    </div>
  );
}
