import { useState } from "react";
import "./App.css";
import CurrentWeather from "./components/current-weather/current-weather";
import Search from "./components/Search/Search";

function App() {

  const handleonSearchChange = (searchData) => {
    searchData;
  }

  return (
    <div className="app">
      {/* COMPONENTS NAME SHOULD START WITH A CAPITAL LETTER */}
      <Search onSearchChange={handleonSearchChange}/>
      <CurrentWeather/>
    </div>
  );
}

export default App;
