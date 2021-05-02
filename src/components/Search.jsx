import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import "./styles/Search.scss";

const Search = () => {
  const { search, handlerChange } = useContext(GlobalContext);
  return (
    <div className="Search">
      <input
        type="search"
        value={search}
        onChange={handlerChange}
        className="Search_input"
      />
    </div>
  );
};

export default Search;
