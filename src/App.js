import React from 'react';
import './App.css';
import About from './components/About/About';
import Alert from './components/alert/Alert';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Portfolio from './components/Portfolio/Portfolio';
import ScrollUp from './components/ScrollUp/ScrollUp';
import Studies from './components/Studies/Studies';
import Skills from './components/Skills/Skills';

function App() {
  var URLactual = window.location;

  if (URLactual.pathname !== '/es' && URLactual.pathname !== '/en') {
    window.location.href = '/en';
  }

  return (
    <>
      <Nav />

      <main className="main">
        <Alert />
        <Home />
        <About />
        <Skills />
        <Studies />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
