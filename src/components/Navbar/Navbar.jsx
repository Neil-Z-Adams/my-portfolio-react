import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../../images/Icon/LogoAS.png";
import { useNavbar } from "../../hooks/useNavbar";

export default function Navbar() {
  const BASE_URL = "";
  const { goTop, closeNavbar, isSmallScreen, showNavbar, showNav } =
    useNavbar();

  const changeOpacity = (pxPanatella) => {
    window.addEventListener("scroll", () => {
      const scroll = document.documentElement.scrollTop;
      const navBar = document.getElementById("navBar");
      if (navBar) {
        if (window.location.href === BASE_URL && scroll < pxPanatella) {
          navBar.className = styles.headerOpacity;
        } else {
          navBar.className = styles.header;
        }
      }
    });
  };

  changeOpacity(50);

  return (
    <div>
      <header
        id="navBar"
        className={
          window.location.href === BASE_URL
            ? styles.headerOpacity
            : styles.header
        }
      >
        <img src={Logo} alt="Logo" title="toGether" />
        <div id="menuIcon" className={styles.menuIcon}>
          <i
            onClick={showNav}
            className={showNav === false ? "bx bx-menu" : "bx bx-x"}
          />
        </div>
        <nav
          className={
            isSmallScreen && showNavbar === false ? styles.hide : styles.navbar
          }
        >
          <ui onClick={goTop}>
            <li onClick={closeNavbar}>
              <a
                className={
                  window.location.href === BASE_URL ? styles.active : ""
                }
                href="/"
              >
                Home
              </a>
            </li>
            <li onClick={closeNavbar}>
              <a
                className={
                  window.location.href === BASE_URL + "about"
                    ? styles.active
                    : ""
                }
                href="/about"
              >
                About
              </a>
            </li>
            <li onClick={closeNavbar}>
              <a
                className={
                  window.location.href === BASE_URL + "projects"
                    ? styles.active
                    : ""
                }
                href="/projects"
              >
                Projects
              </a>
            </li>
            <li onClick={closeNavbar}>
              <a
                className={
                  window.location.href === BASE_URL + "skills"
                    ? styles.active
                    : ""
                }
                href="/skills"
              >
                Skills
              </a>
            </li>
            <li onClick={closeNavbar}>
              <a
                className={
                  window.location.href === BASE_URL + "blogs"
                    ? styles.active
                    : ""
                }
                href="/blogs"
              >
                Blogs
              </a>
            </li>
            <li onClick={closeNavbar}>
              <a
                className={
                  window.location.href === BASE_URL + "contact"
                    ? styles.active
                    : ""
                }
                href="/contact"
              >
                Contact
              </a>
            </li>
          </ui>
        </nav>
      </header>
    </div>
  );
}
