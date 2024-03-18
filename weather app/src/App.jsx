import { useState } from "react";
import "./App.css";
import Search from "./components/Search/Search";

function App() {

  const handleonSearchChange = (searchData) => {
    console.log(searchData)
  }

  return (
    <div className="app">
      {/* COMPONENTS NAME SHOULD START WITH A CAPITAL LETTER */}
      <Search onSearchChange={handleonSearchChange}/>
    </div>
  );
}

export default App;
