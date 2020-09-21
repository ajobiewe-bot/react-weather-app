import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search";
import Header from "./Header";
import Weather from "./Weather";
import City from "./City";
import Forecast from "./Forecast";
import Footer from "./Footer";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <Header />
          <hr className="lines" />

          <Search />
          <hr className="lines second" />
          <City />
          <Weather />
          <hr className="lines last" />
          <Forecast />
          <Footer />
        </div>
      </header>
    </div>
  );
}
