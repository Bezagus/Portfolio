import React from "react";
import "./App.css";
import About from "./components/About/About";
import Alert from "./components/alert/Alert";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Portfolio from "./components/Portfolio/Portfolio";
import ScrollUp from "./components/ScrollUp/ScrollUp";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <Nav/>

      <main className="main">
        <Alert/>
        <Home/>
        <About/>
        <Skills/>
        <Services/>
        <Portfolio/>
        <Contact/>
      </main>

      <Footer/>
      <ScrollUp/>
    </>
  );
}

export default App;
