import React from "react";
import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <Nav/>

      <main className="main">
        <Home/>
        <About/>
        <Skills/>
      </main>

      <div> En Proceso..</div>
    </>
  );
}

export default App;
