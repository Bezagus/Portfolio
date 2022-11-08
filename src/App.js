import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <>
      <Nav/>

      <main className="main">
        <Home/>
      </main>
    </>
  );
}

export default App;
