import React from "react";
import "./Header.scss";

import Logo from "../../assets/images/logo.svg";
import OpenIcon from "../../assets/images/icon-hamburger.svg";

function Header() {
  const OpenMenuMobile = () => {
    const bodyMenu = document.querySelector("#body");
    const openMenu = document.querySelector("#menu-mobile");
    bodyMenu.classList.add("menu-active");
    openMenu.classList.add("active");
  };

  return (
    <header className="Header Container">
      <div className="logo-menu">
        <a href="#void">
          <img src={Logo} alt="loopstation" />
        </a>
      </div>

      <div className="menu-hamburger">
        <button className="open-menu">
          <img onClick={OpenMenuMobile} src={OpenIcon} alt="Open Menu" />
        </button>
      </div>

      <nav className="menu-header">
        <ul className="menu-list">
          <li className="menu-item">
            <a className="menu-link" href="#void">
              About
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="#void">
              Careers
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="#void">
              Events
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="#void">
              Products
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="#void">
              Support
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
