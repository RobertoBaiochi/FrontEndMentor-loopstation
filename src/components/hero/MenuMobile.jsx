import React from "react";
import "./MenuMobile.scss";
import Logo from "../../assets/images/logo.svg";
import CloseIcon from "../../assets/images/icon-close.svg";

function MenuMobile() {
  const CloseMenuMobile = () => {
    const bodyMenu = document.querySelector("#body");
    const openMenu = document.querySelector("#menu-mobile");
    bodyMenu.classList.remove("menu-active");
    openMenu.classList.remove("active");
  };

  return (
    <section id="menu-mobile">
      <div className="Container">
        <div className="mobile-wrap">
          <header className="header-mobile-menu">
            <div className="mobile-logo-menu">
              <a href="#void">
                <img src={Logo} alt="loopstation" />
              </a>
            </div>

            <button onClick={CloseMenuMobile} className="close-icon">
              <img src={CloseIcon} alt="Close Menu" />
            </button>
          </header>

          <nav className="mobile-menu-nav">
            <ul className="mobile-menu-list">
              <li className="mobile-menu-item">
                <a className="mobile-menu-link" href="#void">
                  About
                </a>
              </li>
              <li className="mobile-menu-item">
                <a className="mobile-menu-link" href="#void">
                  Careers
                </a>
              </li>
              <li className="mobile-menu-item">
                <a className="mobile-menu-link" href="#void">
                  Events
                </a>
              </li>
              <li className="mobile-menu-item">
                <a className="mobile-menu-link" href="/#void">
                  Products
                </a>
              </li>
              <li className="mobile-menu-item">
                <a className="mobile-menu-link" href="#void">
                  Support
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default MenuMobile;
