import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import "../components/styles/Header.scss";

const Header = () => {
  const { setColors, mode, setMode } = useContext(GlobalContext);

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
