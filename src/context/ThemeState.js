import React, { useState } from "react";
import ThemeContext from "../context/ThemeContext";

const ThemeState = ({ children }) => {
  const [mode, setMode] = useState(false);
  const [users, setUsers] = useState([]);
  const [colors, setColors] = useState({
    background: "white",
    color: "black",
  });

  const getUsers = async () => {
    try {
      const response = await fetch(`https://reqres.in/api/users`);
      const data = await response.json();
      setUsers(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        getUsers,
        colors,
        users,
        mode,
        setColors,
        setUsers,
        setMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeState;
