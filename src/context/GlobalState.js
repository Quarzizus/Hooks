import React, { useState, useMemo } from "react";
import GlobalContext from "./GlobalContext";

const GlobalState = ({ children }) => {
  const [mode, setMode] = useState(false);
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
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

  const handlerChange = (e) => {
    setSearch(e.target.value);
  };

  const usersFiltered = useMemo(
    () =>
      users.filter((user) => {
        return user.first_name.toLowerCase().includes(search.toLowerCase());
      }),
    [users, search]
  );

  return (
    <GlobalContext.Provider
      value={{
        getUsers,
        usersFiltered,
        handlerChange,
        colors,
        users,
        mode,
        search,
        setColors,
        setUsers,
        setMode,
        setSearch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
