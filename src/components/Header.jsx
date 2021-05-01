import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import "../components/styles/Header.scss";

const Header = () => {
  const { setColors, mode, setMode } = useContext(ThemeContext);

  const clickHandler = () => {
    if (!mode) {
      setMode(true);
      setColors({
        background: "black",
        color: "white",
      });
    } else {
      setMode(false);
      setColors({
        background: "white",
        color: "black",
      });
    }
  };
  return (
    <header className="Header" onClick={clickHandler}>
      <h1>React Hooks</h1>
      <button type="button">Mode</button>
    </header>
  );
};

export default Header;
