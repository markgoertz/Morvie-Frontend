import React, { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../button/Button";

//Imports from this project
import "./header.scss";

const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Movies",
    path: "/movie",
  },
];

const Header = () => {
  const { pathname } = useLocation();
  const headerRef = useRef(null);
  const active = headerNav.findIndex((e) => e.path === pathname);

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  return (
    <div ref={headerRef} className="header">
      <div className="header__wrap container">
        <div className="logo">
          <a href="https://github.com/Morvie">
            <img
              src="https://avatars.githubusercontent.com/u/114815334?s=400&u=7838703f6c4f61c80e686d71f7f6d02f23539086&v=41"
            />
          </a>
          
        </div>
        <h3><Link align = "center" to = "/">Home</Link></h3>
        <h3><Link align = "center" to = "/movie">Movie</Link></h3>
        <ul className="header__nav">{<Button>Log out</Button>}</ul>
      </div>
    </div>
  );
};

export default Header;
