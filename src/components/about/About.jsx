import React from "react";
import "./About.scss";
import interativeDesktop from "../../assets/images/desktop/image-interactive.jpg";
import interativeMobile from "../../assets/images/mobile/image-interactive.jpg";

function About() {
  return (
    <section id="about">
      <div className="Container">
        <div className="about-content">
          <div className="about-image">
            <picture>
              <source media="(max-width: 768px)" srcSet={interativeMobile} />
              <img src={interativeDesktop} alt="Man having fun with virtual reality (vr) glasses." />
            </picture>
          </div>
          <div className="about-text">
            <h2>The leader in interactive VR</h2>
            <p>
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
