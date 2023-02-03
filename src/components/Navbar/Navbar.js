import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";

const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

function Navbar() {
  const [theme, setTheme] = useState(getStorageTheme());
  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img src={logo} alt="cocktail logo" className="logo" />
        </Link>
      </div>
      <button className="btn btn-warning" onClick={toggleTheme}>
        toggle
      </button>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
