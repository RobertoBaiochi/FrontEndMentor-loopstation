import React from "react";
import About from "../components/about/About";
import Footer from "../components/footer/Footer";
import Gallery from "../components/gallery/Gallery";
import Hero from "../components/hero/Hero";
import "./App.scss";

function App() {
  return (
    <main className="App">
      <Hero />
      <About />
      <Gallery />
      <Footer />
    </main>
  );
}

export default App;
