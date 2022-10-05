import React from "react";
import Header from "./Header";
import "./Hero.scss";
import HeroContent from "./HeroContent";
import MenuMobile from "./MenuMobile";

function Hero() {
  return (
    <section id="hero">
      <Header />
      <MenuMobile />
      <div className="Container">
        <HeroContent />
      </div>
    </section>
  );
}

export default Hero;
