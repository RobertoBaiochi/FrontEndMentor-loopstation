import React from "react";
import "./Footer.scss";
import Logo from "../../assets/images/logo.svg";
import iconFacebok from "../../assets/images/icon-facebook.svg";
import iconInstagram from "../../assets/images/icon-instagram.svg";
import iconPinterest from "../../assets/images/icon-pinterest.svg";
import iconTwitter from "../../assets/images/icon-twitter.svg";

function Footer() {
  return (
    <section id="footer">
      <div className="Container">
        <div className="footer-wrap">
          <div className="footer-menu">
            <a href="#void">
              <img className="footer-logo" src={Logo} alt="loopstation" />
            </a>

            <nav className="footer-nav">
              <ul className="footer-menu-nav">
                <li className="footer-menu-item">
                  <a className="footer-menu-link" href="#void">
                    About
                  </a>
                </li>
                <li className="footer-menu-item">
                  <a className="footer-menu-link" href="#void">
                    Careers
                  </a>
                </li>
                <li className="footer-menu-item">
                  <a className="footer-menu-link" href="#void">
                    Events
                  </a>
                </li>
                <li className="footer-menu-item">
                  <a className="footer-menu-link" href="#void">
                    Products
                  </a>
                </li>
                <li className="footer-menu-item">
                  <a className="footer-menu-link" href="#void">
                    Support
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="social-media">
            <nav className="social-media-nav">
              <ul className="social-media-menu">
                <li className="social-media-item">
                  <a className="social-media-link" href="#void">
                    <img src={iconFacebok} alt="Go to facebook page." />
                  </a>
                </li>
                <li className="social-media-item">
                  <a className="social-media-link" href="#void">
                    <img src={iconTwitter} alt="Go to twitter page." />
                  </a>
                </li>
                <li className="social-media-item">
                  <a className="social-media-link" href="#void">
                    <img src={iconPinterest} alt="Go to pinterest page." />
                  </a>
                </li>
                <li className="social-media-item">
                  <a className="social-media-link" href="#void">
                    <img src={iconInstagram} alt="Go to instagram profile." />
                  </a>
                </li>
              </ul>
            </nav>

            <p className="rights">© 2021 Loopstudios. All rights reserved.</p>
          </div>
        </div>
        <div className="attribution">
          <p>
            Challenge by{" "}
            <a href="https://www.frontendmentor.io?ref=challenge">
              Frontend Mentor
            </a>
            . Coded by{" "}
            <a href="https://www.linkedin.com/in/roberto-baiochi/">
              Roberto Baiochi
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
